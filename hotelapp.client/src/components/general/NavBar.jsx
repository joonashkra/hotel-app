import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar({ user }) {

    const navigate = useNavigate()

    const handleLogout = () => {
        window.localStorage.removeItem('loggedInUser')
        navigate('/login')
        window.location.reload()
    }

    const authActions = <div style={{ display: "flex", gap: "3rem" }}>
                            <NavLink to="/management">Management</NavLink>
                            <a onClick={handleLogout} style={{ cursor: "pointer" }}>Log Out</a>
                        </div>

    return (
        <div className="navBar">
            <h1>HotelApp</h1>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    {!user ? <NavLink to="/login">Login</NavLink> : authActions}
                </ul>
            </nav>
        </div>
    );
}
