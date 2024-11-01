using HotelApp.Server.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using MongoDB.Bson;
using MongoDB.Driver;

namespace HotelApp.Server.Tests.Abstractions
{
    public class FunctionalTestWebAppFactory : WebApplicationFactory<Program>, IAsyncLifetime
    {
        private readonly string _databaseName = "hotelApp";
        private readonly string _collectionName = "roomsTest";
        private readonly string? _connectionURI;

        public FunctionalTestWebAppFactory()
        {
            DotNetEnv.Env.TraversePath().Load();
            _connectionURI = System.Environment.GetEnvironmentVariable("MONGODB_URI");
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
                    options.CollectionName = _collectionName;
                });
            });
        }

        public async Task InitializeAsync()
        {
            var _client = new MongoClient(_connectionURI);
            var _database = _client.GetDatabase(_databaseName);
            var collection = _database.GetCollection<BsonDocument>(_collectionName);

            await collection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);

            var sampleRoom = new BsonDocument
            {
                { "_id", ObjectId.Parse("6724ffed0e5a4a8e173d020a") }, // Use ObjectId for _id
                { "Location", "TestLocation" },
                { "Features", new BsonArray { "TestFeature1", "TestFeature2" } },
                { "IsAvailable", true },
                { "Price", 123 }
            };

            await collection.InsertOneAsync(sampleRoom);
        }

        public async new Task DisposeAsync()
        {
            var _client = new MongoClient(_connectionURI);
            var _database = _client.GetDatabase(_databaseName);
            var collection = _database.GetCollection<BsonDocument>(_collectionName);
            await collection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);
        }
    }
}
