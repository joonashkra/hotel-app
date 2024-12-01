using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Bookings;

public class GetBookingsTest : BaseFunctionalTest
{
    public GetBookingsTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    public class LoginResponse
    {
        public string? Token { get; set; }
    }

    [Fact]
    public async Task Should_LoginAndReturnBookings()
    {
        var loginDto = new
        {
            UserName = "TestAdmin",
            Password = "Testadminpassword"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login/staff", loginDto);

        await Task.Delay(500);

        loginResponse.EnsureSuccessStatusCode();

        // Deserialize to a strongly typed object
        var loginResult = await loginResponse.Content.ReadFromJsonAsync<LoginResponse>();
        string token = loginResult.Token;

        Assert.NotNull(token);

        HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", token);

        HttpResponseMessage response = await HttpClient.GetAsync("api/bookings");

        await Task.Delay(500);

        response.EnsureSuccessStatusCode();
        var bookings = await response.Content.ReadFromJsonAsync<List<Booking>>();

        Assert.NotNull(bookings);
    }
}