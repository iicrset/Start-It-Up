import { Canvas } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Simple 3D Rocket (no external assets)
function Rocket() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group scale={1.5} position={[0, -1, 0]}>
        {/* Body */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.5, 2, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 1.2, 0]}>
          <coneGeometry args={[0.3, 0.7, 32]} />
          <meshStandardMaterial color="#ff4d4d" />
        </mesh>

        {/* Fins */}
        {[1, -1].map((x) => (
          <mesh position={[x * 0.4, -0.5, 0]}>
            <boxGeometry args={[0.1, 0.7, 0.3]} />
            <meshStandardMaterial color="#ff6b6b" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function Intro3D({ onFinish }) {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    setTimeout(() => setLaunch(true), 2000); // auto-launch after 2 sec
    setTimeout(() => onFinish && onFinish(), 4300); // transition out
  }, []);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={60} depth={40} count={4000} factor={4} fade speed={1} />

        <motion.group
          initial={{ y: 0 }}
          animate={{ y: launch ? -10 : 0 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          <Rocket />
        </motion.group>
      </Canvas>

      {/* Text Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          READY TO LAUNCH?
        </h1>
      </motion.div>

      {/* Fade Out Transition */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: launch ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 2.4 }}
      />
    </div>
  );
}
