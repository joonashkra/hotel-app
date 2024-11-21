import { useEffect, useState } from "react";
import { AddRoom } from "../components/rooms/AddRoom";
import { RoomsList } from "../components/rooms/RoomsList";
import roomService from "../services/rooms";


export default function ManagementPage() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    roomService.getAll().then(rooms => setRooms(rooms));
  }, []);

  return (
    <div className='manageRoomsPage'>
      <h1>Management</h1>
      <div className="manageRoomsContent">
        <div>
          <h2>Update & Delete existing rooms</h2>
          <RoomsList rooms={rooms} setRooms={setRooms} />
        </div>
        <div>
          <h2>Add New Room</h2>
          <AddRoom rooms={rooms} setRooms={setRooms} />
        </div>
      </div>
    </div>
  )
}