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
                        <li className="listItem">
                            <p>{room.location}</p>
                            <p>{room.price}€</p>
                            <p>{room.category}</p>
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
