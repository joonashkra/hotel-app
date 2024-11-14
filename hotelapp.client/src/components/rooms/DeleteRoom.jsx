
import roomService from "../../services/rooms";

export default function DeleteRoom({ id }) {
    const deleteRoom = () => {
        roomService.remove(id)
    }

  return (
    <button onClick={deleteRoom}>Delete</button>
  )
}
