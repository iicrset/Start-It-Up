import { useState } from "react";
import { motion } from "framer-motion";

export default function LaunchpadPromo() {
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [launched, setLaunched] = useState(false);

  const startLaunch = () => {
    setStarted(true);

    let c = 3;
    const interval = setInterval(() => {
      c--;
      setCountdown(c);
      if (c === 0) {
        clearInterval(interval);
        setTimeout(() => setLaunched(true), 300);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex items-center justify-center flex-col text-center">
      {!started && !launched && (
        <div onClick={startLaunch} className="cursor-pointer">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Tap to Launch Your Startup
          </motion.h1>
          <p className="mt-4 text-gray-300">Start It Up Edition II</p>
        </div>
      )}

      {/* Countdown */}
      {started && !launched && (
        <motion.h1
          key={countdown}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold"
        >
          {countdown}
        </motion.h1>
      )}

      {/* Rocket launch */}
      {launched && (
        <motion.img
          src="public/rocket.png"
          className="h-32"
          initial={{ y: 0 }}
          animate={{ y: -900 }}
          transition={{ duration: 1.6, ease: "easeIn" }}
        />
      )}

      {/* Final frame for social share */}
      {launched && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 w-full text-center"
        >
          <h2 className="text-xl md:text-3xl font-semibold">
            Jeslyn is Ready to Launch 🚀
          </h2>
          <p className="text-gray-300 mt-2">Start It Up Edition II</p>
        </motion.div>
      )}
    </div>
  );
}
