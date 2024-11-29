using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Users;

public class GetUsersTests : BaseFunctionalTest
{
    public GetUsersTests(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task Should_NotReturnUsers()
    {
        HttpResponseMessage response = await HttpClient.GetAsync("api/users");
        Console.WriteLine($"Response Status Code: {response.StatusCode}");

        if (!response.IsSuccessStatusCode)
        {
            string responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine("Error response body: " + responseBody);
            Assert.True(response.IsSuccessStatusCode, "API call was not successful");
            return;
        }

        string responseBodySuccess = await response.Content.ReadAsStringAsync();
        Console.WriteLine("Response Body: " + responseBodySuccess);

        var users = await response.Content.ReadFromJsonAsync<List<User>>();
        Assert.Null(users);
    }
}
