using HotelApp.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using BCrypt.Net;
using MongoDB.Bson;

namespace HotelApp.Server.Services;

public class UserService
{
    public IMongoCollection<User> _usersCollection;

    public UserService(IOptions<HotelAppDatabaseSettings> settings)
    {
        var mongoClient = new MongoClient(settings.Value.ConnectionURI);

        var _database = mongoClient.GetDatabase(settings.Value.DatabaseName);

        _usersCollection = _database.GetCollection<User>(settings.Value.UsersCollectionName);
    }

    public async Task<List<User>> GetUsersAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task PostUserAsync(User newUser)
    {
        await _usersCollection.InsertOneAsync(newUser);
    }
}
