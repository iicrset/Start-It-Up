import React from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../Data/faq.js";
import { motion, AnimatePresence } from "framer-motion";

// Individual FAQ item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 py-4 bg-white/70 backdrop-blur-sm rounded-xl px-4 shadow-sm hover:shadow-md transition-shadow duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      layout
    >
      {/* Question Header */}
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 hover:text-[#b60a0a] transition-colors duration-300">
          {question}
        </h3>

        {/* Smooth Chevron rotation */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      {/* Animated Answer Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mt-3 text-gray-600 leading-relaxed bg-white rounded-lg shadow-inner px-4 py-3"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// FAQ Section
export function FAQ() {
  const [showAll, setShowAll] = React.useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <motion.section
      id="faq"
      className="px-4 py-20 bg-gradient-to-b from-white via-[#fff9e6] to-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl relative z-10">
        {/* Title (simplified solid color instead of gradient) */}
        <motion.h2
          className="mb-12 text-center text-3xl md:text-4xl font-extrabold text-[#b60a0a] drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ Items (staggered animation) */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {displayedFaqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

        {/* Show More / Less Button */}
        {faqs.length > 5 && (
    <motion.button
        onClick={() => setShowAll(!showAll)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.05,
          y: -3,
          boxShadow: "0px 8px 20px rgba(255, 217, 90, 0.4)",
        }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
          bounce: 0.3,
        }}
        viewport={{ once: true }}
        className="mt-12 w-full rounded-full bg-[#FFD95A] py-3 font-semibold text-[#b60a0a] shadow-md hover:bg-[#FFE47A] active:scale-[0.99] active:shadow-sm transition-all duration-300"
      >
        <motion.span
          key={showAll ? "less" : "more"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {showAll
            ? "Show Less"
            : `Show More FAQs (${faqs.length - 5} more)`}
        </motion.span>
      </motion.button>
    )}
      </div>
    </motion.section>
  );
}
