using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class CreateUserDto
{
    [Required]
    public string? Name { get; set; }
}

