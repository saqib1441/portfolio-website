"use client";

// Imports
import { motion } from "framer-motion";

// Hooks
import ScrollProgress from "@/hooks/ScrollProgress";

// Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = ScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      {/* Completion Bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 translate-all duration-100"
      ></span>
    </>
  );
};

export default Template;
