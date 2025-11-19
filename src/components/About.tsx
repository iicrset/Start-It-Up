import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-4 py-20 bg-white text-gray-800 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#b60a0a] mb-6">
            About Start-It-Up Edition II: Kickstart
          </h2>
          <div className="h-1 w-24 bg-[#FFD95A] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700 font-sans">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="font-bold text-[#b60a0a]">Start-It-Up Edition II: Kickstart</span> is a six-month, structured startup acceleration program designed to guide students from idea to a market-ready startup. The program is built to ensure that any student—regardless of background, resources, or experience—can take their first step into entrepreneurship with clarity, confidence, and the right support system.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conducted by the <span className="font-semibold">Institution’s Innovation Council (IIC)</span> of Rajagiri School of Engineering & Technology (RSET), the program blends online and offline sessions, hands-on activities, and personalised mentorship to help student founders build real, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#fff9e6] p-6 rounded-xl border-l-4 border-[#FFD95A] shadow-sm"
          >
            <p className="font-medium text-gray-800">
              Participants can join as teams of 1 to 6 members, and the registration fee is kept at just <span className="font-bold text-[#b60a0a]">₹10 per person</span>, staying true to our goal of making entrepreneurship accessible to everyone.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sessions will be delivered by industry experts, startup founders, product leaders, angel investors, and mentors from across the ecosystem. Students will also gain access to networks, insights, and real-world exposure that help them transform ideas into validated ventures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#b60a0a]">
              Start-It-Up Kickstart isn’t just a program—
            </h3>
            <p className="text-xl md:text-2xl mt-2 font-medium text-gray-600">
              It’s a launchpad for students who want to build, innovate, and create impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
