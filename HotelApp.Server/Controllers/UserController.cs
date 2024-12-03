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
            new Claim(ClaimTypes.NameIdentifier, user.Id?.ToString() ?? string.Empty)
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

    [HttpPost("login/staff")]
    public async Task<ActionResult> StaffLogin([FromBody] LoginDto loginDto)
    {
        var user = await _userService.ValidateStaffMemberAsync(loginDto.UserName, loginDto.Password);

        if (user == null)
        {
            return Unauthorized("Invalid credentials.");
        }

        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.UserName ?? string.Empty),
            new Claim(ClaimTypes.NameIdentifier, user.Id?.ToString() ?? string.Empty),
            new Claim(ClaimTypes.Role, user.Role ?? string.Empty)
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

        return Ok(new { Token = jwt, user.Role });
    }

    //henkilökunta pystyy hakeen userit
    [Authorize(Roles = "Admin,Staff")]
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

    //vain admin pystyy hakee hlökuntakäyttäjät
    [Authorize(Roles = "Admin")]
    [HttpGet("staff")]
    public async Task<ActionResult<List<User>>> GetStaffUsers()
    {
        var users = await _userService.GetStaffUsersAsync();

        foreach (var user in users)
        {
            user.PasswordHash = null;
        }

        return Ok(users);
    }

    //user without any role can be created by anyone, let's say it's for customers
    [HttpPost]
    public async Task<ActionResult<User>> PostUser([FromBody] CreateUserDto newUserDto)
    {
        //varmistetaan, ettei pysty luomaan uutta käyttäjää samalla nimellä, säpolla tai puhnrolla
        var users = await _userService.GetUsersAsync();

        foreach (var user in users)
        {
            if (user.UserName.Equals(newUserDto.UserName, StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest($"Cannot create the user, username {newUserDto.UserName} already exists.");
            }

            if (user.Email.Equals(newUserDto.Email, StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest($"Cannot create the user, user with email address {newUserDto.Email} already exists.");
            }

            if (user.PhoneNumber.Equals(newUserDto.PhoneNumber))
            {
                return BadRequest($"Cannot create the user, user with phone number {newUserDto.PhoneNumber} already exists.");
            }
        }

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(newUserDto.PasswordHash);

        var newUser = new User
        {
            UserName = newUserDto.UserName,
            PasswordHash = hashedPassword,
            Email = newUserDto.Email,
            PhoneNumber = newUserDto.PhoneNumber,
            Role = null
        };

        await _userService.PostUserAsync(newUser);

        //return only username, so API wont respond with password hash
        return CreatedAtAction(nameof(Get), new {id = newUser.Id}, newUser.UserName);
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("staff")]
    public async Task<ActionResult<User>> PostStaff([FromBody] CreateUserDto newUserDto)
    {
        //varmistetaan, ettei pysty luomaan uutta käyttäjää samalla nimellä, säpolla tai puhnrolla
        var users = await _userService.GetStaffUsersAsync();

        foreach (var user in users)
        {
            if (user.UserName.Equals(newUserDto.UserName, StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest($"Cannot create the user, username {newUserDto.UserName} already exists.");
            }

            if (user.Email.Equals(newUserDto.Email, StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest($"Cannot create the user, user with email address {newUserDto.Email} already exists.");
            }

            if (user.PhoneNumber.Equals(newUserDto.PhoneNumber))
            {
                return BadRequest($"Cannot create the user, user with phone number {newUserDto.PhoneNumber} already exists.");
            }
        }

        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(newUserDto.PasswordHash);

        var newUser = new User
        {
            UserName = newUserDto.UserName,
            PasswordHash = hashedPassword,
            Email = newUserDto.Email,
            PhoneNumber = newUserDto.PhoneNumber,
            Role = newUserDto.Role
        };

        await _userService.PostStaffUserAsync(newUser);

        //return only username, so API wont respond with password hash
        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser.UserName);
    }
}

