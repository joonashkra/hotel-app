

export default function Room({ room }) {
  return (
    <div className="roomDetails">
        <p>Location: {room.location}</p>
        <p>Category: {room.category}</p>
        <div>
            <p>Features:</p>
            <ul>
            {room.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
            </ul>
        </div>
        <p>Price: {room.price}€ / Night</p>
    </div>
  )
}
