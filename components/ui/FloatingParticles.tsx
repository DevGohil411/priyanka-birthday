"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  symbols?: string[];
  colors?: string[];
}

export default function FloatingParticles({
  count = 50,
  symbols = ["✦", "♥", "✿", "✨", "❀"],
  colors = ["#fce7f3", "#c084fc", "#f9a8d4", "#fdba74", "#86efac"],
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      fontSize: 10 + Math.random() * 14,
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 5,
      xOffset: -30 + Math.random() * 60,
    }));
  }, [count, symbols, colors]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.fontSize}px`,
            color: p.color,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}
