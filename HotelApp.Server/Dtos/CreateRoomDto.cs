using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class CreateRoomDto
{
    [Required] public string Location { get; set; } = null!;

    [Required] public string Category { get; set; } = null!;

    [Required] public string[] Features { get; set; } = null!;

    [Required] public bool IsAvailable { get; set; }
    
    [Required] public int Price { get; set; }
}