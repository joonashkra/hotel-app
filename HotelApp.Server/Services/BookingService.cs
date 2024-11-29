using HotelApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace HotelApp.Server.Services;

public class BookingService
{
    private readonly IMongoCollection<Booking> _bookingsCollection;

    public BookingService(IOptions<HotelAppDatabaseSettings> hotelAppDatabaseSettings)
    {
        var mongoClient = new MongoClient(hotelAppDatabaseSettings.Value.ConnectionURI);
        var mongoDatabase = mongoClient.GetDatabase(hotelAppDatabaseSettings.Value.DatabaseName);

        _bookingsCollection = mongoDatabase.GetCollection<Booking>(hotelAppDatabaseSettings.Value.BookingsCollectionName);
    }

    public async Task<List<Booking>> GetBookingsAsync() =>
       await _bookingsCollection.Find(_ => true).ToListAsync();

    public async Task PostBookingAsync(Booking newBooking) =>
        await _bookingsCollection.InsertOneAsync(newBooking);

    public async Task<Booking?> GetBookingByIdAsync(string id) =>
        await _bookingsCollection.Find(booking => booking.Id == id).FirstOrDefaultAsync();

    public async Task UpdateBookingAsync(string id, Booking modifiedBooking) =>
        await _bookingsCollection.ReplaceOneAsync(booking => booking.Id == id, modifiedBooking);

    public bool DatesConflict(DateTime startOfFirst, DateTime endOfFirst, DateTime startOfSecond, DateTime endOfSecond)
    {
        return startOfFirst < endOfSecond && endOfFirst > startOfSecond;
    }
}

