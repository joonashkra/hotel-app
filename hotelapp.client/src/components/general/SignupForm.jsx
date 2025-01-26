import { useState, useEffect } from "react";
import userService from "../../services/users";

export default function SignupForm({ toggleSignup }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const [role, setRole] = useState("Staff");

  useEffect(() => {
    if (window.location.href.includes("staff")) {
      setIsStaff(true);
    } else setIsStaff(false);
  }, []);

  const signup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      if (isStaff) {
        await userService.createStaff({
          userName,
          email,
          phoneNumber,
          passwordHash,
          role,
        });
        window.alert(`New ${role.toLowerCase()} account created succesfully.`);
        setUserName("");
        setEmail("");
        setPasswordHash("");
        setPhoneNumber("");
      } else {
        await userService.create({
          userName,
          email,
          phoneNumber,
          passwordHash,
          role: "",
        });
        window.alert(
          "Your account was created succesfully! Log in to continue.",
        );
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Error with signup.");
    }
  };

  return (
    <form className="authForm" onSubmit={signup}>
      <div className="authInput">
        <label>Name</label>
        <input
          required
          type="text"
          value={userName}
          name="username"
          onChange={({ target }) => setUserName(target.value)}
          data-testid="username"
          placeholder="Type name..."
        />
      </div>
      <div className="authInput">
        <label>Email</label>
        <input
          required
          type="text"
          value={email}
          name="email"
          onChange={({ target }) => setEmail(target.value)}
          data-testid="email"
          placeholder="Type email..."
        />
      </div>
      <div className="authInput">
        <label>Phone number</label>
        <input
          required
          type="text"
          value={phoneNumber}
          name="phone"
          onChange={({ target }) => setPhoneNumber(target.value)}
          data-testid="phone"
          placeholder="Type phone number..."
        />
      </div>
      <div className="authInput">
        <label>Password</label>
        <input
          required
          type="password"
          value={passwordHash}
          name="password"
          onChange={({ target }) => setPasswordHash(target.value)}
          data-testid="password"
          placeholder="Type new password..."
        />
      </div>
      {isStaff && (
        <div className="authFormStaffSection">
          <label id="authFormStaffLabel">Role</label>
          <select
            id="staffSelect"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option>Staff</option>
            <option>Admin</option>
          </select>
        </div>
      )}
      <button type="submit">{!isStaff ? "Sign Up" : "Create account"}</button>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      {!isStaff && <a onClick={toggleSignup}>Existing account? Log in here!</a>}
    </form>
  );
}
