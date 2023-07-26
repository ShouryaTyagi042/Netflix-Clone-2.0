import React from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/LoginScreen.css";

export default function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background ">
        <img src={logo} alt="loginScreen_logo" className="loginScreen_logo" />
      </div>
    </div>
  );
}
