using HotelApp.Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;

namespace HotelApp.Server.Tests.Abstractions;

public class FunctionalTestWebAppFactory : WebApplicationFactory<Program>, IAsyncLifetime
{
    private readonly string _databaseName = "hotelApp";
    private readonly string _roomsCollectionName = "roomsTest";
    private readonly string _usersCollectionName = "usersTest";
    private readonly string _bookingsCollectionName = "bookingsTest";
    private readonly string _staffCollectionName = "staffTest";
    private readonly string? _connectionURI;
    private readonly DBInitializer? _dbInitializer;

    public FunctionalTestWebAppFactory()
    {
        DotNetEnv.Env.TraversePath().Load();
        _connectionURI = System.Environment.GetEnvironmentVariable("MONGODB_URI");
        if (_connectionURI != null)
        {
            _dbInitializer = new DBInitializer(
                _connectionURI,
                "hotelApp",
                "roomsTest",
                "usersTest",
                "bookingsTest",
                "staffTest"
            );
        }
    }

    public string GetConnectionString()
    {
        if (string.IsNullOrEmpty(_connectionURI))
        {
            throw new Exception("Connection string not found.");
        }
        return _connectionURI;
    }

    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        if (string.IsNullOrEmpty(_connectionURI))
        {
            throw new Exception("Connection string not found.");
        }

        builder.ConfigureTestServices(services =>
        {
            services.Configure<HotelAppDatabaseSettings>(options =>
            {
                options.ConnectionURI = _connectionURI;
                options.DatabaseName = _databaseName;
                options.RoomsCollectionName = _roomsCollectionName;
                options.UsersCollectionName = _usersCollectionName;
                options.StaffCollectionName = _staffCollectionName;
                options.BookingsCollectionName = _bookingsCollectionName;
            });
        });
    }

    public async Task InitializeAsync()
    {
        if(_dbInitializer != null)
        {
            await _dbInitializer.InsertSampleRooms();
            await _dbInitializer.InsertSampleUser();
            await _dbInitializer.InsertSampleAdmin();
            await _dbInitializer.InsertSampleBookings();
        }
    }

    public async new Task DisposeAsync()
    {
        if(_dbInitializer != null)
        {
            await _dbInitializer.ClearDB();
        }
    }
}
