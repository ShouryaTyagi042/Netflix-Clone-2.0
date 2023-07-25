import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
