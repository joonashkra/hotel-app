import { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

export default function ProtectedRoute({ children, roles = [] }) {
    const { user, loadingAuth } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!loadingAuth) {
            if (!user || !roles.includes(user.role)) {
                navigate("/", { replace: true })
            }
        }
    }, [user, navigate, loadingAuth, roles])

    if (loadingAuth) return <div>Loading...</div>

    return roles.includes(user?.role) ? children : null
}
