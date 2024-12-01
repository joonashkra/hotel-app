using HotelApp.Server.Dtos;
using HotelApp.Server.Tests.Abstractions;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net.Http.Json;

namespace HotelApp.Server.Tests.Login;

public class UsernameLoginAdminTest : BaseFunctionalTest
{
    public UsernameLoginAdminTest(FunctionalTestWebAppFactory factory) : base(factory) { }

    [Fact]
    public async Task ShouldLoginWithEmailAdmin()
    {
        var loginDto = new
        {
            UserName = "TestAdmin",
            Password = "Testadminpassword"
        };

        HttpResponseMessage loginResponse = await HttpClient.PostAsJsonAsync("api/users/login/staff", loginDto);

        await Task.Delay(500);

        Assert.Equal(System.Net.HttpStatusCode.OK, loginResponse.StatusCode);
    }
}
