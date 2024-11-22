import { useEffect, useState } from "react"
import bookingService from '../../services/bookings'

export default function BookingList() {

    const [bookings, setBookings] = useState([{}])
    
    useEffect(() => {
        bookingService.getAll().then(data => setBookings(data))
    }, [])

    console.log(bookings)

    if (!Array.isArray(bookings)) return <div className="loading">Loading...</div>;

    if(bookings.length < 1) return <p>No bookings yet.</p>
    
    return (
        <ul className="bookingList">
            {bookings.map(booking => (
                <li className="bookingItem" key={booking.id}>
                    <div className="bookingBasicInfo">
                        <p>Room ID: {booking.roomId}</p>
                        <p>From {booking.startDate} to {booking.endDate}</p>
                    </div>
                    <div className="bookingExtras">
                        <hr/>
                        <p>Name: {booking.name}</p>
                        <p>Email: {booking.email}</p>
                        <p>Phone: {booking.phoneNumber}</p>
                        {booking.comments && <p>Comments: {booking.comments}</p>}
                    </div>
                </li>
            ))}
        </ul>
    )
}