import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navBar">
            <h1>HotelApp</h1>
            <nav>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/management">Management</NavLink>
                </ul>
            </nav>
        </div>
    );
}
