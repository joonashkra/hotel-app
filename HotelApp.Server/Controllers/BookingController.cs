using HotelApp.Server.Dtos;
using HotelApp.Server.Models;
using HotelApp.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace HotelApp.Server.Controllers;

[ApiController]
[Route("api/bookings")]

public class BookingController : ControllerBase

{
    private readonly BookingService _bookingService;

    public BookingController(BookingService bookingService)
    {
        _bookingService = bookingService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Booking>>> Get()
    {
        var bookings = await _bookingService.GetBookingsAsync();

        if (bookings == null || bookings.Count == 0)
        {
            return NotFound($"No rooms found.");
        }

        return Ok(bookings);
    }

    [HttpPost]
    public async Task<ActionResult<Booking>> Post([FromBody] BookingDto newRoomDto)
    {
        var newBooking = new Booking
        {
            RoomId = newRoomDto.RoomId,
            Name = newRoomDto.Name,
            Email = newRoomDto.Email,
            PhoneNumber = newRoomDto.PhoneNumber,
            StartDate = newRoomDto.StartDate,
            EndDate = newRoomDto.EndDate,
            Comments = newRoomDto.Comments,
        };

        await _bookingService.PostBookingAsync(newBooking);

        return CreatedAtAction(nameof(Get), new { id = newBooking.Id }, newBooking);
    }
}

