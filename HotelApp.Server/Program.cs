
using HotelApp.Server.Services;
using HotelApp.Server.Models;
using System;

namespace HotelApp.Server
{
    public partial class Program
    {
        public static void Main(string[] args)
        {
            DotNetEnv.Env.TraversePath().Load();

            var connectionURI = System.Environment.GetEnvironmentVariable("MONGODB_URI");

            if (string.IsNullOrEmpty(connectionURI)) {
                throw new Exception("Connection string not found.");
            }

            var builder = WebApplication.CreateBuilder(args);
            builder.WebHost.UseUrls("http://localhost:5000");

            builder.Configuration.AddInMemoryCollection(new Dictionary<string, string>
            { {"HotelAppDatabase:ConnectionURI", connectionURI }
            });

            builder.Services.Configure<HotelAppDatabaseSettings>(
                builder.Configuration.GetSection("HotelAppDatabase"));

            builder.Services.AddSingleton<RoomService>();
            builder.Services.AddControllers();

            var app = builder.Build();

            app.MapControllers();

            app.Run();
        }
    }
}
