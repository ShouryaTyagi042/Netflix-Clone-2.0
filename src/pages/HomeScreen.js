import React from "react";
import "../assets/css/HomeScreen.css";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default HomeScreen;
