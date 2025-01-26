import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import userService from "../../services/users";
import roomService from "../../services/rooms";
import bookingService from "../../services/bookings";

export default function Wrapper() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    setLoadingAuth(true);
    const loggedInUser = window.localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      roomService.setToken(user.token);
      bookingService.setToken(user.token);
      userService.setToken(user.token);
      setUser(user);
    }
    setLoadingAuth(false);
  }, []);

  const handleLogin = async (credentials) => {
    let user;
    try {
      user = await userService.login(credentials);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        user = await userService.loginStaff(credentials);
      } else {
        throw error;
      }
    }
    if (!user.token) throw new Error("Invalid credentials.");
    window.localStorage.setItem("loggedInUser", JSON.stringify(user));
    roomService.setToken(user.token);
    bookingService.setToken(user.token);
    setUser(user);
  };

  return (
    <>
      <NavBar user={user} />
      {user && (
        <p className="authText">
          {user?.role ? `Logged in as ${user?.role}` : "Logged in as Customer"}
        </p>
      )}
      <Outlet context={{ handleLogin, user, loadingAuth }} />
    </>
  );
}
