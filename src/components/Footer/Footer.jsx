import React from "react";
import instagramIcon from "../../assets/images/instagram.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import facebookIcon from "../../assets/images/facebook.svg";

export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: "600px",
      }}
    >
      <div
        style={{
          width: 294,
          height: 198.07,
          left: 180,
          top: 19,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 387,
            height: 52,
            left: 0,
            top: 79,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          At TickNet, we celebrate events and fests.
        </div>
        <div
          style={{
            width: 219,
            height: 48,
            left: 3,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 36,
            fontFamily: "Fraunces",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          TickNet
        </div>
        <div
          style={{
            width: 21.89,
            height: 21.88,
            left: 0,
            top: 174,
            position: "absolute",
            // background: "black",
          }}
        >
          <img src={instagramIcon} alt="" />
        </div>
        <div
          style={{
            width: 25,
            height: 20.3,
            left: 49,
            top: 176,
            position: "absolute",
            // background: "black",
          }}
        >
          <img src={twitterIcon} alt="" />
        </div>
        <div
          style={{
            width: 24.22,
            height: 24.07,
            left: 101,
            top: 174,
            position: "absolute",
            // background: "black",
          }}
        >
          <img src={facebookIcon} alt="" />
        </div>
      </div>
      <div
        style={{
          width: 259,
          height: 186,
          left: 1371,
          top: 0,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 197.39,
            height: 40,
            left: 15.97,
            top: 0,
            position: "absolute",
            color: "black",
            fontSize: 24,
            fontFamily: "Fraunces",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Contact Us
        </div>
        <div
          style={{
            width: 229.33,
            height: 24,
            left: 0,
            top: 65,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          support@ticknet.com
        </div>
        <div
          style={{
            width: 229.33,
            height: 24,
            left: 29.67,
            top: 113,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          06211 85 77 87{" "}
        </div>
      </div>
      <div
        style={{
          width: 197,
          height: 52.62,
          paddingTop: 10,
          paddingBottom: 11,
          paddingLeft: 10,
          paddingRight: 10,
          left: 1387,
          top: 167,
          position: "absolute",
          background: "#339657",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "#EFEFEF",
            fontSize: 20,
            fontFamily: "Fraunces",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          CONTACT US
        </div>
      </div>
      <div
        style={{
          width: 1500,
          height: 0,
          left: 180,
          top: 266,
          position: "absolute",
          border: "1px black solid",
        }}
      ></div>
      <div
        style={{
          width: 533,
          height: 36,
          left: 755,
          top: 296,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Fraunces",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        © 2024 TickNet, we love our users!
      </div>
    </div>
  );
};
