import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const { handleLogin } = useOutletContext()

  
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      await handleLogin({ username, password })
      navigate('/management')
    } catch (error) {
      setErrorMsg(error.message)
    }
  }
  
  return (
    <div className='loginPage' >
        <form className='loginForm' onSubmit={login}>
            <div className='loginInput'>
                <label>Username</label>
                <input type='text' value={username} name='username' onChange={({ target }) => setUsername(target.value)} data-testid="username" placeholder='Type your username...'/>
            </div>
            <div className='loginInput'>
                <label>Password</label>
                <input type='password' value={password} name='password' onChange={({ target }) => setPassword(target.value)} data-testid="password" placeholder='Type your password...' />
            </div>
            <button type='submit'>Login</button>
            <p style={{ color: "red" }}>{errorMsg}</p>
        </form>
    </div>
  )
}
