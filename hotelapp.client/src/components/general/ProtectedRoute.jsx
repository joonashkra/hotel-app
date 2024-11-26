import { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

export default function ProtectedRoute({ children }) {

    const { user } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(user === null) {
            navigate('/login', { replace: true })
        }
    }, [user, navigate])

  return user !== null ? children : null
}