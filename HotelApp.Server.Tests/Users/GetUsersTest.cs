using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Users
{
    public class GetUsersTests : BaseFunctionalTest
    {
        public GetUsersTests(FunctionalTestWebAppFactory factory) : base(factory) { }

        [Fact]
        public async Task Should_ReturnUsers()
        {
            HttpResponseMessage response = await HttpClient.GetAsync("api/users");
            Console.WriteLine($"Response Status Code: {response.StatusCode}");

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine("Response Body: " + responseBody);

            var users = await response.Content.ReadFromJsonAsync<List<User>>();

            Assert.NotNull(users);
            Assert.NotEmpty(users);
        }
    }
}
