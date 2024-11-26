import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import roomService from "../../services/rooms";
import BookRoomForm from "../bookings/BookRoomForm";

export default function Room() {

    const [room, setRoom] = useState({})

    const { id } = useParams();

    useEffect(() => {
      roomService.getById(id).then(room => setRoom(room))
    }, [id])

    if(!room || !room.features) return <div className="loading">Loading...</div>

  return (
    <div className="roomPage">
      <div>
        <h1>Room {id}</h1>
        <h2>Details:</h2>
        <div className="roomDetails">
          <p>Location: {room.location}</p>
          <p>Features:</p>
          <ul>
            {room.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
          </ul>
          <p>Category: {room.category}</p>
          <p>Price: {room.price}€ / night</p>
        </div>
      </div>
      <div>
        <h2>Book</h2>
        <BookRoomForm roomId={id} />
      </div>
    </div>
  )
}