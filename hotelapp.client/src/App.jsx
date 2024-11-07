import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/rooms`);
                console.log(response.data);
                setRooms(response.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };
        getRooms();
    }, []);

    return (
        <div>
            {rooms.map((room, index) => (
                <>
                    <p key={index}>Location {room.location}</p>
                    <p key={index}>Price {room.price}</p>
                    <hr />
                </>
            ))}
        </div>
    );
}

export default App;