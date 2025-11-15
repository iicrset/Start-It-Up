// src/App.tsx
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Import GLB files (bundler will return URLs)
import rocketUrl from "./Assets/rocket.glb";
import spaceUrl from "./Assets/space_scene.glb";
import spaceBg from "./Assets/space.jpg";

// Website components (leave as-is)
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Mentors } from "./components/Mentors";
import { FAQ } from "./components/FAQ";
import { Sponsers } from "./components/Sponsers";

import iic from "./Assets/iic.png";
import rset from "./Assets/rset.png";
import rset_innovation from "./Assets/rset_innovation.png";

/* -------------------------
   RocketModel (GLB)
   - moves up when launch=true
   - small flame under rocket
--------------------------*/
function RocketModel({ launch }: { launch: boolean }) {
  const { scene } = useGLTF(rocketUrl) as any;
  const ref = useRef<any>(null);
  const flameRef = useRef<any>(null);

  // initial offset so rocket sits visually on screen
  useFrame((state, delta) => {
    if (!ref.current) return;

    // gentle idle before launch
    if (!launch) {
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        -1,
        0.06
      );
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      // flame subtle pulse
      if (flameRef.current) {
        flameRef.current.scale.y = 0.9 + Math.abs(Math.sin(state.clock.elapsedTime * 12)) * 0.5;
      }
    } else {
      // launch movement - ease out upward
      ref.current.position.y += 8 * delta; // speed upward
      ref.current.rotation.z += 0.6 * delta; // slight rotation
      // flame elongates during thrust
      if (flameRef.current) {
        flameRef.current.scale.y = THREE.MathUtils.lerp(flameRef.current.scale.y, 4.5, 0.08);
        flameRef.current.material.opacity = THREE.MathUtils.lerp(flameRef.current.material.opacity, 0.85, 0.05);
      }
    }
  });

  return (
<<<<<<< Updated upstream
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Timeline Section */}
   {/* Timeline Section */}
{/* Program Timeline Section */}
<section className="relative overflow-hidden px-4 py-24 bg-gradient-to-b from-[#7A0000] via-[#8B0000] to-[#B30000] text-white">
  {/* Subtle texture or overlay glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

  <div className="relative mx-auto max-w-6xl text-center">
<h2 className="mb-16 text-4xl md:text-5xl font-extrabold tracking-wide text-[#FFD700] drop-shadow-[0_3px_10px_rgba(255,215,0,0.4)]">
  Program Timeline
</h2>


    {/* Phase Boxes Grid */}
    <div className="grid gap-10 md:grid-cols-3">
      {[
        {
          phase: "Phase 1",
          title: "Idea Validation & Shortlisting",
          desc: "Teams identify problems, brainstorm innovative solutions, and validate ideas through mentor guidance.",
        },
        {
          phase: "Phase 2",
          title: "MVP Development",
          desc: "Build and refine your minimum viable product with technical and business support sessions.",
        },
        {
          phase: "Phase 3",
          title: "Product Validation",
          desc: "Test your MVP with early users and receive mentor feedback to improve product-market fit.",
        },
        {
          phase: "Phase 4",
          title: "Business Model & Strategy",
          desc: "Develop a sustainable business model and refine your strategy for market entry.",
        },
        {
          phase: "Phase 5",
          title: "Pitch Preparation",
          desc: "Craft a compelling pitch deck and presentation with mentorship from industry experts.",
        },
        {
          phase: "Phase 6",
          title: "Demo Day",
          desc: "Showcase your startup to investors and industry leaders at the final demo day event.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white/95 backdrop-blur-md p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/20 transform transition-all hover:-translate-y-2 hover:shadow-[0_12px_50px_rgba(255,255,255,0.15)]"
        >
          <h3 className="mb-3 text-2xl font-bold text-[#8B0000]">{item.phase}</h3>
          <h4 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h4>
          <p className="text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div> 
</section>  

      <Mentors />
      <Sponsers />
      <FAQ />

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 text-white" id="apply">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Join our next cohort and transform your idea into a successful startup
          </p>
          <a
            href="https://konfhub.com/start-it-up-edition-ii-the-kickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:bg-primary/90"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className="bg-gray-900 px-4 py-8 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-8">
            {/* Bottom row with centered images */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-evenly">
              <img src={iic} alt="IIC Logo" className="h-16 sm:h-20 object-contain" />
              <img src={rset_innovation} alt="RSET Innovation Logo" className="h-14 sm:h-16 object-contain" />
              <img src={rset} alt="Footer Logo" className="h-14 sm:h-16 object-contain" />
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm cursor-pointer text-center">
                © 2025 StartItUp. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4">
                <a className="hover:text-white cursor-pointer">Contact</a>
                <a className="hover:text-white cursor-pointer">Privacy</a>
                <a className="hover:text-white cursor-pointer">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
=======
    <group ref={ref} position={[0, -1, 0]} scale={[1.6, 1.6, 1.6]}>
      <primitive object={scene} />
      {/* flame - a cone under rocket */}
      <mesh ref={flameRef} position={[0, -1.45, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.18, 0.6, 24]} />
        <meshBasicMaterial
          transparent
          opacity={0.7}
          color={"#ffb84d"}
          toneMapped={false}
        />
      </mesh>
    </group>
>>>>>>> Stashed changes
  );
}

/* -------------------------
   SpaceScene (GLB)
   - a background model (optional)
--------------------------*/
function SpaceScene() {
  const { scene } = useGLTF(spaceUrl) as any;
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      // slow rotation for parallax depth
      ref.current.rotation.y += 0.002 * state.clock.getElapsedTime() * 0.001;
    }
  });

  return <primitive ref={ref} object={scene} scale={3} position={[0, 0, -5]} />;
}

/* -------------------------
   Comet (simple moving object)
--------------------------*/
function Comet() {
  const ref = useRef<any>(null);
  const t = useRef(0);
  useFrame((state, delta) => {
    t.current += delta * 0.6;
    if (ref.current) {
      // trajectory across the screen
      ref.current.position.x = -6 + (t.current % 1.8) * 10; // loops
      ref.current.position.y = 2 - (t.current % 1.8) * 3;
      ref.current.material.opacity = 0.8 - (t.current % 1.8) * 0.4;
    }
  });

  return (
    <mesh ref={ref} position={[-6, 2, -2]}>
      <sphereGeometry args={[0.05, 12, 12]} />
      <meshBasicMaterial color={"#fff"} transparent opacity={0.9} />
    </mesh>
  );
}

/* -------------------------
   Camera bob + shake for cinematic
--------------------------*/
function CameraFloat({ launch }: { launch: boolean }) {
  const { camera } = useThree();
  const t = useRef(0);

  useFrame((state) => {
    t.current += state.clock.getElapsedTime() * 0.0005;
    if (!launch) {
      // gentle bob
      camera.position.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
      camera.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08 + 0.2;
      camera.lookAt(0, 0, 0);
    } else {
      // camera pushes forward during launch for drama
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 2.2, 0.02);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.6, 0.02);
      camera.lookAt(0, state.clock.elapsedTime * 0.001, 0);
    }
  });

  return null;
}

/* -------------------------
   MAIN App
--------------------------*/
export default function App() {
  const [count, setCount] = useState<number>(3);
  const [launch, setLaunch] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    if (count === 0) {
      // start launch sequence
      setLaunch(true);
      // wait for rocket exit animation then show website
      const t = setTimeout(() => setDone(true), 3500);
      return () => clearTimeout(t);
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  // After intro, show the app
  if (done) {
    return (
      <div className="min-h-screen bg-white animate-fadein">
        <Navbar />
        <Hero />
        <Features />
        <Mentors />
        <Sponsers />
        <FAQ />

        {/* CTA */}
        <section className="bg-gray-900 px-4 py-20 text-white" id="apply">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdw0M6NOiE-jg6GmAjozKKg3j16esfsYcYl2NwlNQrphG0eZw/viewform"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary/90"
            >
              Apply Now →
            </a>
          </div>
        </section>

        <footer className="bg-gray-900 px-4 py-8 text-gray-400">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-8">
              <img src={iic} alt="iic" className="h-16" />
              <img src={rset_innovation} alt="rset" className="h-16" />
              <img src={rset} alt="rset" className="h-16" />
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Intro screen (GLB-powered)
  return (
    <div className="fixed inset-0 overflow-hidden text-white">
      {/* background image (parallax feel) */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-parallax"
        style={{ backgroundImage: `url(${spaceBg})` }}
      />

      {/* Canvas with 3D content */}
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Suspense fallback={null}>
          <Stars radius={180} depth={80} count={8000} fade speed={1} />
          <SpaceScene />
          <RocketModel launch={launch} />
          <Comet />
        </Suspense>

        <CameraFloat launch={launch} />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>

      {/* overlay text / countdown */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide text-center"
          style={{ textShadow: "0 0 20px #ff008c, 0 0 40px #ff008c" }}
        >
          READY TO LAUNCH
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.0 }}
          className="mt-4 text-xl md:text-2xl text-blue-200 font-light tracking-widest"
          style={{ letterSpacing: "0.35em" }}
        >
          EDITION II
        </motion.h2>

        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-8xl md:text-9xl font-extrabold"
          style={{ textShadow: "0 0 30px #00eaff, 0 0 60px #00eaff" }}
        >
          {count}
        </motion.div>
      </div>
    </div>
  );
}
