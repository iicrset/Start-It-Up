import { useEffect, useState } from "react";
import rocketImg from "../Assets/rocket.png"; // make sure this exists

export default function LandingPage() {
  const [count, setCount] = useState(3);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          setLaunch(true);
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center text-white overflow-hidden relative"
      style={{
        backgroundImage: "url('https://i.imgur.com/0fM8K8C.jpeg')", // SPACE BG
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Title */}
      <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl mb-12">
        Ready to Launch?
      </h1>

      {/* Countdown */}
      <div className="relative z-10 text-7xl md:text-8xl font-black drop-shadow-2xl mb-6 animate-pulse">
        {count > 0 ? count : ""}
      </div>

      {/* Rocket */}
      <img
        src={rocketImg}
        alt="rocket"
        className={`absolute bottom-10 w-40 transition-all duration-[3000ms] ease-out
          ${launch ? "-translate-y-[150vh] rotate-12 scale-125" : ""}
        `}
      />

      {/* Fade out on launch */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000
        ${launch ? "opacity-100" : "opacity-0"} pointer-events-none`}
      />
    </div>
  );
}
