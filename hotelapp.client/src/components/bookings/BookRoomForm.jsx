import { useEffect, useState, useMemo } from "react"
import bookingService from '../../services/bookings'

export default function BookRoomForm({ room, rooms }) {
  
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
      await bookingService.create(newBooking)
      window.alert("Booked room succesfully!")
    } catch (error) {
      window.alert(error.response.data)
    }

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
      {!isRoomSpecific && 
        <>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Location</label>
              <select name="location" onChange={(e) => setLocation(e.target.value)} value={location}>
                {availableLocations.map((location, index) => (
                  <option key={index}>{location}</option>
                ))}
              </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>Category</label>
              <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}>
                {availableCategories.map((category, index) => (
                  <option key={index}>{category}</option>
                ))}
              </select>
          </div>
        </>
      }
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