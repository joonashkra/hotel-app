using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class CreateUserDto
{
    [Required] public string UserName { get; set; } = null!;

    [Required] public string Email { get; set; } = null!;

    [Required] public string PasswordHash { get; set; } = null!;

    [Required] public string PhoneNumber { get; set; } = null!;

    //ei oo välttämätöntä olla roolia Dto:ssa, jotta voi luoda roolittomia eli ns vaikka asiakaskäyttäjiä
    public string Role { get; set; } = null!;
}