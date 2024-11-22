using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Bookings;

public class GetBookingsTest : BaseFunctionalTest
{
    public GetBookingsTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task Should_ReturnBookings()
    {
        HttpResponseMessage response = await HttpClient.GetAsync("api/bookings");

        await Task.Delay(500);

        response.EnsureSuccessStatusCode();

        var bookings = await response.Content.ReadFromJsonAsync<List<Booking>>();

        Assert.NotNull(bookings);
        Assert.NotEmpty(bookings);
    }
}