using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HotelApp.Server.Models;

public class Booking
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    public string? RoomId { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string StartDate { get; set; }

    public string EndDate { get; set; }

    public string? Comments { get; set; }
}

