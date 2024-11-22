using HotelApp.Server.Models;
using System.Net.Http.Json;
using HotelApp.Server.Tests.Abstractions;

namespace HotelApp.Server.Tests.Bookings
{
    public class GetRoomTests : BaseFunctionalTest
    {
        public GetRoomTests(FunctionalTestWebAppFactory factory) : base(factory) { }

        [Fact]
        public async Task Should_ReturnRooms()
        {
            HttpResponseMessage response = await HttpClient.GetAsync("api/rooms");

            response.EnsureSuccessStatusCode();

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }

        [Fact]
        public async Task Should_ReturnRoomsByLocation()
        {
            HttpResponseMessage response = await HttpClient.GetAsync("api/rooms/Location/TestLocation");

            response.EnsureSuccessStatusCode();

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }
    }
}
