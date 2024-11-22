using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class BookingDto
{
    [Required]
    public string Name { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string PhoneNumber { get; set; } = null!;
    public string StartDate { get; set; } = null!;
    public string EndDate { get; set; } = null!;
    public string RoomId { get; set; } = null!;
    public string? Comments { get; set; }
}

