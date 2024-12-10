import { useState } from "react";
import { useNavigate } from "react-router-dom"
import roomService from "../../services/rooms";

export default function UpdateRoomForm({ id, room }) {
    const [location, setLocation] = useState(room.location)
    const [newFeature, setNewFeature] = useState('')
    const [features, setFeatures] = useState(room.features)
    const [price, setPrice] = useState(room.price)
    const [category, setCategory] = useState(room.category)

    const navigate = useNavigate()

    const updateRoom = async (event) => {
        event.preventDefault()
        const room = { location, category, features, price }
        try {
          await roomService.update(id, room)
          window.alert("Room updated succesfully!")
          navigate(`/rooms/${id}`)
        } catch (error) {
          window.alert(error.response.data)
        }
    }

    const addFeature = (newFeature) => {
        if(newFeature) {
          setFeatures(features.concat(newFeature))
          setNewFeature('')
        }
    }

    const cancelUpdate = () => {
      if(window.confirm('Cancel update? All changes will be lost.')) {
        navigate(`/rooms/${id}`)
      }
    }

  return (
    <form onSubmit={updateRoom} className='updateRoomForm'>
        <h2>Room ID: {room.id}</h2>
        <div className="updateRoomSection1" style={{ display: 'flex', justifyContent: 'space-between', gap:'1rem'}}>
          <div className="roomInput">
            <label>Location: </label>
            <input required type='text' name='location' value={location} placeholder='Edit location...' onChange={({ target }) => setLocation(target.value)}/>
          </div>
          <div className="roomInput">
            <label>Category: </label>
            <input required type='text' name='category' value={category} placeholder='Edit category...' onChange={({ target }) => setCategory(target.value)}/>
          </div>
        </div>
        <div className='roomInput'>
          <label>Features: </label>
          <div className='featureInputField'>
            <input type='text' name='feature' value={newFeature} placeholder='Type new feature...' onChange={({ target }) => setNewFeature(target.value)}/>
            <button id='addFeatureBtn' type="button" data-testid='addFeatureBtn' onClick={() => addFeature(newFeature)}>+</button>
          </div>
          {features.length > 0 && (
            <ul className='addRoomFeatureList'>
              {features.map((feature, index) => (
                <li key={index}>
                  <p>{feature}</p>
                  <button id='deleteBtn' type='button' onClick={() => setFeatures(features.filter((_, i) => i !== index))}>X</button>
                </li>
              ))}
          </ul>
          )}
        </div>
        <div className="roomInput">
          <label>Price / night (€): </label>
          <input required type='text' name='price' value={price} placeholder='Edit price...' onChange={({ target }) => setPrice(target.value)}/>
        </div>
        <div className="updateActions">
          <button id='addRoomBtn' type='submit' data-testid='addRoomBtn'>Update Room</button>
          <button id='cancelUpdate' type='button' onClick={cancelUpdate}>Cancel</button>
        </div>
    </form>
  )
}
