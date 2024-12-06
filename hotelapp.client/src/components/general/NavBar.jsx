import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function NavBar({ user }) {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(!!user)
    }, [user])

    const handleLogout = () => {
        window.localStorage.removeItem("loggedInUser")
        navigate("/login")
        window.location.reload()
    }

    const navItems = {
        Admin: [
            { to: "/rooms", label: "Rooms" },
            { to: "/bookings", label: "Bookings" },
            { to: '/staff/new', label: "Add Staff" }
        ],
        Staff: [
            { to: "/rooms", label: "Rooms" },
            { to: "/bookings", label: "Bookings" }
        ],
        Customer: [
            { to: "/", label: "Home" }
        ]
    }

    const userRole = user?.role || "Customer"
    const roleBasedLinks = navItems[userRole] || navItems.Customer

    return (
        <div className="navBar">
            <h1>HotelApp</h1>
            <nav>
                <ul>
                    {!loggedIn ? (
                        <>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    ) : (
                        <>
                            {roleBasedLinks.map(({ to, label }) => (
                                <NavLink key={to} to={to} style={({ isActive }) => ({ borderBottom: isActive ? '0.15rem solid #14213D' : 'none' })}>
                                    {label}
                                </NavLink>
                            ))}
                            <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                                Log Out
                            </a>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    )
}
