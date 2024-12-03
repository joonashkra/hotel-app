import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookingService from '../../services/bookings'

export default function UpdateBooking() {

    const { id } = useParams();

    const navigate = useNavigate()

    const [booking, setBooking] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [comments, setComments] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

  useEffect(() => {
        const getBooking = async () => {
            const fetchedBooking = await bookingService.getById(id)
            setBooking(fetchedBooking)
            setName(fetchedBooking.name || '')
            setEmail(fetchedBooking.email || [])
            setPhoneNumber(fetchedBooking.phoneNumber || '')
            setLocation(fetchedBooking.location || '')
            setCategory(fetchedBooking.category || '')
            setStartDate(fetchedBooking.startDate || '')
            setEndDate(fetchedBooking.endDate || '')
            setComments(fetchedBooking.comments || '')
        }
        getBooking();
    }, [id])


    const updateBooking = async (event) => {
        event.preventDefault()
        const updatedBooking = {
            roomId: booking.roomId !== null ? booking.roomId : null, 
            name, 
            email, 
            phoneNumber, 
            startDate, 
            endDate, 
            comments, 
            location, 
            category,
            status: booking.status !== null ? booking.status : null
        }
        console.log(updatedBooking)
        await bookingService.update(id, updatedBooking)
        navigate('/management')
        window.alert("Booking updated succesfully!")
    }

  return (
    <div>
        <form className="bookRoomForm" onSubmit={updateBooking}>
            <div>
                <label>Name</label>
                <input required type="text" name="name" value={name} placeholder="Type your name..." onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email Address</label>
                <input required type="text" name="email" value={email} placeholder="Type your email..." onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone number</label>
                <input required type="text" name="phone" value={phoneNumber} placeholder="Type your phone number..." onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div>
                <label>Location</label>
                <input required type="text" name="location" value={location} placeholder="Type your phone number..." onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div>
                <label>Category</label>
                <input required type="text" name="category" value={category} placeholder="Type your phone number..." onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div>
                <label>Start Date</label>
                <input required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
                <label>End Date</label>
                <input required type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
            </div>
            <div>
                <label>Comments</label>
                <input type="text" name="comments" value={comments} placeholder="Type comments..." onChange={(e) => setComments(e.target.value)} />
            </div>
            <button type="submit">Update booking</button>
        </form>
    </div>
  )
}
