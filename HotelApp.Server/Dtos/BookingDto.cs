using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class BookingDto
{
    [Required]
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string PhoneNumber { get; set; } = null!;
    public string StartDate { get; set; }
    public string EndDate { get; set; }
    public string? Comments { get; set; }
    public string RoomId { get; set; }
}

