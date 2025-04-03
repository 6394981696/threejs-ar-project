import React from "react";

const ARButton = () => {
  const handleARMode = () => {
    alert("AR Mode Activated! (WebXR Integration Needed)");
  };

  return (
    <button onClick={handleARMode} style={styles.arButton}>Enter AR Mode</button>
  );
};

const styles = {
  arButton: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default ARButton;