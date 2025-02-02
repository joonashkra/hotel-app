using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Services;
using HotelApp.Server.Models;
using HotelApp.Server.Dtos;
using Microsoft.AspNetCore.Authorization;

namespace HotelApp.Server.Controllers;

[ApiController]
[Route("api/rooms")]

public class RoomController : ControllerBase 
{
    private readonly RoomService _roomService;
    private readonly ILogger<RoomController> _logger;

    public RoomController(RoomService roomService, ILogger<RoomController> logger) {
        _roomService = roomService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<List<Room>>> Get()
    {
        var rooms = await _roomService.GetRoomsAsync();
        return Ok(rooms);
    }

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Room>> Get(string id)
    {
        var room = await _roomService.GetRoomByIdAsync(id);

        if (room is null)
        {
            return NotFound();
        }

        return Ok(room);
    }

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

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Room>> Post([FromBody] CreateRoomDto newRoomDto)
    {
        var newRoom = new Room
        {
            Location = newRoomDto.Location,
            Category = newRoomDto.Category,
            Features = newRoomDto.Features,
            IsAvailable = newRoomDto.IsAvailable,
            Price = newRoomDto.Price,
        };

        await _roomService.PostRoomAsync(newRoom);

        return CreatedAtAction(nameof(Get), new { id = newRoom.Id }, newRoom);
    }

    [Authorize(Roles = "Admin,Staff")]
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(string id, [FromBody] CreateRoomDto updatedRoom)
    {

        var targetRoom = await _roomService.GetRoomByIdAsync(id);
        
        if (targetRoom == null)
        {
            return NotFound($"Couldn't find a room with the same ID, no changes made");
        }

        var updatedRoomModel = new Room
        {
            Id = id,
            Category = updatedRoom.Category,
            Location = updatedRoom.Location,
            Features = updatedRoom.Features,
            IsAvailable = updatedRoom.IsAvailable,
            Price = updatedRoom.Price
        };

        await _roomService.UpdateRoomAsync(id, updatedRoomModel);

        return NoContent();
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(string id)
    {

        var targetRoom = await _roomService.GetRoomByIdAsync(id);

        if (targetRoom == null)
        {
            return NotFound($"Couldn't find a room with the same ID, nothing removed");
        }

        bool deletionSuccessful = await _roomService.DeleteRoomAsync(id);
        
        if (deletionSuccessful == true)
        {
            return NoContent();
        }

        else
        {
            return StatusCode(500, $"An error occurred while deleting the room");
        }
    }
}