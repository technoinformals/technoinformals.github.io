import React, { useState } from "react";
import spankdex from "../assets/shockpool.png";
import TypingAnimation from "../typing";
import imagesData from "../assets/grid-event-details.json";
import "./Home.css";

import PropTypes from "prop-types";
const Image = ({ src, hoverData }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOver = () => {
    setHover(false);
  };

  return (
    <button
      className="image-container"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOver}
    >
      <img
        alt=""
        src={src}
        className={`img-responsive ${hover ? "img-hovered" : ""}`}
      />
      {hover && <div className="hover-text">{hoverData}</div>}
    </button>
  );
  
    };  

export default function Home() {
  return (
    <div className="AboutUs">
      <div className="realBody">
        <div className="watermark">
        <svg xmlns="http://www.w3.org/2000/svg" width="495" height="376" version="1.0"><g fill="#fff"><path d="M233.6 326.8c-5.9-8.4-11.5-16.4-12.5-17.8-1.1-1.4-11.3-16-22.8-32.5-25.8-37-58.6-83.8-79.2-113-8.5-12.1-16.8-24-18.5-26.5-1.7-2.5-5.5-7.8-8.4-11.9-2.9-4.1-4.9-7.8-4.5-8.2 2-2 65.7-37.7 66.5-37.3.4.3.8 4.5.8 9.4 0 10.5 2.8 7.8-23 22.6-9.7 5.7-17.6 10.9-17.8 11.8-.3 1.3 15.6 24.8 45.5 67.1 2.3 3.3 7 10.1 10.4 15 3.4 5 10.1 14.4 14.8 21 4.7 6.6 10.8 15.3 13.6 19.2 26.2 37.9 42.2 60.7 43.7 62.3 1 1.1 2.5 1.7 3.3 1.4.8-.4 8-9.9 15.9-21.3 7.8-11.3 18.1-26 22.8-32.6 20-28.4 45.8-65.6 45.8-66.1 0-.3.6-1.2 1.4-2 2-1.9 39.6-55.4 42-59.7 1.1-1.8 1.7-4.1 1.4-4.9-.4-.8-9.1-6.4-19.5-12.3-10.3-5.9-19.4-11.4-20.1-12.3-1-1.2-1.2-4-.8-10.1.3-4.6.7-8.5.9-8.7.2-.2 11.1 5.7 24.3 13.2 33.9 19.3 42.4 24.4 42.4 25.3 0 .4-1.5 2.8-3.3 5.2-1.8 2.4-6.4 8.9-10.2 14.4-3.9 5.5-8.8 12.6-11 15.7-2.2 3.1-7.9 11.2-12.6 18-8.3 11.9-84.9 121.1-102 145.3-4.6 6.6-10.2 14.6-12.3 17.8-2.2 3.2-4.5 6.2-5.2 6.8-.9.7-3.9-2.9-11.8-14.3z"/><path d="M240.4 267.3c-2.1-3.2-7.6-11.6-12.2-18.7l-8.5-12.8.8-19.2c.4-10.5 1-23.1 1.4-28.1l.6-9 22.3-.3c12.2-.1 22.2-.1 22.2 0 .1.2.5 8.9 1 19.3.5 10.5 1.2 22.9 1.5 27.5l.7 8.5-12.3 19.3c-6.8 10.5-12.7 19.2-13.1 19.2-.4 0-2.4-2.6-4.4-5.7zM226.5 156.5c-2.2-2.1-2.5-3.3-2.5-10.3 0-9.1 1.3-13.7 4.4-15.4 1.1-.7 7.7-1.4 14.6-1.6 19.8-.7 22 1 22.3 16.6.2 8 .1 8.5-2.6 10.8-2.7 2.3-3.3 2.4-18.3 2.4-15.1 0-15.6-.1-17.9-2.5zM227.2 109.2c-1-.7-1.1-5-.2-21.8.5-11.5 1.2-22.6 1.5-24.7.6-4.3-1.4-5.9-4.8-3.7-4.8 2.9-29.6 17-31.1 17.6-1.4.5-1.6-.6-1.6-9.3v-10l14.8-8.4c8.1-4.6 15.6-8.8 16.7-9.4 1.1-.6 6.5-3.8 11.9-7l10-5.8 3.5 1.9c2 1.1 14.1 8.1 26.8 15.4 22.1 12.7 23.3 13.5 23.9 16.8.6 3.3-.1 15.1-1.1 16-.2.2-7.9-3.9-17-9.3-9.2-5.3-17.3-9.4-18.1-9.1-1.2.5-1.4 3-.8 15.3.3 8.2.9 19.3 1.4 24.8.4 5.5.6 10.3.3 10.8-.6 1-34.5.9-36.1-.1z"/></g></svg>
          <h1>TechnoInformals</h1>
        </div>
        <TypingAnimation />
      </div>

      <div className="event-grid" data-aos="fade-up" data-aos-duration="750">
        <h1>The Creators of</h1>
        <div
          className="image-grid-container"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="image-grid">
            {imagesData.map((image, index) => (
              <Image
                key={index}
                src={require("../assets/" + image.src)}
                hoverData={image.hoverData}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="contact-card"
        data-aos="zoom-in-up"
        data-aos-duration="750"
      >
        <div className="main">Wanna know more about us?</div>
        <iframe
          src="https://www.youtube-nocookie.com/embed/uvFh0ki06Go?si=QDGlNPkjYlHAapff"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>

        <div className="text">
          Aww, <br></br>we<br></br> gotchu!
        </div>
        <img src={spankdex} alt="Deadpool" />
        <div className="follow-us">
          Follow us at{" "}
          <a href="https://www.instagram.com/technoinformals/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>{" "}
            technoinformals
          </a>{" "}
          or write to us at
          <a href="mailto:technoinformals20@gmail.com">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
            </svg>{" "}
            technoinformals20@gmail.com{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  hoverData: PropTypes.string,
};