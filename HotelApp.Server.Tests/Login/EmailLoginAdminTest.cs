using HotelApp.Server.Dtos;
using HotelApp.Server.Tests.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Login;

public class EmailLoginAdminTest : BaseFunctionalTest
{
    public EmailLoginAdminTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task ShouldLoginWithEmailAdmin()
    {
        var loginDto = new
        {
            UserName = "testadmin@hotel.com",
            Password = "Testadminpassword"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login/staff", loginDto);

        await Task.Delay(500);

        Assert.Equal(System.Net.HttpStatusCode.OK, loginResponse.StatusCode);
    }
}