import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./OurEvents.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import timelineData from "../assets/event_details.json";

const OurEvents = () => {
  return (
    <div className="mainbody">
    <VerticalTimeline visible="false">
      {timelineData.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          iconStyle={{ background: "rgb(148,5,5)", color: "#fff" }}
        >
          <div className="vertical-timeline-element-title" style={{ color: "white" }}>
            {event.Title}
          </div>
          <h4 className="vertical-timeline-element-subtitle">{event.Year}</h4>
          <Carousel showThumbs={false}>
            {event["Image source"].map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={require("../assets/"+  src)}
                alt={`Image ${imgIndex + 1}`}
              />
            ))
            
            } 
          </Carousel>
          <p className="vertical-timeline-element">
            {event.Caption}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
      <br />
      <br />
    </div>
  );
};

export default OurEvents;
