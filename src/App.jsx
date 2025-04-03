import { useState } from "react";
import Scene from "./components/Scene";
import UIControls from "./components/UIControls";
import ARModeButton from "./components/ARButton";

function App() {
  const [curve, setCurve] = useState(0.5);
  const [distance, setDistance] = useState(2);
  const [yHeight, setYHeight] = useState(0);
  const [ambientLight, setAmbientLight] = useState(1);

  return (
    <div className="app">
      <Scene curve={curve} distance={distance} yHeight={yHeight} ambientLight={ambientLight} />
      <UIControls setCurve={setCurve} setDistance={setDistance} setYHeight={setYHeight} setAmbientLight={setAmbientLight} />
      <ARModeButton />
    </div>
  );
}

export default App;