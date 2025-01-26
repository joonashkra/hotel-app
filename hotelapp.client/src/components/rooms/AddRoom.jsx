import { useState } from "react";
import roomService from "../../services/rooms";

export const AddRoom = ({ rooms, setRooms, setErrorMsg }) => {
  const [location, setLocation] = useState("");
  const [newFeature, setNewFeature] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const addRoom = async (event) => {
    event.preventDefault();
    const newRoom = { location, category, features, price, isAvailable: true };
    try {
      const createdRoom = await roomService.create(newRoom);
      setLocation("");
      setFeatures([]);
      setPrice(0);
      setCategory("");
      setRooms(rooms.concat(createdRoom));
      window.alert("Room created succesfully.");
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  };

  const addFeature = (newFeature) => {
    if (newFeature) {
      setFeatures(features.concat(newFeature));
      setNewFeature("");
    }
  };

  const clearForm = () => {
    setLocation("");
    setCategory("");
    setFeatures([]);
    setPrice(0);
  };

  return (
    <form onSubmit={addRoom} className="createRoomForm">
      <div
        className="createRoomSection1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div className="roomInput">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Type location..."
            onChange={({ target }) => setLocation(target.value)}
            required
          />
        </div>
        <div className="roomInput">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={category}
            placeholder="Type category..."
            onChange={({ target }) => setCategory(target.value)}
            required
          />
        </div>
      </div>
      <div className="roomInput">
        <label>Features</label>
        <div className="featureInputField">
          <input
            type="text"
            name="feature"
            value={newFeature}
            placeholder="Type new feature..."
            onChange={({ target }) => setNewFeature(target.value)}
            required
          />
          <button
            id="addFeatureBtn"
            type="button"
            data-testid="addFeatureBtn"
            onClick={() => addFeature(newFeature)}
          >
            +
          </button>
        </div>
        {features.length > 0 && (
          <ul className="addRoomFeatureList">
            {features.map((feature, index) => (
              <li key={index}>
                <p>{feature}</p>
                <button
                  id="deleteBtn"
                  type="button"
                  onClick={() =>
                    setFeatures(features.filter((_, i) => i !== index))
                  }
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="roomInput">
        <label>Price / Night (€)</label>
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Type price..."
          onChange={({ target }) => setPrice(target.value)}
          required
        />
      </div>
      <div className="addRoomActions">
        <button id="addRoomBtn" type="submit" data-testid="addRoomBtn">
          Add Room
        </button>
        <button id="clearFormBtn" type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
    </form>
  );
};
