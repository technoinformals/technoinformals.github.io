import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import spankdex from "../assets/shockpool.png";
import TypingAnimation from "../typing";

import "./Home.css";
const Image = ({ src, hoverData }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(true);
  };

  const onHoverOver = () => {
    setHover(false);
  };

  return (
    <div
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
    </div>
  );
};

export default function Home() {
  const images = [
    {
      src: require("../assets/event-red/Untitled-1.png"),
      hoverData: (
        <div>
          Got beef with someone? This is the best place to dish it.
          <br />
          <br />
          Jk, we serve veg only.
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-5.png"),
      hoverData: (
        <div>
          Wanna frame a friend for a crime? <br />
          <br />
          This is where you ensure (s)he does the time.
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-9.png"),
      hoverData: (
        <div>
          Save the best for the last. <br />
          <br />
          This. is where it all began.
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-3.png"),
      hoverData: (
        <div>
          Unable to get over your past? You could get therapy...or find a
          Portkey and hit rewind :")
        </div>
      ),
    },

    {
      src: require("../assets/event-red/Untitled-2.png"),
      hoverData: (
        <div>
          Got the money to invest but ain't got the balls? <br />
          <br />
          We got you covered xD
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-6.png"),
      hoverData: (
        <div>
          Intense and fiery debates about who ought to get the most funding as
          we lay broke.
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-7.png"),
      hoverData: <div>If you know the storyline here, DM us plz.</div>,
    },
    {
      src: require("../assets/event-red/Untitled-8.png"),
      hoverData: (
        <div>
          Our coolest capture the flag event. proud. <br />
          <br />
          *sniffles happy tears*
        </div>
      ),
    },
    {
      src: require("../assets/event-red/Untitled-4.png"),
      hoverData: (
        <div>
          A heist involving Ukrainian spies, Russian Spies aaaaand
          <br /> the elusive
          <br /> <br />
          General Put-out.
        </div>
      ),
    },

    // Add more image objects with different src and hover data
  ];

  return (
    <div className="AboutUs">
      <div className="realBody">
        <div className="watermark">
          <img src={logo} alt="Test" />
          <h1>TechnoInformals</h1>
        </div>
        <TypingAnimation />
      </div>

      <div className="event-grid" data-aos="fade-up" data-aos-duration="750">
        <h1>The Creators of</h1>
        <div
          className="image-grid-container"
          data-aos="zoom-in-up"
          data-aos-delay="250"
          data-aos-duration="2000"
        >
          <div className="image-grid">
            {images.map((image, index) => (
              <Image key={index} src={image.src} hoverData={image.hoverData} />
            ))}
          </div>
        </div>
      </div>
      <div className="contact-card"
          data-aos="zoom-in-up">
        <div className="main">Wanna know more about us?</div>
        <iframe
          src="https://www.youtube-nocookie.com/embed/uvFh0ki06Go?si=QDGlNPkjYlHAapff"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="text">
          <img src={spankdex}></img>
          <br></br>
          Aww, we gotchu!
        </div>
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
