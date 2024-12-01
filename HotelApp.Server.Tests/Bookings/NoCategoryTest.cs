using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using HotelApp.Server.Tests.Abstractions;

namespace HotelApp.Server.Tests.Bookings;

public class NoCategoryTest : BaseFunctionalTest
{
    public NoCategoryTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    public async Task ShouldReturnPending()
    {
        var bookingDto = new
        {
            RoomId = "6749c95f1045b13e7310f261",
            Location = "Vaasa",
            Category = "",
            Name = "Name",
            Email = "Email@com",
            PhoneNumber = "123",
            StartDate = "2025-12-12",
            EndDate = "2025-12-15",
            Comments = "Comment"
        };

        var response = await HttpClient.PostAsJsonAsync("api/bookings", bookingDto);

        await Task.Delay(500);

        var responseContent = await response.Content.ReadFromJsonAsync<dynamic>();

        Assert.Equal("pending", (string)responseContent?.status);
    }
}
