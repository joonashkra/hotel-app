using System.Security.Cryptography.X509Certificates;
using HotelApp.Server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace HotelApp.Server.Services;

public class RoomService {

    private readonly IMongoCollection<Room> _roomsCollection;

    public RoomService(IOptions<HotelAppDatabaseSettings> hotelAppDatabaseSettings) {
        var mongoClient = new MongoClient(hotelAppDatabaseSettings.Value.ConnectionURI);

        var mongoDatabase = mongoClient.GetDatabase(hotelAppDatabaseSettings.Value.DatabaseName);

        _roomsCollection = mongoDatabase.GetCollection<Room>(hotelAppDatabaseSettings.Value.CollectionName);
    }

    public async Task<List<Room>> GetRoomsAsync() =>
        await _roomsCollection.Find(_ => true).ToListAsync();

}