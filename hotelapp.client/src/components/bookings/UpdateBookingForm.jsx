import { useEffect, useState } from "react"
import bookingService from '../../services/bookings'
import { useNavigate } from "react-router-dom"

export default function UpdateBookingForm({ id, booking }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [comments, setComments] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if(booking) {
      setName(booking.name || '')
      setEmail(booking.email || '')
      setPhoneNumber(booking.phoneNumber || '')
      setLocation(booking.location || '')
      setCategory(booking.category || '')
      setStartDate(booking.startDate || '')
      setEndDate(booking.endDate || '')
      setComments(booking.comments || '')
    }
  }, [booking])
  

  const updateBooking = async (event) => {
    event.preventDefault()
    const updatedBooking = {
        roomId: booking.roomId || null, 
        name, 
        email, 
        phoneNumber, 
        startDate, 
        endDate, 
        comments, 
        location, 
        category,
        status: booking.status || null
    }

    try {
        await bookingService.update(id, updatedBooking)
        window.alert("Booking updated succesfully!")
        navigate('/bookings')
    } catch (error) {
        window.alert(error.response.data)
    }
  }

  const cancelUpdate = () => {
    if(window.confirm('Cancel update? All changes will be lost.')) {
      navigate(`/bookings`)
    }
  }

  return (
    <form className="updateBookingForm" onSubmit={updateBooking}>
        <h2>Room ID: {booking.roomId}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap:'1rem'}}>
          <div className="bookingInput">
              <label>Name</label>
              <input required type="text" name="name" value={name} placeholder="Type your name..." onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="bookingInput">
              <label>Email Address</label>
              <input required type="text" name="email" value={email} placeholder="Type your email..." onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="bookingInput">
              <label>Phone number</label>
              <input required type="text" name="phone" value={phoneNumber} placeholder="Type your phone number..." onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'flex', gap:'1rem'}}>
          <div className="bookingInput">
              <label>Location</label>
              <input required type="text" name="location" value={location} placeholder="Type your phone number..." onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="bookingInput">
              <label>Category</label>
              <input required type="text" name="category" value={category} placeholder="Type your phone number..." onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>
        <div style={{ display: 'flex', gap:'1rem'}}>
          <div className="bookingInput">
              <label>Start Date</label>
              <input required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="bookingInput">
              <label>End Date</label>
              <input required type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
          </div>
        </div>
        <div className="bookingInput" id="comments">
          <label>Comments</label>
          <textarea name="comments" value={comments} placeholder="Type comments for booking..." onChange={(e) => setComments(e.target.value)} rows="2"/>
        </div>
        <div className="updateActions">
          <button type="submit">Update booking</button>
          <button onClick={cancelUpdate} id="cancelUpdate" type="button">Cancel</button>
        </div>

    </form>
  )
}
