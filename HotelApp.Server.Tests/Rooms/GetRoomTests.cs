using HotelApp.Server.Tests.Abstractions;
using HotelApp.Server.Models;
using System.Net.Http;
using Xunit;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Rooms
{
    public class GetRoomTests : IClassFixture<FunctionalTestWebAppFactory>
    {
        private readonly HttpClient _httpClient;

        public GetRoomTests(FunctionalTestWebAppFactory factory)
        {
            _httpClient = factory.CreateClient();
        }

        [Fact]
        public async Task Should_ReturnRooms()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("api/rooms");

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine("Should_ReturnRooms Response Body: " + responseBody);

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Console.WriteLine("Should_ReturnRooms Rooms: " + rooms);

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }

        [Fact]
        public async Task Should_ReturnRoomsByLocation()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("api/rooms/Location/TestLocation");

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine("Should_ReturnRoomsByLocation Response Body: " + responseBody);

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Console.WriteLine("Should_ReturnRoomsByLocation Rooms: " + rooms);

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }
    }
}
