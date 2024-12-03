
import { useEffect, useState } from 'react';
import { RoomsList } from '../components/rooms/RoomsList';
import roomService from '../services/rooms'
import BookRoomForm from '../components/bookings/BookRoomForm';
import FilterRooms from '../components/rooms/FilterRooms';

export default function App() {

    const [rooms, setRooms] = useState([]);

    const [filteredRooms, setFilteredRooms] = useState([])

    useEffect(() => {
      roomService.getAll().then(rooms => {
        setRooms(rooms)
        setFilteredRooms(rooms)
    });
    }, []);

    return (
        <div className='homePage'>
            <h1>Home</h1>
            <div style={{ display: 'flex' }}>
                <div className='homePageContent'>
                    <h2>Rooms</h2>
                    <p>Click on a room to see details and make a booking for it.</p>
                    <FilterRooms rooms={rooms} setFilteredRooms={setFilteredRooms} />
                    <RoomsList rooms={filteredRooms} setRooms={rooms} />
                </div>
                <div>
                    <h2>Book a room</h2>
                    <p>Make a general booking for any room in location and category of your choice.</p>
                    <BookRoomForm room={null} rooms={rooms} />
                </div>
            </div>
        </div>
    );
}