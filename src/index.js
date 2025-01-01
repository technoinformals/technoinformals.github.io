import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter here
import AboutUs from "./pages/AboutUs";
import OurEvents from "./pages/OurEvents";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-events" element={<OurEvents />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
