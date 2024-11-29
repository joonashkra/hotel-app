using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class LoginDto
{
    [Required]
    public string UserName { get; set; } //username voi olla myös säpo nyt
    public string Password { get; set; }
}
