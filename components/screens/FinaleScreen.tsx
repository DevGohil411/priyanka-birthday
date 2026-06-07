"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NightSky from "@/components/ui/NightSky";
import { useAppStore } from "@/store/useAppStore";

const lines = [
  "May all your dreams come true, Priyanka ✨",
  "Happy Birthday, our beautiful soul 🎂💖",
  "Thank you for being exactly who you are 🙏",
  "You are loved beyond words 🌸🐼💕",
];

const lanterns = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  left: 5 + i * 12 + Math.random() * 5,
  duration: 8 + Math.random() * 4,
  delay: i * 1.2,
}));

const floatingEmojis = [
  { emoji: "🐼", left: "10%", delay: 0 },
  { emoji: "🌸", left: "25%", delay: 0.5 },
  { emoji: "💖", left: "40%", delay: 1 },
  { emoji: "🎀", left: "55%", delay: 1.5 },
  { emoji: "✨", left: "70%", delay: 2 },
  { emoji: "🌷", left: "85%", delay: 2.5 },
];

export default function FinaleScreen() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showReplay, setShowReplay] = useState(false);
  const [flash, setFlash] = useState(false);
  const setScreen = useAppStore((s) => s.setScreen);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const timers: NodeJS.Timeout[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines((prev) => prev + 1), i * 1800 + 500));
    });
    timers.push(setTimeout(() => setShowReplay(true), lines.length * 1800 + 5000));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleReplay = () => {
    setFlash(true);
    setTimeout(() => setScreen("password"), 600);
  };

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center" style={{ background: "#0a0a1a" }}>
      <NightSky starCount={200} />

      {/* Floating emojis from bottom */}
      {floatingEmojis.map((fe, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 text-3xl z-0"
          style={{ left: fe.left }}
          animate={{ y: [0, "-110vh"], x: [-10, 10, -5, 5, 0], opacity: [0, 1, 1, 0] }}
          transition={{ y: { duration: 10, delay: fe.delay, repeat: Infinity, ease: "linear" }, x: { duration: 4, repeat: Infinity }, opacity: { duration: 10, delay: fe.delay, repeat: Infinity } }}
        >
          {fe.emoji}
        </motion.div>
      ))}

      {/* Lanterns */}
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute bottom-0"
          style={{ left: `${l.left}%` }}
          animate={{ y: [0, "-110vh"], x: [-15, 15, -10, 10, 0] }}
          transition={{ y: { duration: l.duration, delay: l.delay, repeat: Infinity, ease: "linear" }, x: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="relative">
            <div className="w-10 h-14 rounded-lg" style={{ background: "linear-gradient(180deg, #fbbf24, #f59e0b)", boxShadow: "0 0 30px rgba(251,191,36,0.5)" }} />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-4" style={{ background: "linear-gradient(180deg, #d97706, #b45309)", clipPath: "polygon(20% 100%, 80% 100%, 100% 0, 0 0)" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ background: "rgba(255,255,200,0.8)", boxShadow: "0 0 20px rgba(255,255,200,0.9)" }} />
          </div>
        </motion.div>
      ))}

      {/* Clouds */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <motion.div className="absolute bottom-0 left-0 w-64 h-20 bg-white rounded-full blur-2xl" style={{ opacity: 0.15 }} animate={{ x: [-20, 20, -20] }} transition={{ duration: 10, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 left-1/3 w-80 h-24 bg-white rounded-full blur-2xl" style={{ opacity: 0.12 }} animate={{ x: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity }} />
        <motion.div className="absolute bottom-0 right-0 w-72 h-20 bg-white rounded-full blur-2xl" style={{ opacity: 0.15 }} animate={{ x: [-15, 15, -15] }} transition={{ duration: 8, repeat: Infinity }} />
      </div>

      {/* Cute header */}
      <motion.div
        className="relative z-10 text-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <span className="text-5xl">🐼🌸💖</span>
      </motion.div>

      {/* Text */}
      <div className="relative z-10 text-center px-6 space-y-5">
        <AnimatePresence>
          {lines.map((line, i) =>
            i < visibleLines ? (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-playfair text-white text-xl md:text-3xl"
                style={{ textShadow: "0 0 40px rgba(255,200,200,0.5)" }}
              >
                {line}
              </motion.p>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* Cute footer emojis */}
      {visibleLines >= lines.length && (
        <motion.div
          className="relative z-10 mt-8 flex gap-3 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.span animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🐼</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🌸</motion.span>
          <motion.span animate={{ y: [0, -8, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>💖</motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🎀</motion.span>
          <motion.span animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
        </motion.div>
      )}

      {/* Replay button */}
      <AnimatePresence>
        {showReplay && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-16 px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg hover:bg-white/30 transition-colors z-10 flex items-center gap-2"
            onClick={handleReplay}
          >
            ✨ Replay Priyanka&apos;s Journey ✨
          </motion.button>
        )}
      </AnimatePresence>

      {/* Flash overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
