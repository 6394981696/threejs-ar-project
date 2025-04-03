import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CurvedPlane from "./CurvedPlane";

export default function Scene({ curve, distance, yHeight, ambientLight }) {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
      <ambientLight intensity={ambientLight} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <CurvedPlane curve={curve} distance={distance} yHeight={yHeight} />
      <OrbitControls />
    </Canvas>
  );
}