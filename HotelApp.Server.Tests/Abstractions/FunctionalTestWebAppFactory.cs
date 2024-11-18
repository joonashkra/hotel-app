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
        private readonly string _roomsCollectionName = "roomsTest";
        private readonly string _usersCollectionName = "usersTest";
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
                    options.RoomsCollectionName = _roomsCollectionName;
                    options.UsersCollectionName = _usersCollectionName;
                });
            });
        }

        public async Task InitializeAsync()
        {
            var _client = new MongoClient(_connectionURI);
            var _database = _client.GetDatabase(_databaseName);
            var roomscollection = _database.GetCollection<BsonDocument>(_roomsCollectionName);
            var userscollection = _database.GetCollection<BsonDocument>(_usersCollectionName);

            var sampleRoom = new BsonDocument
            {
                { "_id", ObjectId.GenerateNewId() },
                { "Location", "TestLocation" },
                { "Features", new BsonArray { "TestFeature1", "TestFeature2" } },
                { "IsAvailable", true },
                { "Price", 123 }
            };

            var sampleUser = new BsonDocument
            {
                { "_id", ObjectId.GenerateNewId() },
                { "userName", "TestAdmin" },
                { "passwordHash", "testadminpassword" },
                { "email", "testadmin@example.com" },
                { "phoneNumber", "test0451200321"},
                { "isAdmin", true }
            };

            await roomscollection.InsertOneAsync(sampleRoom);
            await userscollection.InsertOneAsync(sampleUser);

            var roomsInDb = await roomscollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();
            var usersInDb = await userscollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

            // Confirm that the document exists
            if (roomsInDb.Any())
            {
                var insertedRoom = roomsInDb.FirstOrDefault(r => r["_id"] == sampleRoom["_id"]);
                
                if (insertedRoom != null)
                {
                    Console.WriteLine("Room inserted successfully.");
                }

                else
                {
                    throw new Exception("Inserted room not found in the database.");
                }
            }

            if (roomsInDb.Any() == false)
            {
                throw new Exception("No documents related to rooms found in the collection.");
            }

            if (usersInDb.Any())
            {
                var insertedUser = usersInDb.FirstOrDefault(r => r["_id"] == sampleUser["_id"]);

                if (insertedUser != null)
                {
                    Console.WriteLine("User inserted successfully.");
                }

                else
                {
                    throw new Exception("Inserted user not found in the database.");
                }
            }

            if (usersInDb.Any() == false)
            {
                throw new Exception("No documents related to users found in the collection.");
            }
        }


        public async new Task DisposeAsync()
        {
            var _client = new MongoClient(_connectionURI);
            var _database = _client.GetDatabase(_databaseName);
            var collection = _database.GetCollection<BsonDocument>(_roomsCollectionName);
            await collection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);
            var usersCollection = _database.GetCollection<BsonDocument>(_usersCollectionName);
            await usersCollection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);
        }
    }
}
