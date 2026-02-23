"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere } from "@react-three/drei";

function FloatingShape() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#34d399" />
      </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>

        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 5]} />

        {/* Object */}
        <FloatingShape />

        {/* Camera controls */}
        <OrbitControls enableZoom={false} />

      </Canvas>
    </div>
  );
}
