import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"
import userService from '../../services/users'
import roomService from '../../services/rooms'
import bookingService from '../../services/bookings'

export default function NavBarWrapper() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setIsLoading(true)
      const loggedInUser = window.localStorage.getItem('loggedInUser')
      if(loggedInUser) {
        const user = JSON.parse(loggedInUser)
        roomService.setToken(user.token)
        bookingService.setToken(user.token)
        userService.setToken(user.token)
        setUser(user)
      }
      setIsLoading(false)
  }, [])

  const handleLogin = async (credentials) => {
    let user
    //To make login possible for both customers and staff with only one form in UI
    user = await userService.login(credentials)
    if (!user.token) 
      user = await userService.loginStaff(credentials)
    if (!user.token) 
      throw new Error('Wrong username or password.')
    window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    roomService.setToken(user.token)
    bookingService.setToken(user.token)
    setUser(user)
  }


  return (
    <>
        <NavBar user={user} />
        <Outlet context={{ handleLogin, user, isLoading }} />
    </>
  )
}