import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";

const NAV_LINKS = [
  { label: "our company", route: "/company" },
  { label: "locations", route: "/locations" },
  { label: "contact", route: "/contact" },
];

function App() {
  return (
    <div className="app">
      <div className="app__nav">
        <Navigation links={NAV_LINKS} />
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/company" element={<div>COMPANY</div>} />
          <Route path="/locations" element={<div>LOCATIONs</div>} />
          <Route path="/contact" element={<div>CONTACT</div>} />
        </Routes>
      </div>
      <Footer links={NAV_LINKS} />
    </div>
  );
}

export default App;
