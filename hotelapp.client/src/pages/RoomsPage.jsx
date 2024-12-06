
import { useEffect, useState } from 'react';
import { RoomsList } from '../components/rooms/RoomsList';
import roomService from '../services/rooms'
import BookRoomForm from '../components/bookings/BookRoomForm';
import FilterRooms from '../components/rooms/FilterRooms';
import { AddRoom } from '../components/rooms/AddRoom';
import { useOutletContext } from 'react-router-dom';

export default function RoomsPage() {

    const [rooms, setRooms] = useState([])
    const [filteredRooms, setFilteredRooms] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(true)
    const { user } = useOutletContext()

    useEffect(() => {
        setLoading(true)
        const getRooms = async () => {
            try {
                const rooms = await roomService.getAll()
                setRooms(rooms || [])
                setFilteredRooms(rooms || [])
            } catch (error) {
                setErrorMsg(error.response.data)
            } finally {
                setLoading(false)
            }
        }
        getRooms()
    }, [])
    
    useEffect(() => {
        setFilteredRooms(rooms)
    }, [rooms])

    if(loading) return <div className='loading'>Loading...</div>
    if(errorMsg) return <div>{errorMsg}</div>

    return (
        <div className='roomsPage'>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <div className='roomsPageContent'>
                <div>
                    <h2>Rooms</h2>
                    <p>Click on a room to see details and {user?.role === 'Admin' ? 'update or delete it' : 'make a booking'}.</p>
                    <FilterRooms rooms={rooms} setFilteredRooms={setFilteredRooms} />
                    <RoomsList rooms={filteredRooms} setRooms={setRooms} user={user} />
                </div>
                {user?.role === 'Admin' &&
                    <div>
                        <h2>Add Room</h2>
                        <p>Add new room available for customers and staff.</p>
                        <AddRoom rooms={rooms} setRooms={setRooms} setErrorMsg={setErrorMsg} />
                    </div>
                }
                {!user?.role && 
                    <div>
                        <h2>Book a room</h2>
                        <p>Make a general booking for any room in location and category of your choice.</p>
                        <BookRoomForm rooms={rooms} />
                    </div>
                }
            </div>
        </div>
    );
}