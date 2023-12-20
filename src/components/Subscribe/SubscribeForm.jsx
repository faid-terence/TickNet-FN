import React from "react";

export const SubscribeForm = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: "4090px",
      }}
    >
      <div
        style={{
          width: 1445,
          height: 407,
          left: 180,
          top: 0,
          position: "absolute",
          background: "#339657",
        }}
      />
      <div
        style={{
          width: 632,
          height: 49,
          left: 600,
          top: 30,
          position: "absolute",
          color: "white",
          fontSize: 40,
          fontFamily: "Fraunces",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Join Our Global Family Today!
      </div>
      <div
        style={{
          width: 814,
          height: 53,
          left: 540,
          top: 100,
          position: "absolute",
          color: "#F4F4F4",
          fontSize: 24,
          fontFamily: "Fraunces",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Subscribe today and get the best of upcoming events at your fingertips.
      </div>
      <div
        style={{
          width: 848,
          height: 93,
          left: 410,
          top: 204,
          position: "absolute",
          background: "#EFEFEF",
          borderRadius: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="Enter your email"
          style={{
            width: "70%",
            border: "none",
            outline: "none",
            fontSize: 16,
            fontFamily: "Fraunces",
            fontWeight: "400",
            paddingLeft: 10,
          }}
        />
        <div
          style={{
            width: "30%",
            padding: 10,
            background: "black",
            borderRadius: "0 20px 20px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
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
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};
