// src/App.jsx
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useGLTF, OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";


// GLB
import spaceUrl from "./Assets/space_scene.glb";


// Sections
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { Sponsers } from "./components/Sponsers";

import iic from "./Assets/iic.png";
import rset from "./Assets/rset.png";
import rset_innovation from "./Assets/rset_innovation.png";

/* ---------------------------------------------------
   🌌 Space Scene — Smaller, Rotating
----------------------------------------------------*/
function SpaceScene() {
  const { scene } = useGLTF(spaceUrl);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001; // slow rotation
  });

  return <primitive object={scene} ref={ref} scale={0.8} position={[0, 0, -8]} />; // reduced size
}

/* ---------------------------------------------------
   Typewriter Hook
----------------------------------------------------*/
function useTypewriter(text, speed = 100) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

/* ---------------------------------------------------
   MAIN APP
----------------------------------------------------*/
export default function App() {
  const [count, setCount] = useState(null); // show countdown after typewriter
  const [done, setDone] = useState(false);

  const typewriterText = useTypewriter("READY TO LAUNCH?", 120);

  // Start countdown after typewriter completes
  useEffect(() => {
    if (typewriterText === "READY TO LAUNCH") {
      setCount(3);
    }
  }, [typewriterText]);

  // Countdown logic
  useEffect(() => {
    if (count === null) return;
    if (count <= 0) {
      const timer = setTimeout(() => setDone(true), 2000); // fade after 2s
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="intro"
            className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <Suspense fallback={null}>
                <Stars radius={200} depth={60} count={7000} fade />
                <SpaceScene />
              </Suspense>
              <OrbitControls enableRotate={false} enableZoom={false} />
            </Canvas>

            {/* Typewriter Text */}
            <motion.div
              className="text-5xl md:text-6xl font-extrabold mb-6 absolute top-1/3"
              initial={{ opacity: 0 }}
              animate={{ opacity: typewriterText ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {typewriterText}
            </motion.div>

            {/* Countdown */}
            {count !== null && (
              <motion.div
                key={count}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-8xl md:text-9xl font-extrabold absolute top-1/2"
              >
                {count}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page */}
      {done && (
        <motion.div
          className="min-h-screen bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Navbar />
          <Hero />
          <Features />
          <Mentors />
          <Sponsers />
          <FAQ />


          <section className="bg-gray-900 px-4 py-20 text-white" id="apply">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <a
                href="https://konfhub.com/start-it-up-edition-ii-the-kickstart"
                target="_blank"
                rel="noreferrer"
className="inline-flex items-center rounded-lg px-8 py-4 text-lg font-semibold text-white bg-[#f44336] hover:bg-[#e53935] transition-colors duration-300"              >
                Apply Now →
              </a>
            </div>
          </section>
          <footer className="bg-gray-900 px-4 py-8 text-gray-400">
            <div className="container mx-auto max-w-6xl flex flex-wrap justify-center gap-8">
              <img src={iic} className="h-16" />
              <img src={rset_innovation} className="h-16" />
              <img src={rset} className="h-16" />
            </div>
          </footer>
        </motion.div>
      )}
    </>
  );
}
