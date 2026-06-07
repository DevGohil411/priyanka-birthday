"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  staggerDelay?: number;
  className?: string;
  charVariants?: Variants;
}

const defaultCharVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedText({
  text,
  staggerDelay = 0.05,
  className = "",
  charVariants = defaultCharVariants,
}: AnimatedTextProps) {
  const chars = text.split("");

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: staggerDelay }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
