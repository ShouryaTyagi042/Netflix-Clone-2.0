import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/LoginScreen.css";
import SignInScreen from "./SignInScreen";

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_background ">
        <img src={logo} alt="loginScreen_logo" className="loginScreen_logo" />
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignInScreen></SignInScreen>
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership. Email address. Get Started.{" "}
            </h3>
            <div className="loginScreen_input">
              <form>
                <input
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <button onClick={() => setSignIn(true)} className="getStarted">
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
