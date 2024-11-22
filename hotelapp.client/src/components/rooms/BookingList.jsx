import { useEffect, useState } from "react"
import bookingService from '../../services/bookings'

export default function BookingList() {

    const [bookings, setBookings] = useState('')
    
    useEffect(() => {
        bookingService.getAll().then(data => setBookings(data))
    }, [])

    if(!bookings) return <>Loading...</>
    
    return (
        <ul className="bookingList">
            {bookings.map(booking => (
                <li className="bookingItem" key={booking.id}>
                    <p>Room: {booking.roomId}</p>
                    <p>From {booking.startDate} to {booking.endDate}</p>
                    <div className="bookingExtras">
                        <p>Name: {booking.name}</p>
                        <p>Email: {booking.email}</p>
                        <p>Phone: {booking.phoneNumber}</p>
                        {booking.comments ?? <p>Comments: {booking.comments}</p>}
                    </div>
                </li>
            ))}
        </ul>
    )
}