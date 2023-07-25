import React from "react";
import "../assets/css/Navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="netflix_logo"
        className="nav_logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="netflix_logo"
        className="nav_avatar"
      />
    </div>
  );
}
