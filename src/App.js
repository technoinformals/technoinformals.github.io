import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          About Us
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/our-events"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Our Events
        </NavLink>
      </div>
    </div>
  );
}
