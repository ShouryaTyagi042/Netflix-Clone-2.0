import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/LoginScreen.css";

export default function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background ">
        <img src={logo} alt="loginScreen_logo" className="loginScreen_logo" />
        <button className="loginScreen_button">Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
    </div>
  );
}
