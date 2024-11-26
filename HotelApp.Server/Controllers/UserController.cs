using HotelApp.Server.Services;
using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Models;
using HotelApp.Server.Dtos;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace HotelApp.Server.Controllers;

[ApiController]
[Route("api/users")]

public class UserController : ControllerBase
{
    private readonly UserService _userService;
    private readonly IConfiguration _configuration;

    public UserController(UserService userService, IConfiguration configuration)
    {
        _userService = userService;
        _configuration = configuration;
    }

    [HttpPost("login")]
    public async Task<ActionResult> Login([FromBody] LoginDto loginDto)
    {
        var user = await _userService.ValidateUserAsync(loginDto.UserName, loginDto.Password);

        if (user == null)
        {
            return Unauthorized("Invalid credentials.");
        }

        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.UserName ?? string.Empty),
            new Claim(ClaimTypes.NameIdentifier, user.Id?.ToString() ?? string.Empty),
            new Claim(ClaimTypes.Role, (bool)user.IsAdmin ? "Admin" : "User")
        };

        var JWT_secretKey = System.Environment.GetEnvironmentVariable("JWT_SECRET_KEY");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWT_secretKey));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken
        (
            _configuration["JwtSettings:Issuer"],
            _configuration["JwtSettings:Audience"],
            claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return Ok(new { Token = jwt });
    }

    [Authorize(Roles = "Admin")]
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
    public async Task<ActionResult<User>> PostAdmin([FromBody] CreateUserDto newUserDto)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(newUserDto.PasswordHash);

        var newUser = new User
        {
            UserName = newUserDto.UserName,
            PasswordHash = hashedPassword,
            Email = newUserDto.Email,
            PhoneNumber = newUserDto.PhoneNumber,
            IsAdmin = false
        };

        await _userService.PostUserAsync(newUser);

        return CreatedAtAction(nameof(Get), new {id = newUser.Id}, newUser);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("admin")]
    public async Task<ActionResult<User>> PostUser([FromBody] CreateUserDto newUserDto)
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

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }
}

