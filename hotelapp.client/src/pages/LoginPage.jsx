import { useOutletContext } from "react-router-dom";
import LoginForm from "../components/general/LoginForm";
import { useState } from "react";
import SignupForm from "../components/general/SignupForm";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const { handleLogin } = useOutletContext();

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="loginPage">
      {!isSignup ? (
        <>
          <h1>Log In</h1>
          <LoginForm handleLogin={handleLogin} toggleSignup={toggleSignup} />
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          <SignupForm toggleSignup={toggleSignup} />
        </>
      )}
    </div>
  );
}
