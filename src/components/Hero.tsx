import { ArrowRight } from "lucide-react";
import Particles from "./Particles.jsx";
import { motion } from "framer-motion";
import logo from "../Assets/THE KICK START.png";

export function Hero() {
  return (
    <section
      className="relative text-center overflow-hidden font-sans flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #b60a0a 0%, #7a0000 60%, #2a0000 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Particle Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Particles
          particleColors={["#ffcc00", "#ffdd55", "#ffee99"]}
          particleCount={220}
          particleSpread={18}
          speed={0.35}
          particleBaseSize={180}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Decorative “tape” elements */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute -top-8 -left-40 w-[220%] h-10 bg-[#FFAD41] rotate-[-8deg] flex items-center justify-center text-[#b60a0a] font-extrabold text-sm uppercase tracking-[0.3em] shadow-lg whitespace-nowrap animate-marquee">
          {Array(30).fill("Start It Up • ").join("")}
        </div>

        <div className="absolute bottom-12 -right-40 w-[220%] h-10 bg-[#FFAD41] rotate-[8deg] flex items-center justify-center text-[#b60a0a] font-extrabold text-sm uppercase tracking-[0.3em] shadow-lg whitespace-nowrap animate-marquee-reverse">
          {Array(30).fill("Start It Up • ").join("")}
        </div>
      </div>

      {/* Centered Content */}
      <div className="mx-auto max-w-6xl text-center z-[2] relative flex flex-col items-center justify-center pt-40 md:pt-52 pb-24 px-4">
        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.2rem,3vw,1.8rem)] font-black tracking-wide uppercase mb-3 bg-gradient-to-r from-[#fff6b3] via-[#FFAD41] to-[#fff6b3] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,150,0.6)]"
        >
          IIC RSET{" "}
          <span className="lowercase text-white/90 font-semibold text-[clamp(1rem,2vw,1.2rem)]">
            proudly presents
          </span>
        </motion.p>

        {/* Event Title Image */}
        <motion.img
          src={logo}
          alt="Start It Up Edition II - The Kickstart"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 w-full max-w-4xl object-contain drop-shadow-[0_5px_12px_rgba(0,0,0,0.5)]"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mx-auto mb-4 max-w-2xl text-[clamp(1rem,2vw,1.3rem)] text-white/90 font-light tracking-wide"
        >
          A 6-Month Student Startup Acceleration Programme
        </motion.p>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mb-10 max-w-3xl text-[clamp(0.9rem,2vw,1.1rem)] text-white/80"
        >
          In collaboration with{" "}
          <span className="font-semibold text-[#FFE97F]">RSET IEDC</span> &{" "}
          <span className="font-semibold text-[#FFE97F]">Rajagiri ORBIIT</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="https://konfhub.com/start-it-up-edition-ii-the-kickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#FFD95A] px-8 py-4 text-lg font-semibold text-[#b60a0a] transition-all duration-200 hover:bg-[#FFE47A] shadow-lg group"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/50 shadow-lg"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
