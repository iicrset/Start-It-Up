import { sponsors } from '../Data/sponsors.js';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Sponsers() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Combine all partner categories
  const allPartners = [
    ...sponsors.associate,
    ...sponsors.community,
  ];

  return (
    <motion.section
      className="relative overflow-hidden px-4 py-24 
      bg-gradient-to-b from-[#7A0000] via-[#8B0000] to-[#B30000] text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        
        {/* Golden Heading */}
        <motion.h2
          className="mb-16 text-4xl md:text-5xl font-extrabold tracking-wide 
          text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFEA80]
          drop-shadow-[0_4px_15px_rgba(255,215,0,0.45)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h2>

        {/* Partner Logos */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {allPartners.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.name} website`}
              className="cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="relative p-6 rounded-xl transition-all duration-300 group"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
              >
                {/* Hover border animation */}
                <div className="absolute inset-0">
                  <div
                    className="absolute -inset-0.5 rounded-xl border-2 border-yellow-400 opacity-0 
                    group-hover:opacity-100 
                    transition-all duration-700
                    [clip-path:polygon(0%_0%,100%_0%,100%_20%,0%_20%)]
                    group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
                  ></div>
                </div>

                {/* Logo Image */}
                <img
                  src={sponsor.image}
                  alt={sponsor.alt}
                  className={`${sponsor.height} transition-opacity duration-300 group-hover:opacity-60`}
                />

                {/* Hover bubble */}
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                    Visit Link
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
}
