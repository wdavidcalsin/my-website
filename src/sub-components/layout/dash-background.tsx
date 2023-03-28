import React from "react";

const DashBackground = () => {
  return (
    <svg
      style={{
        pointerEvents: "none",
        position: "fixed",
        isolation: "isolate",
        zIndex: "50",
        opacity: "0.7",
        mixBlendMode: "soft-light",
        width: "100%",
        height: "100%",
      }}
      width="100%"
      height="100%"
    >
      <filter id="wdavidcalsin">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#wdavidcalsin)"></rect>
    </svg>
  );
};

export default DashBackground;
