import { useState, useEffect } from "react";
import bookingService from "../../services/bookings";
import { Link, useNavigate } from "react-router-dom";

export default function BookingList({ bookings, setBookings, rooms }) {
  const [confirmAttempt, setConfirmAttempt] = useState(null);
  const [availableRooms, setAvailableRooms] = useState([]);
  const [confirmedRoom, setConfirmedRoom] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (availableRooms.length > 0) setConfirmedRoom(availableRooms[0].id);
  }, [availableRooms]);

  const deleteBooking = async (id) => {
    try {
      await bookingService.remove(id);
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id),
      );
      window.alert("Booking deleted succesfully.");
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  const confirmBooking = async (booking) => {
    const updatedBooking = {
      ...booking,
      status: "confirmed",
      roomId: confirmedRoom,
    };
    try {
      await bookingService.update(booking.id, updatedBooking);
      const updatedBookings = bookings.map((b) =>
        b.id === booking.id ? updatedBooking : b,
      );
      setBookings(updatedBookings);
      window.alert("Booking confirmed succesfully.");
      setConfirmAttempt(null);
    } catch (error) {
      window.alert(error.response.data);
    }
  };

  const toggleConfirm = async (booking) => {
    setConfirmAttempt(booking.id);
    const availableRooms = rooms.filter(
      (room) =>
        room.location === booking.location &&
        room.category === booking.category,
    );
    if (availableRooms.length < 1) {
      if (
        window.confirm(
          `No available rooms for location ${booking.location} and category ${booking.category}. Would you like to delete this booking?`,
        )
      ) {
        deleteBooking(booking.id);
      }
      setConfirmAttempt(null);
    }
    setAvailableRooms(availableRooms);
  };

  if (bookings && bookings.length < 1) return <p>No bookings found.</p>;

  return (
    <ul className="bookingsList">
      {bookings.map((booking) => (
        <div key={booking.id}>
          <li className="bookingsListItemContainer">
            <div className="bookingsListItem">
              <div className="bookingsListItemContent">
                {booking.roomId ? (
                  <Link to={`/rooms/${booking.roomId}`}>
                    Room ID: {booking.roomId}
                  </Link>
                ) : (
                  <a>General booking</a>
                )}
                <div className="bookingsListItemDetails">
                  <div className="bookingsListItemRoomInfo">
                    <p>Location: {booking.location}</p>
                    <p>Category: {booking.category}</p>
                    <p>
                      From {booking.startDate} to {booking.endDate}
                    </p>
                  </div>
                  <div className="bookingsListItemCustomerInfo">
                    <p>Name: {booking.name}</p>
                    <p>Email: {booking.email}</p>
                    <p>Phone: {booking.phoneNumber}</p>
                  </div>
                </div>
                {booking.comments && (
                  <p>Comment: &quot;{booking.comments}&quot;</p>
                )}
                <div className="bookingStatus">
                  <p>Status:</p>
                  <p
                    id="statusState"
                    style={{
                      color: `${booking.status === "pending" ? "red" : "green"}`,
                    }}
                  >
                    {booking.status.toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="managementActions">
                {booking.status === "pending" && !confirmAttempt && (
                  <button
                    onClick={() => toggleConfirm(booking)}
                    style={{ backgroundColor: "#0D8947" }}
                  >
                    Confirm
                  </button>
                )}
                <button onClick={() => navigate(`${booking.id}`)}>
                  Update
                </button>
                <button
                  onClick={() => deleteBooking(booking.id)}
                  style={{ backgroundColor: "red" }}
                >
                  Delete
                </button>
              </div>
            </div>
            {confirmAttempt === booking.id && (
              <>
                <hr />
                <h2
                  style={{
                    margin: "1rem",
                    marginBottom: 0,
                    fontSize: "1.2rem",
                  }}
                >
                  Confirm booking
                </h2>
                <div className="confirmBooking">
                  <div>
                    <p>
                      Select available room with location {booking.location} and
                      category {booking.category}
                    </p>
                    <div className="confirmActions">
                      <select
                        onChange={(e) => setConfirmedRoom(e.target.value)}
                        value={confirmedRoom}
                      >
                        {availableRooms.map((room) => (
                          <option key={room.id}>{room.id}</option>
                        ))}
                      </select>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          style={{ backgroundColor: "#0D8947" }}
                          onClick={() => confirmBooking(booking)}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setConfirmAttempt(null)}
                          style={{ backgroundColor: "red" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        </div>
      ))}
    </ul>
  );
}
