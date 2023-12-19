import React from "react";
import "./Header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/tickets",
    display: "Tickets",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export const Header = () => {
  return (
    <div className="header-container">
      <div className="grey-bar" />
      <div className="header-text">
        Your Ultimate Solution For Online Tickets
      </div>
      <div className="green-header" />
      <div className="logo">TickNet</div>
      {navLinks.map((link, index) => (
        <div key={index} className={`nav-link ${link.path.substr(1)}`}>
          {link.display}
        </div>
      ))}
      <div className="login-button">
        <div className="login-button-text">LOGIN</div>
      </div>
    </div>
  );
};
