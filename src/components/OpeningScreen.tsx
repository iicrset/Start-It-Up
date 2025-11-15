import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OpeningScreen({ onFinish }: any) {
  const [text, setText] = useState("");
  const fullText = "What if your dream could take flight?";
  const [step, setStep] = useState(0);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setStep(1), 600);
      }
    }, 50);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-white z-[9999] overflow-hidden">
      {/* Step 0 → Type text */}
      {step === 0 && (
        <motion.h1
          className="text-2xl md:text-4xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {text}
        </motion.h1>
      )}

      {/* Step 1 → Show second line */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Ready to build it?
          </h1>

          {/* Rocket appears */}
          <motion.img
            src="/rocket.png"
            alt="rocket"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mx-auto h-28 md:h-40"
            onAnimationComplete={() => setTimeout(() => setStep(2), 800)}
          />
        </motion.div>
      )}

      {/* Step 2 → Rocket takes off */}
      {step === 2 && (
        <motion.img
          src="/rocket.png"
          alt="rocket"
          className="absolute bottom-10 h-32 md:h-44"
          initial={{ y: 0, scale: 1 }}
          animate={{ y: -800, scale: 0.7 }}
          transition={{ duration: 1.4, ease: "easeIn" }}
          onAnimationComplete={() => {
            setTimeout(() => onFinish(), 400);
          }}
        />
      )}
    </div>
  );
}
