import React from "react";
import { NavLink } from "react-router-dom";
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
      <div className="nav-links">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className={`nav-link ${link.path.substr(1)}`}>
            {link.display}
          </NavLink>
        ))}
      </div>
      <div className="login-button">
        <div className="login-button-text">LOGIN</div>
      </div>
    </div>
  );
};
