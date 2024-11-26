import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"
import userService from '../../services/users'
import roomService from '../../services/rooms'
import bookingService from '../../services/bookings'

export default function NavBarWrapper() {
  const [user, setUser] = useState(null)

  useEffect(() => {
      const loggedInUser = window.localStorage.getItem('loggedInUser')
      if(loggedInUser) {
        const user = JSON.parse(loggedInUser)
        roomService.setToken(user.token)
        bookingService.setToken(user.token)
        userService.setToken(user.token)
        setUser(user)
      }
  }, [])

  const handleLogin = async (credentials) => {
    const user = await userService.login(credentials)
    if (!user.token) throw new Error('Wrong username or password.')
    window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    roomService.setToken(user.token)
    bookingService.setToken(user.token)
    setUser(user)
  }

  return (
    <>
        <NavBar user={user} />
        <Outlet context={{ handleLogin, user }} />
    </>
  )
}