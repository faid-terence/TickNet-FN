import React from "react";
import supportImage from "../../assets/images/support.jpeg";
import "./Support.css";

export const Support = () => {
  return (
    <section>
      <div className="support-container">
        <div className="supp-background"></div>
        <SupportCard />
        <div className="support-title">24/7 Customer Support Always Ready</div>
        <div className="support-description">
          Our 24/7 customer support is always there to help you with any queries
          or issues. You can count on us at any time.
        </div>
        <div className="supp-btn">
          <div className="supp-btn-text">CONTACT US</div>
        </div>
      </div>
    </section>
  );
};

const SupportCard = () => {
  return (
    <div className="supp-card">
      <img className="supp-card-image" src={supportImage} alt="Placeholder" />
    </div>
  );
};
