import { useEffect, useState, useMemo } from "react"
import bookingService from '../../services/bookings'

export default function BookRoomForm({ room, rooms, bookings, setBookings }) {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [comments, setComments] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [roomId, setRoomId] = useState('')
  const [isRoomSpecific, setIsRoomSpecific] = useState(false)

   useEffect(() => {
    if (room) {
      setIsRoomSpecific(true);
      setLocation(room.location || "")
      setCategory(room.category || "")
      setRoomId(room.id || "")
    } else {
      setIsRoomSpecific(false)
      setLocation("")
      setCategory("")
      setRoomId("")
    }
  }, [room])

  const availableLocations = useMemo(() => {
    return [...new Set(rooms.map((room) => room.location))]
  }, [rooms])

  const availableCategories = useMemo(() => {
    return [...new Set(rooms.map((room) => room.category))]
  }, [rooms])

  useEffect(() => {
    if (availableLocations.length > 0) setLocation(availableLocations[0])
    if (availableCategories.length > 0) setCategory(availableCategories[0])
  }, [availableLocations, availableCategories])

  const bookRoom = async (e) => {
    e.preventDefault()

    const newBooking = {
      name,
      email,
      phoneNumber,
      startDate,
      endDate,
      comments,
      location,
      category,
      ...(isRoomSpecific && { roomId })
    }

    try {
      const booking = await bookingService.create(newBooking)
      window.alert(`Booked room succesfully! The status of your booking is ${booking.status.toUpperCase()}.`)
      setName('')
      setEmail('')
      setPhoneNumber('')
      setStartDate('')
      setEndDate('')
      setComments('')
      setLocation(availableLocations[0])
      setCategory(availableCategories[0])
      if(!isRoomSpecific) setBookings(bookings.concat(booking))
    } catch (error) {
      console.error(error)
      window.alert(error.response.data)
    }
  }

  return (
    <form className="bookRoomForm" onSubmit={bookRoom}>
      <div className="bookingCustomerInfo">
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
      <div className="bookingRoomInfo">
        {!isRoomSpecific && 
          <div className="categoryLocationInput">
            <div style={{ display: 'flex', flexDirection: 'column' }} className="bookingInput">
                <label>Location</label>
                <select name="location" onChange={(e) => setLocation(e.target.value)} value={location}>
                  {availableLocations.map((location, index) => (
                    <option key={index}>{location}</option>
                  ))}
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }} className="bookingInput">
                <label>Category</label>
                <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                  {availableCategories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
            </div>
          </div>
        }
        <div className="bookingInput">
          <label>Check-in</label>
          <input required type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="bookingInput">
          <label>Check-out</label>
          <input required type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
      </div>
      <div className="bookingInput" id="comments">
        <label>Comments</label>
        <textarea name="comments" value={comments} placeholder="Type comments for booking..." onChange={(e) => setComments(e.target.value)} rows="2"/>
      </div>
      <button type="submit">Book room</button>
    </form>
  )
}