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

        await Task.Delay(500);

        Assert.Equal(System.Net.HttpStatusCode.Unauthorized, response.StatusCode);
    }
}
