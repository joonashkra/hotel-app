import { useParams } from "react-router-dom";
import UpdateRoomForm from "../components/rooms/UpdateRoomForm";
import roomService from "../services/rooms";
import { useEffect, useState } from "react";

export default function UpdateRoomPage() {
  const { id } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [room, setRoom] = useState({});

  useEffect(() => {
    setLoading(true);
    const getRoom = async () => {
      try {
        const fetchedRoom = await roomService.getById(id);
        setRoom(fetchedRoom || {});
      } catch (error) {
        setErrorMsg(error.response.data);
      } finally {
        setLoading(false);
      }
    };
    getRoom();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (errorMsg) return <div>{errorMsg}</div>;

  return (
    <div className="updateRoomPage">
      <h1>Update room</h1>
      <UpdateRoomForm id={id} room={room} />
    </div>
  );
}
