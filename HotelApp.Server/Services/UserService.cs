using HotelApp.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using BCrypt.Net;
using MongoDB.Bson;

namespace HotelApp.Server.Services;

public class UserService
{
    public IMongoCollection<User> _usersCollection;
    public IMongoCollection<User> _staffCollection;

    public UserService(IOptions<HotelAppDatabaseSettings> settings)
    {
        var mongoClient = new MongoClient(settings.Value.ConnectionURI);
        var _database = mongoClient.GetDatabase(settings.Value.DatabaseName);

        _usersCollection = _database.GetCollection<User>(settings.Value.UsersCollectionName);
        _staffCollection = _database.GetCollection<User>(settings.Value.StaffCollectionName);
    }

    public async Task<List<User>> GetUsersAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task<User?> GetUserByUserNameAsync(string username)
    {   
        User user = await _usersCollection.Find(user => user.UserName == username).FirstOrDefaultAsync();
        user ??= await _usersCollection.Find(user => user.Email.ToLower() == username.ToLower()).FirstOrDefaultAsync();

        return user;
    }

    public async Task PostUserAsync(User newUser)
    {
        await _usersCollection.InsertOneAsync(newUser);
    }

    public async Task<User?> ValidateUserAsync(string username, string password)
    {
        User expectedUser = await GetUserByUserNameAsync(username);

        if (expectedUser == null)
        {
            return null;
        }

        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, expectedUser.PasswordHash);

        if (!isPasswordValid)
        {
            return null;
        }

        return expectedUser;
    }

    public async Task<List<User>> GetStaffUsersAsync() =>
        await _staffCollection.Find(_ => true).ToListAsync();

    public async Task<User?> GetStaffUserByUserNameAsync(string username)
    {
        User user = await _staffCollection.Find(user => user.UserName == username).FirstOrDefaultAsync();
        user??= await _staffCollection.Find(user => user.Email.ToLower() == username.ToLower()).FirstOrDefaultAsync();

        return user;
    }

    public async Task PostStaffUserAsync(User newUser)
    {
        await _staffCollection.InsertOneAsync(newUser);
    }

    public async Task<User?> ValidateStaffMemberAsync(string username, string password)
    {
        User expectedUser = await GetStaffUserByUserNameAsync(username);

        if (expectedUser == null)
        {
            return null;
        }

        bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, expectedUser.PasswordHash);

        if (!isPasswordValid)
        {
            return null;
        }

        return expectedUser;
    }
}
