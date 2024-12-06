import { useNavigate } from "react-router-dom";

export const RoomsList = ({ rooms }) => {
    const navigate = useNavigate()

    if(rooms && rooms.length < 1) return <p>No rooms found.</p>

    return (
        <ul className="roomsList" data-testid='roomsList'>
            {rooms.map((room) => (
                <div key={room.id} onClick={() => navigate(`/rooms/${room.id}`)} className="roomsListItem">
                    <li>
                        <div className="roomsListItemContent">
                            <p id="roomId">Room ID: {room.id}</p>
                            <div className="roomsListItemDetails">
                                <div>
                                    <p>Location: {room.location}</p>
                                    <p>Price / Night: {room.price}€</p>
                                </div>
                                <p>Category: {room.category}</p>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    );
}
