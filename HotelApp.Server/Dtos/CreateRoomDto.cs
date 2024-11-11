using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class CreateRoomDto
{
    [Required]
    public string Location { get; set; } = null!;
    public string[] Features { get; set; } = null!;
    public bool IsAvailable { get; set; }
    public int Price { get; set; }
}