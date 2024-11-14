using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HotelApp.Server.Models;

public class Room
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string Location { get; set; } = null!;

    public string[] Features { get; set; } = null!;

    public bool IsAvailable { get; set; }

    public int Price { get; set; }

    public User[]? BookedUsers { get; set; }

}