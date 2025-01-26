import { useEffect, useState } from "react";
import BookingList from "../components/bookings/BookingList";
import bookingService from "../services/bookings";
import roomService from "../services/rooms";
import BookRoomForm from "../components/bookings/BookRoomForm";

export default function BookingsPage() {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [isBookingsView, setIsBookingsView] = useState(true);

  useEffect(() => {
    setLoadingData(true);
    const getRooms = async () => {
      try {
        const rooms = await roomService.getAll();
        setRooms(rooms || []);
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        setLoadingData(false);
      }
    };
    getRooms();
  }, []);

  useEffect(() => {
    setLoadingData(true);
    const getBookings = async () => {
      try {
        const bookings = await bookingService.getAll();
        setBookings(bookings || []);
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        setLoadingData(false);
      }
    };
    getBookings();
  }, []);

  const switchView = () => {
    setIsBookingsView(!isBookingsView);
  };

  if (loadingData) return <div className="loading">Loading...</div>;
  if (errorMsg) return <div style={{ color: "red" }}>{errorMsg}</div>;

  return (
    <div className="bookingsPage">
      <nav id="RoomsNavBar">
        <a
          className={`roomsNavLink ${isBookingsView ? "active" : ""}`}
          onClick={switchView}
        >
          Bookings
        </a>
        <a
          className={`roomsNavLink ${!isBookingsView ? "active" : ""}`}
          onClick={switchView}
        >
          Book Room
        </a>
      </nav>
      <div className={`${isBookingsView ? "bookingsListContainer" : "hidden"}`}>
        <h2>Bookings</h2>
        <p>Update, confirm and delete bookings</p>
        <BookingList
          bookings={bookings}
          setBookings={setBookings}
          rooms={rooms}
        />
      </div>
      <div className={`${!isBookingsView ? "bookRoomSection" : "hidden"}`}>
        <h2>Book a room</h2>
        <p>Make a general booking for a room in any location and category</p>
        <BookRoomForm
          rooms={rooms}
          bookings={bookings}
          setBookings={setBookings}
        />
      </div>
    </div>
  );
}
