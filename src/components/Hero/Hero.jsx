import React from "react";
import HeroImage from "../../assets/images/event 1.png";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="explore-button">
        <div className="explore-button-text">Explore Now!</div>
      </div>
      <div className="text-content">
        <span>
          Making Event Tickets Available Everywhere
          <br />
          <br />
        </span>
        <span className="subtext">
          TickNet is your go-to online platform for all your event tickets
          needs. Experience the joy of securing your tickets from your home. No
          queues, no hassle.
          <br />
        </span>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Event Hero" />
      </div>
    </div>
  );
};
