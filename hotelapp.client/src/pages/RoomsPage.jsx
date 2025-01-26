import { useEffect, useState } from "react";
import { RoomsList } from "../components/rooms/RoomsList";
import roomService from "../services/rooms";
import BookRoomForm from "../components/bookings/BookRoomForm";
import FilterRooms from "../components/rooms/FilterRooms";
import { AddRoom } from "../components/rooms/AddRoom";
import { useOutletContext } from "react-router-dom";

export default function RoomsPage() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useOutletContext();
  const [isRoomsView, setIsRoomsView] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getRooms = async () => {
      try {
        const rooms = await roomService.getAll();
        setRooms(rooms || []);
        setFilteredRooms(rooms || []);
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, []);

  useEffect(() => {
    setFilteredRooms(rooms);
  }, [rooms]);

  const switchView = () => {
    setIsRoomsView(!isRoomsView);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (errorMsg) return <div>{errorMsg}</div>;

  return (
    <div className="roomsPage">
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {user?.role !== "Staff" && (
        <nav id="RoomsNavBar">
          <a
            className={`roomsNavLink ${isRoomsView ? "active" : ""}`}
            onClick={switchView}
          >
            Rooms
          </a>
          <a
            className={`roomsNavLink ${!isRoomsView ? "active" : ""}`}
            onClick={switchView}
          >
            {user?.role ? "Add Room" : "Book Room"}
          </a>
        </nav>
      )}
      <div className="roomsPageContent">
        <div className={`${isRoomsView ? "roomsPageListContainer" : "hidden"}`}>
          <h2>Rooms</h2>
          <p>
            Click room{" "}
            {user?.role === "Admin"
              ? "to update or delete it"
              : "for details and make a booking"}
            .
          </p>
          <FilterRooms rooms={rooms} setFilteredRooms={setFilteredRooms} />
          <RoomsList rooms={filteredRooms} setRooms={setRooms} user={user} />
        </div>
        <div
          className={`${!isRoomsView ? "roomsPageFormContainer" : "hidden"}`}
        >
          {user?.role === "Admin" && (
            <>
              <h2>Add Room</h2>
              <p>Add new room available for customers.</p>
              <AddRoom
                rooms={rooms}
                setRooms={setRooms}
                setErrorMsg={setErrorMsg}
              />
            </>
          )}
          {!user?.role && (
            <>
              <h2>Book a room</h2>
              <p>
                Make a general booking for any room in location and category of
                your choice.
              </p>
              <BookRoomForm rooms={rooms} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
