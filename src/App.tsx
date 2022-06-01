import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import { Home } from "./views/Home/Home";
import { Web } from "./views/Web/Web";
import useResize from "./hooks/useResize";

import Background from "./assets/shared/desktop/bg-pattern-leaf.svg";

const NAV_LINKS = [
  { label: "our company", route: "/company" },
  { label: "locations", route: "/locations" },
  { label: "contact", route: "/contact" },
];

function App() {
  const windowSize = useResize();

  return (
    <div
      className="app"
      style={{
        backgroundImage: windowSize.width > 640 ? `url(${Background})` : "none",
      }}
    >
      <div className="app__nav">
        <Navigation links={NAV_LINKS} />
      </div>
      <div className="app__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-design" element={<Web />} />
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
