using HotelApp.Server.Models;
using HotelApp.Server.Tests.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace HotelApp.Server.Tests.Bookings;

public class GetBookingsTest : BaseFunctionalTest
{
    public GetBookingsTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task Should_ReturnBookings()
    {
        HttpResponseMessage response = await HttpClient.GetAsync("api/bookings");

        response.EnsureSuccessStatusCode();

        var bookings = await response.Content.ReadFromJsonAsync<List<Booking>>();

        Assert.NotNull(bookings);
        Assert.NotEmpty(bookings);
    }
}

