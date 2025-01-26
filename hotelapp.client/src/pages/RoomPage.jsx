import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import roomService from "../services/rooms";
import BookRoomForm from "../components/bookings/BookRoomForm";
import Room from "../components/rooms/Room";

export default function RoomPage() {
  const [room, setRoom] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useOutletContext();
  const [isRoomView, setIsRoomView] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getRoom = async () => {
      setLoading(true);
      try {
        const room = await roomService.getById(id);
        setRoom(room);
      } catch (error) {
        setErrorMsg("Room not found.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRoom();
  }, [id]);

  const deleteRoom = async () => {
    try {
      await roomService.remove(id);
      window.alert("Room deleted succesfully.");
      navigate("/rooms");
    } catch (error) {
      console.log(error);
      window.alert("Error occured when deleting room.");
    }
  };

  const switchView = () => {
    setIsRoomView(!isRoomView);
  };

  if (loading) return <div>Loading...</div>;
  if (errorMsg) return <p style={{ color: "red" }}>{errorMsg}</p>;

  return (
    <div className="roomPage">
      <div className={`${isRoomView ? "bookRoomSection" : "hidden"}`}>
        <Room room={room} />
        {user?.role === "Admin" && (
          <div className="roomManagementActions">
            <button onClick={() => navigate(`/rooms/update/${id}`)}>
              Update
            </button>
            <button style={{ backgroundColor: "red" }} onClick={deleteRoom}>
              Delete
            </button>
          </div>
        )}
      </div>
      <div className={`${!isRoomView ? "bookRoomSection" : "hidden"}`}>
        <h2>Book room</h2>
        <BookRoomForm room={room} rooms={[]} />
      </div>
      <button
        onClick={switchView}
        id="toggleBookBtn"
        style={!isRoomView ? { backgroundColor: "red" } : {}}
      >
        {isRoomView ? "Book Room" : "Cancel"}
      </button>
    </div>
  );
}
