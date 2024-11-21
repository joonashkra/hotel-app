
import { useState } from 'react'
import roomService from "../../services/rooms";

export const AddRoom = ({ rooms, setRooms }) => {

    const [location, setLocation] = useState('')
    const [newFeature, setNewFeature] = useState('')
    const [features, setFeatures] = useState([])
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const addRoom = async (event) => {
        event.preventDefault()
        const newRoom = { location, category, features, price, isAvailable: true }
        const createdRoom = await roomService.create(newRoom)
        setLocation('')
        setFeatures([])
        setPrice(0)
        setCategory('')
        setRooms(rooms.concat(createdRoom))
    }

    const addFeature = (newFeature) => {
        if(newFeature) {
          setFeatures(features.concat(newFeature))
          setNewFeature('')
        }
    }

  return (
    <form onSubmit={addRoom} className='createRoomForm'>
        <div>
          <label>Set location: </label>
          <input type='text' name='location' value={location} placeholder='Type location...' onChange={({ target }) => setLocation(target.value)}/>
        </div>
        <div className='featuresInput'>
          <label>Add room features: </label>
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
          <label>Give room category: </label>
          <input type='text' name='category' value={category} placeholder='Type category...' onChange={({ target }) => setCategory(target.value)}/>
        </div>
        <div>
          <label>Set price / night (€): </label>
          <input type='text' name='price' value={price} placeholder='Type price...' onChange={({ target }) => setPrice(target.value)}/>
        </div>
        <button id='addRoomBtn' type='submit' data-testid='addRoomBtn'>Add Room</button>
      </form>
  )
}
