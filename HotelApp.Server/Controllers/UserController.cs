using HotelApp.Server.Services;
using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Models;
using HotelApp.Server.Dtos;

namespace HotelApp.Server.Controllers;

[ApiController]
[Route("api/users")]

public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService) =>
        _userService = userService;

    [HttpGet]
    public async Task<ActionResult<List<User>>> Get()
    {
        var users = await _userService.GetUsersAsync();
        
        foreach (var user in users)
        {
            user.PasswordHash = null;
        }

        return Ok(users);
    }

    [HttpPost]
    public async Task<ActionResult<User>> Post([FromBody] CreateUserDto newUserDto)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(newUserDto.PasswordHash);

        var newUser = new User
        {
            UserName = newUserDto.UserName,
            PasswordHash = hashedPassword,
            Email = newUserDto.Email,
            PhoneNumber = newUserDto.PhoneNumber,
            IsAdmin = newUserDto.IsAdmin
        };

        await _userService.PostUserAsync(newUser);

        return CreatedAtAction(nameof(Get), new {id = newUser.Id}, newUser);
    }
}

