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

    public async Task<User?> GetUserByUserNameAsync(string UserName)
    {
       return await _usersCollection.Find(user => user.UserName == UserName).FirstOrDefaultAsync();
    }

    public async Task PostUserAsync(User newUser)
    {
        await _usersCollection.InsertOneAsync(newUser);
    }

    public async Task<User?> ValidateUserAsync(string UserName, string Password)
    {
        User expectedUser = await GetUserByUserNameAsync(UserName);

        if (expectedUser == null)
        {
            return null;
        }

        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(Password, expectedUser.PasswordHash);

        if (!isPasswordValid)
        {
            return null;
        }

        return expectedUser;
    }
}
