import React from "react";
import paymentImage from "../../assets/images/mobilemoney.png";
import "./Card.css";

const PaymentOptions = () => {
  return (
    <div className="payment-container">
      <div className="background"></div>
      <Card />
      <div className="title">Easy Payment Options For Everyone</div>
      <div className="description">
        With TickNet, the payment process is seamless, secure, and
        user-friendly, because we prioritize your convenience and safety above
        anything else.
      </div>
      <div className="cta-button">
        <div className="cta-text">TRY OUT NOW</div>
      </div>
    </div>
  );
};

const Card = () => (
  <div className="card">
    <img className="card-image" src={paymentImage} alt="Placeholder" />
  </div>
);

export default PaymentOptions;
