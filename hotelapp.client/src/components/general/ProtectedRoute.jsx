import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { user, isLoading } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && (!user || user.role === null)) {
            navigate("/", { replace: true })
        }
    }, [user, navigate, isLoading])

    if (isLoading) return <div>Loading...</div>

    return user?.role ? children : null
}