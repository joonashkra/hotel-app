using HotelApp.Server.Dtos;
using HotelApp.Server.Tests.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Login;

public class EmailLoginTest : BaseFunctionalTest
{
    public EmailLoginTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task ShouldLoginWithEmail()
    {
        var loginDto = new
        {
            UserName = "testuser1@example.com",
            Password = "Testpassword"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login", loginDto);

        await Task.Delay(500);

        Assert.Equal(System.Net.HttpStatusCode.OK, loginResponse.StatusCode);
    }
}
