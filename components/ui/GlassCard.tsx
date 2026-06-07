"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function GlassCard({ children, ...props }: GlassCardProps) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-xl"
      {...props}
    >
      {children}
    </motion.div>
  );
}
