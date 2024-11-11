using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace HotelApp.Server.Tests.Rooms
{
    public class GetRoomsByLocationTest : IClassFixture<FunctionalTestWebAppFactory>
    {
        private readonly HttpClient _httpClient;

        public GetRoomsByLocationTest(FunctionalTestWebAppFactory factory)
        {
            _httpClient = factory.CreateClient();
        }

        [Fact]
        public async Task Should_ReturnRoomsByLocation()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("api/rooms/Location/TestLocation");

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine("Response Body: " + responseBody);

            var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

            Assert.NotNull(rooms);
            Assert.NotEmpty(rooms);
        }
    }
}