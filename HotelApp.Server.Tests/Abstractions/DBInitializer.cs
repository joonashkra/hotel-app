using MongoDB.Bson;
using MongoDB.Driver;

namespace HotelApp.Server.Tests.Abstractions;

public class DBInitializer
{
    private readonly IMongoDatabase _database;
    private readonly string _roomsCollectionName;
    private readonly string _usersCollectionName;
    private readonly string _staffCollectionName;
    private readonly string _bookingsCollectionName;
    private readonly MongoClient _client;

    public DBInitializer(string connectionURI, string databaseName, string roomsCollectionName, string usersCollectionName, string bookingsCollectionName, string staffCollectionName)
    {
        _client = new MongoClient(connectionURI);
        _database = _client.GetDatabase(databaseName);
        _roomsCollectionName = roomsCollectionName;
        _usersCollectionName = usersCollectionName;
        _bookingsCollectionName = bookingsCollectionName;
        _staffCollectionName = staffCollectionName;
    }

    public async Task InsertSampleRooms()
    {
        var roomsCollection = _database.GetCollection<BsonDocument>(_roomsCollectionName);

        var sampleRoom1 = new BsonDocument
        {
            { "Location", "TestLocation" },
            { "Features", new BsonArray { "TestFeature1", "TestFeature2" } },
            { "Category", "Deluxe" },
            { "IsAvailable", true },
            { "Price", 123 }
        };

        var sampleRoom2 = new BsonDocument
        {
            { "Location", "TestLocation2" },
            { "Features", new BsonArray { "TestFeature3", "TestFeature4" } },
            { "Category", "Basic" },
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
        }

        throw new Exception("Rooms collection initialization failed.");
    }

    public async Task InsertSampleUser()
    {
        var usersCollection = _database.GetCollection<BsonDocument>(_usersCollectionName);
        string hashedpassword = BCrypt.Net.BCrypt.HashPassword("Testpassword");
        var sampleUser = new BsonDocument
        {
            { "userName", "Testuser1" },
            { "passwordHash", hashedpassword },
            { "email", "testuser1@example.com" },
            { "phoneNumber", "test0451200321"},
            { "role", " " }
        };

        var userToInsert = new List<BsonDocument> { sampleUser };
        await usersCollection.InsertManyAsync(userToInsert);

        for (int attempt = 0; attempt < 10; attempt++)
        {
            var userInDb = await usersCollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

            if (userInDb.Any())
            {
                return;
            }
        }

        throw new Exception("Users collection initialization failed.");
    }

    public async Task InsertSampleAdmin()
    {
        var staffCollection = _database.GetCollection<BsonDocument>(_staffCollectionName);
        string hashedpassword = BCrypt.Net.BCrypt.HashPassword("Testadminpassword");

        var sampleAdmin = new BsonDocument
        {
            { "userName", "TestAdmin" },
            { "passwordHash", hashedpassword },
            { "email", "testadmin@hotel.com" },
            { "phoneNumber", "test0451200321"},
            { "role", "Admin" }
        };

        var adminToInsert = new List<BsonDocument> { sampleAdmin };
        await staffCollection.InsertManyAsync(adminToInsert);

        for (int attempt = 0; attempt < 10; attempt++)
        {
            var adminInDb = await staffCollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

            if (adminInDb.Any())
            {
                return;
            }
        }

        throw new Exception("Users collection initialization failed.");
    }

    public async Task InsertSampleBookings()
    {
        var bookingsCollection = _database.GetCollection<BsonDocument>(_bookingsCollectionName);

        var sampleBooking = new BsonDocument
        {
            { "RoomId", "123" },
            { "Name", "Test" },
            { "Category", "Basic" },
            { "Email", "test@test.fi" },
            { "PhoneNumber", "045459422231" },
            { "StartDate", "2025-10-10" },
            { "EndDate", "2025-10-10" },
            { "Comments", "Testcomment" }
        };

        var sampleBooking2 = new BsonDocument
        {
            { "RoomId", "234" },
            { "Name", "Test2" },
            { "Category", "Deluxe" },
            { "Email", "test2@test.fi" },
            { "PhoneNumber", "045459422231" },
            { "StartDate", "2025-10-15" },
            { "EndDate", "2025-10-20" },
            { "Comments", "Testcomment2" }
        };

        var bookingsToInsert = new List<BsonDocument> { sampleBooking, sampleBooking2 };
        await bookingsCollection.InsertManyAsync(bookingsToInsert);

        for (int attempt = 0; attempt < 10; attempt++)
        {
            var bookingsInDb = await bookingsCollection.Find(FilterDefinition<BsonDocument>.Empty).ToListAsync();

            if (bookingsInDb.Any())
            {
                return;
            }
        }

        throw new Exception("Bookings collection initialization failed.");
    }

    public async Task ClearDB()
    {
        var collection = _database.GetCollection<BsonDocument>(_roomsCollectionName);
        await collection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);

        var usersCollection = _database.GetCollection<BsonDocument>(_usersCollectionName);
        await usersCollection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);

        var bookingsCollection = _database.GetCollection<BsonDocument>(_bookingsCollectionName);
        await bookingsCollection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);

        var staffCollection = _database.GetCollection<BsonDocument>(_staffCollectionName);
        await staffCollection.DeleteManyAsync(FilterDefinition<BsonDocument>.Empty);
    }
}
