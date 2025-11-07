import { ArrowRight } from 'lucide-react';
import Particles from './Particles.jsx';

export function Hero() {
  return (
    <section
      className="relative text-center overflow-hidden font-sans flex items-center justify-center"
      style={{
        background: 'radial-gradient(circle at 50% 30%, #b60a0a 0%, #7a0000 60%, #2a0000 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Particle Layer */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Particles
          particleColors={['#ffcc00', '#ffdd55', '#ffee99']}
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
        {/* Top tape */}
        <div className="absolute -top-8 -left-40 w-[220%] h-10 bg-[#FFD95A] rotate-[-8deg] flex items-center justify-center text-[#b60a0a] font-extrabold text-sm uppercase tracking-[0.3em] shadow-lg whitespace-nowrap animate-marquee">
          {Array(30).fill('Start It Up • ').join('')}
        </div>

        {/* Bottom tape */}
        <div className="absolute bottom-12 -right-40 w-[220%] h-10 bg-[#FFD95A] rotate-[8deg] flex items-center justify-center text-[#b60a0a] font-extrabold text-sm uppercase tracking-[0.3em] shadow-lg whitespace-nowrap animate-marquee-reverse">
          {Array(30).fill('Start It Up • ').join('')}
        </div>
      </div>

      {/* Centered Content */}
      <div className="mx-auto max-w-6xl text-center z-[2] relative flex flex-col items-center justify-center pt-40 md:pt-52 pb-24 px-4">
        {/* Top Text */}
        <p className="text-[clamp(1.2rem,3vw,1.8rem)] font-black tracking-wide uppercase mb-3 bg-gradient-to-r from-[#fff6b3] via-[#FFD95A] to-[#fff6b3] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,255,150,0.6)]">
          IIC RSET <span className="lowercase text-white/90 font-semibold text-[clamp(1rem,2vw,1.2rem)]">proudly presents</span>
        </p>

        {/* Event Title */}
        <h1 className="mb-3 text-[clamp(2rem,5vw,3rem)] font-extrabold text-white uppercase tracking-widest drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
          Start It Up Edition II
        </h1>

        {/* Main Heading */}
        <h2 className="mb-8 text-[clamp(3rem,10vw,6rem)] font-extrabold text-white drop-shadow-[0_5px_12px_rgba(0,0,0,0.5)] uppercase leading-none tracking-tight">
          The Kickstart
        </h2>

        {/* Tagline */}
        <p className="mx-auto mb-4 max-w-2xl text-[clamp(1rem,2vw,1.3rem)] text-white/90 font-light tracking-wide">
          A 6-Month Student Startup Acceleration Programme
        </p>

        {/* Subline */}
        <p className="mx-auto mb-10 max-w-3xl text-[clamp(0.9rem,2vw,1.1rem)] text-white/80">
          In collaboration with{' '}
          <span className="font-semibold text-[#FFE97F]">RSET IEDC</span> &{' '}
          <span className="font-semibold text-[#FFE97F]">Rajagiri ORBIIT</span>
        </p>

        {/* CTA Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdw0M6NOiE-jg6GmAjozKKg3j16esfsYcYl2NwlNQrphG0eZw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-[#FFD95A] px-8 py-4 text-lg font-semibold text-[#b60a0a] transition-all duration-200 hover:bg-[#FFE47A] shadow-lg group"
        >
          Apply Now
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
