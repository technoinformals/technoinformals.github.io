
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
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
        )
      },
      {
        src: require("../assets/event-red/Untitled-5.png"),
        hoverData: (
          <div>
            Wanna frame a friend for a crime? <br />
            <br />
            This is where you ensure (s)he does the time.
          </div>
        )
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
        )
      },
      {
        src: require("../assets/event-red/Untitled-3.png"),
        hoverData: (
          <div>
            Unable to get over your past? You could get therapy...or find a
            Portkey and hit rewind :")
          </div>
        )
      },
  
      {
        src: require("../assets/event-red/Untitled-2.png"),
        hoverData: (
          <div>
            Got the money to invest but ain't got the balls? <br />
            <br />
            We got you covered xD
          </div>
        )
      },
      {
        src: require("../assets/event-red/Untitled-6.png"),
        hoverData: (
          <div>
            Intense and fiery debates about who ought to get the most funding as
            we lay broke.
          </div>
        )
      },
      {
        src: require("../assets/event-red/Untitled-7.png"),
        hoverData: <div>If you know the storyline here, DM us plz.</div>
      },
      {
        src: require("../assets/event-red/Untitled-8.png"),
        hoverData: (
          <div>
            Our coolest capture the flag event. proud. <br />
            <br />
            *sniffles happy tears*
          </div>
        )
      },
      {
        src: require("../assets/event-red/Untitled-9.png"),
        hoverData: (
          <div>
            Save the best for the last. <br />
            <br />
            This. is where it all began.
          </div>
        )
      }
  
      // Add more image objects with different src and hover data
    ];
  
    return (
      <div className="AboutUs">

        <div className="realBody">
          <div className="watermark">
            <img src={logo} alt="Test" />
            <h1>
              TechnoInformals
            </h1>
          </div>
          <TypingAnimation />
        </div>
  
        <div
  className="event-grid"
  data-aos="fade-up"
  data-aos-duration="750"
>
  <h1>The Creators of</h1>
  <div
    className="image-grid-container"
    data-aos="zoom-in-up"
    data-aos-delay="500"
    data-aos-duration="2000"
  >
    <div className="image-grid">
      {images.map((image, index) => (
        <Image key={index} src={image.src} hoverData={image.hoverData} />
      ))}
    </div>
  </div>
</div>
      </div>
    );
  }
  