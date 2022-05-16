import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                this is the app page <Link to="/about">About</Link>
              </div>
            }
          />
          <Route
            path="about"
            element={
              <div>
                about page <Link to="/">home</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
