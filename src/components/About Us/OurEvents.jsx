import React from "react";
import eventImage from "../../assets/images/Perfomance.jpg";
import "./OurEvents.css";

export const OurEvents = () => {
  return (
    <div className="event-container">
      <div className="background"></div>
      <EventCard />
      <div className="title">Exciting Events Await You</div>{" "}
      <div className="description">
        Explore a world of amazing events with TickNet. We bring you a variety
        of entertaining and engaging experiences because we value your
        satisfaction and enjoyment.
      </div>
      <div className="cta-button">
        <div className="cta-text">DISCOVER NOW</div>
      </div>
    </div>
  );
};

const EventCard = () => (
  <div className="event-card">
    <img className="event-image" src={eventImage} alt="Event Placeholder" />
  </div>
);
