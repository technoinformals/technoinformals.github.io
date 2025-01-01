import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
AOS.init();

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isScrolled ? "scrolled" : ""}`}>
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
