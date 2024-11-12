using HotelApp.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using HotelApp.Server.Tests.Abstractions;

namespace HotelApp.Server.Tests.Rooms
{
    public class GetRoomsByLocationTests : IClassFixture<FunctionalTestWebAppFactory>
    {
        private readonly HttpClient _httpClient;

        public GetRoomsByLocationTests(FunctionalTestWebAppFactory factory)
        {
            _httpClient = factory.CreateClient();
        }

        [Fact]
        public async Task Should_ReturnRoomsByLocation()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("api/rooms/Location/TestLocation");

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }
    }
}
