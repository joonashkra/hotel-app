using HotelApp.Server.Models;
using System.Net.Http.Json;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Headers;

namespace HotelApp.Server.Tests.Rooms;

public class GetRoomTest : BaseFunctionalTest
{
    public GetRoomTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task Should_ReturnRooms()
    {
        HttpResponseMessage response = await HttpClient.GetAsync("api/rooms");

        await Task.Delay(500);

        response.EnsureSuccessStatusCode();

        var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

        await Task.Delay(500);

        Assert.NotNull(rooms);
        Assert.NotEmpty(rooms);
    }
}