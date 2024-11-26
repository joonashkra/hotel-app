using HotelApp.Server.Services;
using HotelApp.Server.Models;
using System;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace HotelApp.Server
{
    public partial class Program
    {
        public static void Main(string[] args)
        {
            DotNetEnv.Env.TraversePath().Load();

            var connectionURI = System.Environment.GetEnvironmentVariable("MONGODB_URI");
            var JWT_secretKey = System.Environment.GetEnvironmentVariable("JWT_SECRET_KEY");

            if (string.IsNullOrEmpty(connectionURI))
            {
                throw new Exception("Connection string not found.");
            }

            if (string.IsNullOrEmpty(JWT_secretKey))
            {
                throw new Exception("Secret key for JWT not found.");
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
            builder.Services.AddSingleton<BookingService>();
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

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                //sallii http jos on development ympäristössä, muutoin https
                options.RequireHttpsMetadata = !builder.Environment.IsDevelopment();
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
                    ValidAudience = builder.Configuration["JwtSettings:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWT_secretKey))
                };
            });

            //For running app locally with dotnet, not Docker
            if (builder.Environment.IsDevelopment())
            {
                builder.WebHost.UseUrls("http://localhost:5000");
            }

            var app = builder.Build();

            if (!builder.Environment.IsDevelopment())
            {
                //vaatii https production ympäristössä
                app.UseHttpsRedirection();
            }

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseCors(MyAllowSpecificOrigins);

            app.MapControllers();

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}
