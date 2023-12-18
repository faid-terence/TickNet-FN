import React from "react";

export const Header = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: 52,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#EFEFEF",
        }}
      />
      <div
        style={{
          width: "50%",
          height: 27,
          left: "25%",
          top: 13,
          position: "absolute",
          color: "black",
          fontSize: 15,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Your Ultimate Solution For Online Tickets
      </div>
      <div
        style={{
          width: "100%",
          height: 114,
          left: 0,
          top: 51,
          position: "absolute",
          background: "#339657",
        }}
      />
      <div
        style={{
          width: 142,
          height: 45,
          left: 180,
          top: 86,
          position: "absolute",
          color: "white",
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
          width: 75,
          height: 24,
          left: 930,
          top: 91,
          position: "absolute",
          color: "white",
          fontSize: 20,
          fontFamily: "Fraunces",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Home
      </div>
      <div
        style={{
          width: 75,
          height: 24,
          left: 1060,
          top: 91,
          position: "absolute",
          color: "white",
          fontSize: 20,
          fontFamily: "Fraunces",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Events
      </div>
      <div
        style={{
          width: 75,
          height: 24,
          left: 1204,
          top: 91,
          position: "absolute",
          color: "white",
          fontSize: 20,
          fontFamily: "Fraunces",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Tickets
      </div>
      <div
        style={{
          width: 75,
          height: 24,
          left: 1341,
          top: 91,
          position: "absolute",
          color: "white",
          fontSize: 20,
          fontFamily: "Fraunces",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Contact
      </div>
      <div
        style={{
          width: 122,
          height: 20,
          padding: 10,
          left: 1598,
          cursor: "pointer",
          top: 86,
          position: "absolute",
          background: "#EEEEEE",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          LOGIN
        </div>
      </div>
    </div>
  );
};
