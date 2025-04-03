import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function CurvedPlane() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // प्लेन को घुमाने का इफ़ेक्ट
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 2, 32, 32]} />
      <meshStandardMaterial color="blue" wireframe />
    </mesh>
  );
}
