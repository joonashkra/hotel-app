
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
            <h1>Home</h1>
            <div className='homePageContent'>
                <h2>Rooms</h2>
                <RoomsList rooms={rooms} setRooms={rooms} />
            </div>
        </div>
    );
}