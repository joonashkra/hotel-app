import { useState, useEffect } from 'react'
import bookingService from '../../services/bookings'
import { useNavigate } from 'react-router-dom'

export default function BookingList({ bookings, setBookings, rooms }) {

    const [confirmAttempt, setConfirmAttempt] = useState(null)
    const [availableRooms, setAvailableRooms] = useState([])
    const [confirmedRoom, setConfirmedRoom] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (availableRooms.length > 0) setConfirmedRoom(availableRooms[0].id)
    }, [availableRooms])

    if (!Array.isArray(bookings)) return <div className="loading">Loading...</div>

    if(bookings.length < 1) return <p>No bookings yet.</p>

    const deleteBooking = (id) => {
        bookingService.remove(id).then(() => {
            setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id))
        })
    }

    const confirmBooking = async (booking) => {
        const updatedBooking = {
            ...booking,
            status: 'confirmed',
            roomId: confirmedRoom
        }

        await bookingService.update(booking.id, updatedBooking)

        const updatedBookings = bookings.map(b => b.id === booking.id ? updatedBooking : b)

        setBookings(updatedBookings)

        window.alert("Booking confirmed succesfully!")
        setConfirmAttempt(null)
    }

    const toggleConfirm = (booking) => {
        setConfirmAttempt(booking.id)
        setAvailableRooms(rooms.filter(room => (room.location === booking.location) && (room.category === booking.category))) 
    }

    return (
        <ul className="bookingList">
            {bookings.map((booking, index) => (
                <div key={booking.id} style={{ display: "flex" }}>
                    <li className="bookingItem" key={index}>
                        <div className="bookingItemContent">
                            <div className="bookingBasicInfo">
                                <p style={{ fontWeight: "bold" }}>{booking.roomId ? `Room ID: ${booking.roomId}` : 'General booking'}</p>
                                <p>Location: {booking.location}</p>
                                <p>Category: {booking.category}</p>
                                <p>From {booking.startDate} to {booking.endDate}</p>
                                <hr/>
                                <p>Name: {booking.name}</p>
                                <p>Email: {booking.email}</p>
                                <p>Phone: {booking.phoneNumber}</p>
                                {booking.comments && <p>Comments: {booking.comments}</p>}
                                <p style={{ color: `${booking.status === 'pending' ? 'red' : 'green'}` }}>Status: {booking.status.toUpperCase()}</p>
                            </div>
                        </div>
                    </li>
                    <div className="managementActions">
                            {booking.status === 'pending' && <button onClick={() => toggleConfirm(booking)} style={{ backgroundColor: "green" }}>Confirm</button>}
                            <button onClick={() => navigate(`bookings/${booking.id}`)} style={{ backgroundColor: "gray" }}>Update</button>
                            <button onClick={() => deleteBooking(booking.id)} style={{ backgroundColor: "red" }}>Delete</button>
                    </div>
                    {confirmAttempt === booking.id && 
                        <div>
                            <p>Select a specific room for this booking to confirm.</p>
                            <p>Room IDs with location {booking.location} and category {booking.category}:</p>
                            <select onChange={(e) => setConfirmedRoom(e.target.value)} value={confirmedRoom}>
                                {availableRooms.map(room => (
                                    <option key={room.id}>{room.id}</option>
                                ))}
                            </select>
                            <button onClick={() => confirmBooking(booking)} style={{ backgroundColor: "green" }}>Confirm</button>
                        </div>
                    }
                </div>                   
            ))}
        </ul>
    )
}
