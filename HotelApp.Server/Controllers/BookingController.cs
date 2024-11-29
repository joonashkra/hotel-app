using HotelApp.Server.Dtos;
using HotelApp.Server.Models;
using HotelApp.Server.Services;
using Microsoft.AspNetCore.Authorization;
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

    [Authorize(Roles = "Admin,Staff")]
    [HttpGet]
    public async Task<ActionResult<List<Booking>>> Get()
    {
        var bookings = await _bookingService.GetBookingsAsync();
        return Ok(bookings);
    }

    [HttpPost]
    public async Task<ActionResult<Booking>> Post([FromBody] BookingDto newBookingDto)
    {
        var bookings = await _bookingService.GetBookingsAsync();

        //Varmistetaan, että ei oo samoille päiville huone varattuna jo
        foreach (var booking in bookings)
        {
            if (newBookingDto.RoomId == booking.RoomId)
            {
                DateTime newBookingStartDate = DateTime.Parse(newBookingDto.StartDate);
                DateTime newBookingEndDate = DateTime.Parse(newBookingDto.EndDate);
                DateTime comparedBookingStartDate = DateTime.Parse(booking.StartDate);
                DateTime comparedBookingEndDate = DateTime.Parse(booking.EndDate);

                if (_bookingService.DatesConflict(newBookingStartDate, newBookingEndDate, comparedBookingStartDate, comparedBookingEndDate))
                {
                    return BadRequest($"Already existing booking for the room from {newBookingDto.StartDate} until {newBookingDto.EndDate}");
                }
            }
        }

        var newBooking = new Booking
        {
            RoomId = newBookingDto.RoomId,
            Name = newBookingDto.Name,
            Email = newBookingDto.Email,
            PhoneNumber = newBookingDto.PhoneNumber,
            StartDate = newBookingDto.StartDate,
            EndDate = newBookingDto.EndDate,
            Comments = newBookingDto.Comments,
            Category = newBookingDto.Category,
            Location = newBookingDto.Location
        };

        //jos ei oo varauksessa mainittu huonetta tai categoriaa, varaus pendaa
        if (newBooking.Category == null || newBooking.RoomId == null)
        {
            newBooking.Status = "pending";
        }

        else
        {
            newBooking.Status = "confirmed";
        }

        await _bookingService.PostBookingAsync(newBooking);

        return CreatedAtAction(nameof(Get), new { id = newBooking.Id }, newBooking);
    }

    [Authorize (Roles = "Admin,Staff")]
    [HttpPut("{id}")]
    public async Task<ActionResult<Booking>> Put(string id, [FromBody] BookingDto modifiedBookingDto)
    {
        var targetBooking = await _bookingService.GetBookingByIdAsync(id);

        if (targetBooking == null)
        {
            return BadRequest($"No bookings found containing ID {id}");
        }

        var modifiedBooking = new Booking
        {
            RoomId = modifiedBookingDto.RoomId,
            Name = modifiedBookingDto.Name,
            Email = modifiedBookingDto.Email,
            PhoneNumber = modifiedBookingDto.PhoneNumber,
            StartDate = modifiedBookingDto.StartDate,
            EndDate = modifiedBookingDto.EndDate,
            Comments = modifiedBookingDto.Comments,
            Category = modifiedBookingDto.Category,
            Location = modifiedBookingDto.Location
        };

        var bookings = await _bookingService.GetBookingsAsync();

        //Varmistetaan, että ei oo samoille päiville huone varattuna jo
        foreach (var booking in bookings)
        {
            if (modifiedBooking.RoomId == targetBooking.RoomId)
            {
                DateTime newBookingStartDate = DateTime.Parse(modifiedBooking.StartDate);
                DateTime newBookingEndDate = DateTime.Parse(modifiedBooking.EndDate);
                DateTime comparedBookingStartDate = DateTime.Parse(booking.StartDate);
                DateTime comparedBookingEndDate = DateTime.Parse(booking.EndDate);

                if (_bookingService.DatesConflict(newBookingStartDate, newBookingEndDate, comparedBookingStartDate, comparedBookingEndDate))
                {
                    return BadRequest($"Already existing booking for the room from {modifiedBookingDto.StartDate} until {modifiedBookingDto.EndDate}");
                }
            }
        }

        await _bookingService.PostBookingAsync(modifiedBooking);

        return NoContent();
    }
}

