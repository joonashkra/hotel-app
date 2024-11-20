using MongoDB.Bson;
using MongoDB.Driver;

namespace HotelApp.Server.Tests.Abstractions
{
    public class DBInitializer
    {
        private readonly IMongoDatabase _database;
        private readonly string _roomsCollectionName;
        private readonly string _usersCollectionName;
        private readonly MongoClient _client;

        public DBInitializer(string connectionURI, string databaseName, string roomsCollectionName, string usersCollectionName)
        {
            _client = new MongoClient(connectionURI);
            _database = _client.GetDatabase(databaseName);
            _roomsCollectionName = roomsCollectionName;
            _usersCollectionName = usersCollectionName;
        }

        public async Task InsertSampleRooms()
        {
            var roomsCollection = _database.GetCollection<BsonDocument>(_roomsCollectionName);

            var sampleRoom1 = new BsonDocument
            {
                { "Location", "TestLocation" },
                { "Features", new BsonArray { "TestFeature1", "TestFeature2" } },
                { "IsAvailable", true },
                { "Price", 123 }
            };

            var sampleRoom2 = new BsonDocument
            {
                { "Location", "TestLocation2" },
                { "Features", new BsonArray { "TestFeature3", "TestFeature4" } },
                { "IsAvailable", false },
                { "Price", 200 }
            };

            var roomsToInsert = new List<BsonDocument> { sampleRoom1, sampleRoom2 };
            await roomsCollection.InsertManyAsync(roomsToInsert);

            for (int attempt = 0; attempt < 10; attempt++)
            {
                var roomsInDb = await roomsCollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

                if (roomsInDb.Any())
                {
                    return;
                }
                await Task.Delay(1000);
            }

            throw new Exception("Rooms collection initialization failed.");
        }

        public async Task InsertSampleUsers()
        {
            var usersCollection = _database.GetCollection<BsonDocument>(_usersCollectionName);

            var sampleUser = new BsonDocument
            {
                { "userName", "TestAdmin" },
                { "passwordHash", "testadminpassword" },
                { "email", "testadmin@example.com" },
                { "phoneNumber", "test0451200321"},
                { "isAdmin", true }
            };

            var sampleUser2 = new BsonDocument
            {
                { "userName", "TestUser" },
                { "passwordHash", "testUserPassword" },
                { "email", "testUser@example.com" },
                { "phoneNumber", "test1928749812"},
                { "isAdmin", false }
            };

            var usersToInsert = new List<BsonDocument> { sampleUser, sampleUser2 };
            await usersCollection.InsertManyAsync(usersToInsert);

            for (int attempt = 0; attempt < 10; attempt++)
            {
                var roomsInDb = await usersCollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

                if (roomsInDb.Any())
                {
                    return;
                }
                await Task.Delay(1000);
            }

            throw new Exception("Users collection initialization failed.");
        }
    }
}
