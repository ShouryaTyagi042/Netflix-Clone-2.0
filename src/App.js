import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        console.log(userAuth);
      } else {
        //logged Out
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen></LoginScreen>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
