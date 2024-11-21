using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HotelApp.Server.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("userName")]
    public string? UserName { get; set; }

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("passwordHash")]
    public string? PasswordHash { get; set; }

    [BsonElement("phoneNumber")]
    public string? PhoneNumber { get; set; }

    [BsonElement("isAdmin")]
    public bool? IsAdmin { get; set; }
}
