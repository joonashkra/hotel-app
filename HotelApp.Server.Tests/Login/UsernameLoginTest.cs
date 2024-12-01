using HotelApp.Server.Dtos;
using HotelApp.Server.Tests.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Login;

public class UsernameLoginTest : BaseFunctionalTest
{
    public UsernameLoginTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task ShouldLoginWithUsername()
    {
        var loginDto = new
        {
            UserName = "Testuser1",
            Password = "Testpassword"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login", loginDto);

        await Task.Delay(500);

        Assert.Equal(System.Net.HttpStatusCode.OK, loginResponse.StatusCode);
    }
}
