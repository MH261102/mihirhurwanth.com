import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MotionSection({ children, delay = 0 }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, delay }}
      className="mb-10"
    >
      {children}
    </motion.section>
  );
}
