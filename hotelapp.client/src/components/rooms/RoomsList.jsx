import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roomService from "../../services/rooms";

export const RoomsList = ({ rooms, setRooms }) => {
    const [isManagement, setIsManagement] = useState(false);
    
    useEffect(() => {
        if (window.location.href.includes('management')) {
            setIsManagement(true);
        }
    }, []);

    const deleteRoom = (id) => {
        roomService.remove(id).then(() => {
            setRooms(prevRooms => prevRooms.filter(room => room.id !== id));
        });
    };

    if (!Array.isArray(rooms)) return <div className="loading">Loading...</div>;

    return (
        <ul className="roomList" data-testid='roomList'>
            {rooms.map((room) => (
                <div key={room.id} style={{ display: "flex" }}>
                    <Link to={`rooms/${room.id}`}>
                        <li className="roomListItem">
                            <p>Location: {room.location}</p>
                            <p>Price: {room.price}€</p>
                            <p>{room.isAvailable ? "Available" : "Booked"}</p>
                        </li>
                    </Link>
                    {isManagement && (
                        <button onClick={() => deleteRoom(room.id)} style={{ backgroundColor: "red", border: "1px solid white", borderRadius: "0" }}>Delete</button>
                    )}
                </div>
            ))}
        </ul>
    );
}
