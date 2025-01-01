import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import OurEvents from "./pages/OurEvents";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Home from "./pages/Home";

AOS.init();

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsScrolled(true);
      } else if (currentScrollY < prevScrollY+100) {
        setIsScrolled(false);
      }

      setPrevScrollY(currentScrollY);
    };

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [prevScrollY]);

  const getLinkClassName = (pathname) =>
    pathname === currentPath ? "active-link" : "link";

  // Function to handle Link clicks and update currentPath
  const handleLinkClick = (path) => {
    setCurrentPath(path);
  };

  return (
    <div className={`App ${isScrolled ? "scrolled" : ""}`}>
      <HashRouter>
        <div className="header">
          <Link
            className={getLinkClassName("/about-us")}
            to="/about-us"
            onClick={() => handleLinkClick("/about-us")}
          >
            About Us
          </Link>

          <Link
            className={getLinkClassName("/")}
            to="/"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            className={getLinkClassName("/our-events")}
            to="/our-events"
            onClick={() => handleLinkClick("/our-events")}
          >
            Our Events
          </Link>


        </div>
        <Routes>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/our-events" element={<OurEvents/>} />
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
