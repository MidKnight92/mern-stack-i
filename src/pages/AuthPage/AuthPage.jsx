import { useState } from "react";
import "./AuthPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogIn, setLogIn] = useState(false);
  return (
    <main className="AuthPage">
      <Logo />
      <h3 onClick={() => setLogIn(!showLogIn)}>
        {showLogIn ? "Sign Up" : "Log In"}
      </h3>
      {showLogIn ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
