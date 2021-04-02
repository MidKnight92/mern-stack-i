import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogIn, setLogIn] = useState(false);
  const handleClick = () => {
    setLogIn(!showLogIn);
  };
  return (
    <main>
      {showLogIn ? (
        <>
          <h3 onClick={handleClick}>Log In</h3>
          <LoginForm setUser={setUser} />
        </>
      ) : (
        <>
          <h3 onClick={handleClick}>Sign Up</h3>
          <SignUpForm setUser={setUser} />
        </>
      )}
    </main>
  );
}
