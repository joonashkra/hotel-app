using Microsoft.AspNetCore.Mvc;
using HotelApp.Server.Services;
using HotelApp.Server.Models;

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

}