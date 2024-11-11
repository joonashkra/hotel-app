using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Services;
using HotelApp.Server.Models;
using HotelApp.Server.Dtos;
using ZstdSharp.Unsafe;
using MongoDB.Bson;

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

    [HttpPut("_id/{id}")]
    public async Task<ActionResult> Put(string id, [FromBody] CreateRoomDto updatedRoom)
    {
        if (!ObjectId.TryParse(id, out var roomId))
        {
            throw new ArgumentException("Invalid ObjectId format", nameof(id));
        }

        var targetRoom = await _roomService.GetRoomByIdAsync(roomId);
        
        if (targetRoom == null)
        {
            return NotFound("Couldn't find a room with the same ID, no changes made");
        }

        var updatedRoomModel = new Room
        {
            Id = roomId,
            Location = updatedRoom.Location,
            Features = updatedRoom.Features,
            IsAvailable = updatedRoom.IsAvailable,
            Price = updatedRoom.Price
        };

        await _roomService.UpdateRoomAsync(roomId, updatedRoomModel);

        return NoContent();
    }

    [HttpDelete("_id/{id}")]
    public async Task<ActionResult> Delete(string id)
    {
        if (!ObjectId.TryParse(id, out var roomId))
        {
            throw new ArgumentException("Invalid ObjectId format", nameof(id));
        }

        var targetRoom = await _roomService.GetRoomByIdAsync(roomId);

        if (targetRoom == null)
        {
            return NotFound("Couldn't find a room with the same ID, nothing removed");
        }

        bool deletionSuccessful = await _roomService.DeleteRoomAsync(roomId);
        
        if (deletionSuccessful == true)
        {
            return NoContent();
        }

        else
        {
            return StatusCode(500, "An error occurred while deleting the room");
        }
    }
}