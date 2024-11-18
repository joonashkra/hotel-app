using HotelApp.Server.Dtos;
using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace HotelApp.Server.Tests.Rooms
{
    public class PostRoomTest : IClassFixture<FunctionalTestWebAppFactory>
    {
        private readonly HttpClient _httpClient;

        public PostRoomTest(FunctionalTestWebAppFactory factory)
        {
            _httpClient = factory.CreateClient();
        }

        [Fact]
        public async Task Should_PostRoom()
        {
            string[] testfeatures = new string[2]{ "test1", "test2" };

            var newRoom = new CreateRoomDto
            {
                Location = "TestNewLocation",
                Category =  "TestCategory",
                Features = testfeatures,
                IsAvailable = true,
                Price = 100
            };

            var response = await _httpClient.PostAsJsonAsync("api/rooms", newRoom);

            response.EnsureSuccessStatusCode();

            Assert.Equal(System.Net.HttpStatusCode.Created, response.StatusCode);
        }
    }
}
