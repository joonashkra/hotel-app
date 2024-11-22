import { useState } from "react"
import bookingService from '../../services/bookings'

export default function BookRoomForm({ roomId }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [comments, setComments] = useState('')

  const bookRoom = async (e) => {
    e.preventDefault()

    const newBooking = { roomId, name, email, phoneNumber, startDate, endDate, comments }
    await bookingService.create(newBooking)

    window.alert("Booked room succesfully!")
  }

  return (
    <form className="bookRoomForm" onSubmit={bookRoom}>
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
      <button type="submit">Book room</button>
    </form>
  )
}