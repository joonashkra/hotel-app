
import { useEffect, useState } from 'react';
import { RoomsList } from '../components/rooms/RoomsList';
import roomService from '../services/rooms';


export default function App() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      roomService.getAll().then(rooms => setRooms(rooms));
    }, []);

    return (
        <div className='homePage'>
            <h1>Rooms</h1>
            <RoomsList rooms={rooms} setRooms={rooms} />
        </div>
    );
}