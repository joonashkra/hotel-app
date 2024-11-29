namespace HotelApp.Server.Models;

public class HotelAppDatabaseSettings
{
    public string ConnectionURI { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
    public string RoomsCollectionName { get; set; } = null!;
    public string UsersCollectionName { get; set; } = null!;
    public string StaffCollectionName { get; set; } = null!;
    public string BookingsCollectionName { get; set; } = null!;
}