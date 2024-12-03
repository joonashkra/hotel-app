using System.ComponentModel.DataAnnotations;

namespace HotelApp.Server.Dtos;

public class BookingDto
{
    [Required] public string Name { get; set; } = null!;
    [Required] public string Email { get; set; } = null!;
    [Required] public string PhoneNumber { get; set; } = null!;
    [Required] public string StartDate { get; set; } = null!;
    [Required] public string EndDate { get; set; } = null!;
    
    [Required] public string Location { get; set; } = null!;

    public string? Category { get; set; } = null!;
    public string? RoomId { get; set; } = null!;
    public string? Comments { get; set; }

    public string? Status { get; set; } = null!;
}

