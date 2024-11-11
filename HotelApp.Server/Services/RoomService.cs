using System.Security.Cryptography.X509Certificates;
using HotelApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
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

    public async Task<List<Room>> GetRoomsByLocationAsync(string Location) =>
        await _roomsCollection.Find(room => room.Location == Location).ToListAsync();

    public async Task<Room?> GetRoomByIdAsync(string id)
    {
        return await _roomsCollection.Find(room => room.Id == id).FirstOrDefaultAsync();
    }

    public async Task UpdateRoomAsync(string id, Room updatedRoom)
    {
        await _roomsCollection.ReplaceOneAsync(room => room.Id == id, updatedRoom);
    }

    public async Task PostRoomAsync(Room newRoom) =>
        await _roomsCollection.InsertOneAsync(newRoom);

    public async Task<bool> DeleteRoomAsync(string id)
    {
        var result = await _roomsCollection.DeleteOneAsync(room => room.Id == id);

        return result.DeletedCount > 0;
    }
}