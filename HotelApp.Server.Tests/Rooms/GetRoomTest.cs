using HotelApp.Server.Models;
using System.Net.Http.Json;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Headers;

namespace HotelApp.Server.Tests.Rooms;

public class GetRoomTest : BaseFunctionalTest
{
    public GetRoomTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    public class LoginResponse
    {
        public string Token { get; set; }
    }

    [Fact]
    public async Task Should_ReturnRooms()
    {
        var loginDto = new
        {
            UserName = "Admin",
            Password = "Admin"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login/staff", loginDto);
        loginResponse.EnsureSuccessStatusCode();

        // Deserialize to a strongly typed object
        var loginResult = await loginResponse.Content.ReadFromJsonAsync<LoginResponse>();
        string? token = loginResult.Token;

        Assert.NotNull(token);

        HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);
        HttpResponseMessage response = await HttpClient.GetAsync("api/rooms");

        await Task.Delay(500);

        response.EnsureSuccessStatusCode();

        var rooms = await response.Content.ReadFromJsonAsync<List<Room>>();

        Assert.NotNull(rooms);
        Assert.NotEmpty(rooms);
    }
}