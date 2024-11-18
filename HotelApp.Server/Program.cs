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

            if (string.IsNullOrEmpty(connectionURI))
            {
                throw new Exception("Connection string not found.");
            }

            var builder = WebApplication.CreateBuilder(args);

            builder.Configuration.AddInMemoryCollection(new Dictionary<string, string>
            { 
                {"HotelAppDatabase:ConnectionURI", connectionURI }
            });

            builder.Services.Configure<HotelAppDatabaseSettings>
            (
                builder.Configuration.GetSection("HotelAppDatabase")
            );

            builder.Services.AddSingleton<RoomService>();
            builder.Services.AddSingleton<UserService>();
            builder.Services.AddControllers();

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:3000")
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });

            //For running app locally with dotnet, not Docker
            if (builder.Environment.IsDevelopment())
            {
                builder.WebHost.UseUrls("http://localhost:5000");
            }

            var app = builder.Build();

            app.UseStaticFiles();

            app.UseCors(MyAllowSpecificOrigins);

            app.MapControllers();

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}
