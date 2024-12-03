import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import roomService from "../../services/rooms";

export const RoomsList = ({ rooms, setRooms }) => {
    const [isManagement, setIsManagement] = useState(false);
    const navigate = useNavigate();
    
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

    if(rooms.length < 1) return <p>No rooms yet.</p>

    return (
        <ul className="itemList" data-testid='roomList'>
            {rooms.map((room) => (
                <div key={room.id} style={{ display: "flex" }}>
                    <Link to={`/rooms/${room.id}`}>
                        <li className="roomListItem">
                            <p>Room ID: {room.id}</p>
                            <div className="roomListDetails">
                                <p>Location: {room.location}</p>
                                <p>Price / Night: {room.price}€</p>
                                <p>Category: {room.category}</p>
                            </div>
                        </li>
                    </Link>
                    {isManagement && (
                        <div className="managementActions">
                            <button onClick={() => navigate(`rooms/${room.id}`)} style={{ backgroundColor: "gray" }}>Update</button>
                            <button onClick={() => deleteRoom(room.id)} style={{ backgroundColor: "red" }}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </ul>
    );
}
