import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ setUser }) {
  const [showLogIn, setLogIn] = useState(false);
  return (
    <main>
      <h3 onClick={() => setLogIn(!showLogIn)}>
        {showLogIn ? "Log In" : "Sign Up"}
      </h3>
      {showLogIn ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
