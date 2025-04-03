import React from "react";

export default function UIControls({ setCurve, setDistance, setYHeight, setAmbientLight }) {
  return (
    <div style={styles.controlsContainer}>
      <label>Curve:<input type="range" min="0" max="1" step="0.1" onChange={(e) => setCurve(parseFloat(e.target.value))} /></label>
      <label>Distance:<input type="range" min="1" max="5" step="0.5" onChange={(e) => setDistance(parseFloat(e.target.value))} /></label>
      <label>Y Height:<input type="range" min="-2" max="2" step="0.1" onChange={(e) => setYHeight(parseFloat(e.target.value))} /></label>
      <label>Ambient Light:<input type="range" min="0" max="2" step="0.1" onChange={(e) => setAmbientLight(parseFloat(e.target.value))} /></label>
    </div>
  );
}

const styles = {
  controlsContainer: {
    position: "absolute",
    top: "10px",
    left: "10px",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
