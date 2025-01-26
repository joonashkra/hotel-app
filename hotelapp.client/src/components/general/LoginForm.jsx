import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ handleLogin, toggleSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await handleLogin({ username, password });
      navigate("/rooms");
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  };

  return (
    <form className="authForm" onSubmit={login}>
      <div className="authInput">
        <label>Username</label>
        <input
          required
          type="text"
          value={username}
          name="username"
          onChange={({ target }) => setUsername(target.value)}
          data-testid="username"
          placeholder="Type your username..."
        />
      </div>
      <div className="authInput">
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          name="password"
          onChange={({ target }) => setPassword(target.value)}
          data-testid="password"
          placeholder="Type your password..."
        />
      </div>
      <button type="submit">Login</button>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <a onClick={toggleSignup}>Create an account here!</a>
    </form>
  );
}
