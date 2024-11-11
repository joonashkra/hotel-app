using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Services;
using HotelApp.Server.Models;
using HotelApp.Server.Dtos;

namespace HotelApp.Server.Controllers;

[ApiController]
[Route("api/rooms")]

public class RoomController : ControllerBase {
    private readonly RoomService _roomService;

    public RoomController(RoomService roomService) =>
        _roomService = roomService;

    [HttpGet]
    public async Task<List<Room>> Get() =>
        await _roomService.GetRoomsAsync();

    //get room by location :)
    [HttpGet("location/{Location}")]
    public async Task<ActionResult<List<Room>>> GetByLocation(string Location)
    {
        var rooms = await _roomService.GetRoomsByLocationAsync(Location);

        if (rooms == null || rooms.Count == 0)
        {
            return NotFound($"No rooms found in location: {Location}");
        }

        return Ok(rooms);
    }
        
    [HttpPost]
    public async Task<ActionResult<Room>> Post([FromBody] CreateRoomDto newRoomDto)
    {
        var newRoom = new Room
        {
            Location = newRoomDto.Location,
            Features = newRoomDto.Features,
            IsAvailable = newRoomDto.IsAvailable,
            Price = newRoomDto.Price
        };

        await _roomService.PostRoomAsync(newRoom);

        return CreatedAtAction(nameof(Get), new { id = newRoom.Id }, newRoom);
    }
}