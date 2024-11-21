import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import roomService from "../../services/rooms";


export default function UpdateRoom() {
    const [room, setRoom] = useState({})
    const [location, setLocation] = useState('')
    const [newFeature, setNewFeature] = useState('')
    const [features, setFeatures] = useState([])
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        const getRoom = async () => {
            const fetchedRoom = await roomService.getById(id);
            setRoom(fetchedRoom);
            setLocation(fetchedRoom.location || '');
            setFeatures(fetchedRoom.features || []);
            setPrice(fetchedRoom.price || '');
            setCategory(fetchedRoom.category || '');
        }
        getRoom();
    }, [id])

    const updateRoom = async (event) => {
        event.preventDefault()
        const room = { location, category, features, price, isAvailable: true }
        await roomService.update(id, room)
        setLocation('')
        setFeatures([])
        setPrice(0)
        setCategory('')
        navigate(`/rooms/${id}`)
        window.alert("Room updated succesfully!")
    }

    const addFeature = (newFeature) => {
        if(newFeature) {
          setFeatures(features.concat(newFeature))
          setNewFeature('')
        }
    }
  
      if(!room || !room.features) return <div className="loading">Loading...</div>

  return (
    <div className="room">
        <h1>Update room {id}</h1>
      <form onSubmit={updateRoom} className='createRoomForm'>
        <div>
          <label>Location: </label>
          <input type='text' name='location' value={location} placeholder='Edit location...' onChange={({ target }) => setLocation(target.value)}/>
        </div>
        <div className='featuresInput'>
          <label>Features: </label>
          <input type='text' name='feature' value={newFeature} placeholder='Type new feature...' onChange={({ target }) => setNewFeature(target.value)}/>
          <button id='addFeatureBtn' type="button" data-testid='addFeatureBtn' onClick={() => addFeature(newFeature)}>+</button>
          {features.length > 0 && (
            <ul className='roomFeatureList'>
              {features.map((feature, index) => (
                <li key={index}>
                  <p>{feature}</p>
                  <button id='deleteBtn' type='button' onClick={() => setFeatures(features.filter((_, i) => i !== index))}>X</button>
                </li>
              ))}
          </ul>
          )}
        </div>
        <div>
          <label>Category: </label>
          <input type='text' name='category' value={category} placeholder='Edit category...' onChange={({ target }) => setCategory(target.value)}/>
        </div>
        <div>
          <label>Price / night (€): </label>
          <input type='text' name='price' value={price} placeholder='Edit price...' onChange={({ target }) => setPrice(target.value)}/>
        </div>
        <button id='addRoomBtn' type='submit' data-testid='addRoomBtn'>Update Room</button>
      </form>
    </div>
  )
}
