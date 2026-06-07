"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { useAppStore } from "@/store/useAppStore";

const text = "Happy Birthday Priyanka 🎂💖";
const colors = ["#fce7f3", "#c084fc", "#f9a8d4", "#fdba74", "#86efac", "#a5f3fc"];

const balloonMessages = [
  "You are special for your family 💕",
  "Your smile lights up every room ✨",
  "You are deeply loved 🌸",
  "Your kindness is a blessing 🙏",
  "You make everyone proud 🎀",
  "You are the heart of our home 🏠💖",
  "Your laughter is pure magic 🎵",
  "You are one in a million 🌟",
];

const balloons = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  color: colors[i % colors.length],
  left: 5 + Math.random() * 85,
  delay: i * 0.3,
  duration: 5 + Math.random() * 2,
  message: balloonMessages[i],
}));

export default function RevealScreen() {
  const [showContinue, setShowContinue] = useState(false);
  const [visibleBalloons, setVisibleBalloons] = useState(0);
  const setScreen = useAppStore((s) => s.setScreen);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
    const timer = setTimeout(() => setShowContinue(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBalloons((prev) => {
        if (prev >= balloons.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center"
      initial={{ background: "#1a0a2e" }}
      animate={{ background: "linear-gradient(135deg, #fce7f3, #ede9fe, #fff0e6, #e0f2fe)" }}
      transition={{ duration: 2 }}
    >
      {init && (
        <Particles
          id="confetti"
          options={{
            fullScreen: { zIndex: 1 },
            particles: {
              number: { value: 150 },
              shape: { type: ["square", "circle", "star"] },
              color: { value: colors },
              size: { value: { min: 3, max: 8 } },
              opacity: { value: 1 },
              move: {
                enable: true,
                gravity: { enable: true, acceleration: 2 },
                speed: { min: 5, max: 15 },
                outModes: { default: "destroy" as const },
                angle: { value: 120, offset: 0 },
              },
              rotate: { enable: true, value: { min: 0, max: 360 }, animation: { enable: true, speed: 10 } },
            },
            emitters: {
              position: { x: 50, y: 50 },
              size: { width: 0, height: 0 },
              rate: { quantity: 150, delay: 0 },
              life: { duration: 0.5, count: 1 },
            },
          }}
        />
      )}

      {/* Floating cute elements */}
      <motion.div className="absolute top-10 left-10 text-3xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>🐼</motion.div>
      <motion.div className="absolute top-16 right-12 text-3xl" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌸</motion.div>
      <motion.div className="absolute bottom-16 left-12 text-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🎀</motion.div>
      <motion.div className="absolute bottom-10 right-10 text-3xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>💖</motion.div>

      {/* Balloons with messages */}
      {balloons.map((b, i) => (
        visibleBalloons > i && (
          <motion.div
            key={b.id}
            className="absolute bottom-0 z-10 flex flex-col items-center"
            style={{ left: `${b.left}%` }}
            initial={{ y: "100vh", x: 0, opacity: 0 }}
            animate={{ y: -100, x: [-15, 15, -10, 10, 0], opacity: 1 }}
            transition={{
              y: { duration: b.duration, delay: b.delay, ease: "easeOut" },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 },
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg mb-2 max-w-[180px] text-center">
              <p className="text-xs text-gray-700 font-lato leading-tight">{b.message}</p>
            </div>
            <svg width="50" height="70" viewBox="0 0 50 70">
              <path d="M25 0C11 0 0 11 0 25c0 10 6 19 15 23l-2 5 12-3 12 3-2-5c9-4 15-13 15-23 0-14-11-25-25-25z" fill={b.color} />
              <line x1="25" y1="48" x2="25" y2="70" stroke="#888" strokeWidth="1.5" />
            </svg>
          </motion.div>
        )
      ))}

      {/* Main Text */}
      <motion.h1
        className="relative z-10 font-playfair text-3xl md:text-5xl text-gray-800 text-center px-4"
        style={{ textShadow: "0 0 30px rgba(255,200,200,0.6)" }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 80, opacity: 0, scale: 0.3 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        className="relative z-10 mt-6 flex gap-3 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.span animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🐼</motion.span>
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🌸</motion.span>
        <motion.span animate={{ y: [0, -8, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎀</motion.span>
        <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>💖</motion.span>
        <motion.span animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
      </motion.div>

      {showContinue && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 mt-12 px-8 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 font-semibold shadow-lg hover:bg-white/80 transition-colors"
          onClick={() => setScreen("story")}
        >
          Continue → 🌸
        </motion.button>
      )}
    </motion.div>
  );
}
