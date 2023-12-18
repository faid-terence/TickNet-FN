import React from "react";
import HeroImage from "../../assets/images/event 1.png";

export const Hero = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          position: "relative",
          top: 300,
          left: 0,
        }}
      >
        <div
          style={{
            width: 291,
            height: 88.44,
            padding: 10,
            left: 180,
            top: 358,
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
              width: 186,
              color: "#EFEFEF",
              fontSize: 20,
              fontFamily: "Fraunces",
              fontWeight: "700",
              wordWrap: "break-word",
              cursor: "pointer",
            }}
          >
            Explore Now!
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: 633,
              height: 278.69,
              left: 180,
              top: 0,
              position: "absolute",
            }}
          >
            <span
              style={{
                color: "black",
                fontSize: 52,
                fontFamily: "Fraunces",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Making Event Tickets Available Everywhere
              <br />
              <br />
            </span>
            <span
              style={{
                color: "black",
                fontSize: 24,
                fontFamily: "Fraunces",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              TickNet is your go-to online platform for all your event tickets
              needs. Experience the joy of securing your tickets from your home.
              No queues, no hassle.
              <br />
            </span>
          </div>
        </div>
        <div
          style={{
            width: 780,
            height: 400,
            borderRadius: 20,
            position: "absolute",
            right: 150,
            top: 0,
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={HeroImage}
            alt="Event Hero"
          />
        </div>
      </div>
    </>
  );
};
