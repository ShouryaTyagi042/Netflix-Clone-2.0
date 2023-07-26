import React from "react";
import "../assets/css/SignInScreen.css";

export default function SignInScreen() {
  const register = (e) => {
    e.preventDefault();
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In </h1>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen_textGray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
