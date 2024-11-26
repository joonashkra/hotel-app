using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class LoginDto
{
    [Required]
    public string UserName { get; set; }
    public string Password { get; set; }
}
