﻿
namespace HotelApp.Server.Tests.Abstractions;

public class BaseFunctionalTest : IClassFixture<FunctionalTestWebAppFactory>
{
    public BaseFunctionalTest(FunctionalTestWebAppFactory factory)
    {
        HttpClient = factory.CreateClient();
    }

    protected HttpClient HttpClient { get; init; }
}
