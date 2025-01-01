import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link
          to="/about-us"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          About Us
        </Link>

        <Link
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </Link>

        <Link
          to="/our-events"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Our Events
        </Link>
      </div>
    </div>
  );
}
