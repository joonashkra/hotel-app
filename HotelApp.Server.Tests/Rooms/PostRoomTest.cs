using HotelApp.Server.Dtos;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Bookings
{
    public class PostRoomTest : BaseFunctionalTest
    {
        public PostRoomTest(FunctionalTestWebAppFactory factory) : base(factory) { }

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

            var response = await HttpClient.PostAsJsonAsync("api/rooms", newRoom);

            response.EnsureSuccessStatusCode();

            Assert.Equal(System.Net.HttpStatusCode.Created, response.StatusCode);
        }
    }
}
