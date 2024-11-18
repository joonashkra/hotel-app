using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace HotelApp.Server.Tests.Users
{
    public class GetUsersTests : IClassFixture<FunctionalTestWebAppFactory>
    {
        private readonly HttpClient _httpClient;

        public GetUsersTests(FunctionalTestWebAppFactory factory)
        {
            _httpClient = factory.CreateClient();
        }

        [Fact]
        public async Task Should_ReturnUsers()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("api/users");
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

