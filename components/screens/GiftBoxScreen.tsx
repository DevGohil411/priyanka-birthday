"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
  emoji?: string;
}

export default function GiftBoxScreen() {
  const [opened, setOpened] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const setScreen = useAppStore((s) => s.setScreen);
  const hasAdvanced = useRef(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    const emojis = ["🌸", "💖", "✨", "🎀", "🐼", "🌷", "💕", "🌼"];
    const newSparkles: Sparkle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: -180 + Math.random() * 360,
      y: -250 + Math.random() * 200,
      color: ["#fce7f3", "#c084fc", "#f9a8d4", "#fdba74", "#86efac"][Math.floor(Math.random() * 5)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setSparkles(newSparkles);

    setTimeout(() => {
      if (!hasAdvanced.current) {
        hasAdvanced.current = true;
        setScreen("reveal");
      }
    }, 2200);
  };

  return (
    <div
      className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #ede9fe, #fce7f3, #fff0e6)",
      }}
    >
      {/* Floating flowers */}
      <motion.div className="absolute top-10 left-10 text-4xl" animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }} transition={{ duration: 5, repeat: Infinity }}>🌸</motion.div>
      <motion.div className="absolute top-20 right-16 text-3xl" animate={{ y: [0, -12, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌷</motion.div>
      <motion.div className="absolute bottom-20 left-16 text-3xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🌼</motion.div>
      <motion.div className="absolute bottom-10 right-10 text-4xl" animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>🎀</motion.div>
      <motion.div className="absolute top-1/3 left-5 text-2xl" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.div>
      <motion.div className="absolute top-1/2 right-8 text-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>💖</motion.div>

      <motion.div
        className="relative cursor-pointer"
        style={{ perspective: 800 }}
        onClick={handleOpen}
        animate={opened ? {} : { y: [0, -10, 0] }}
        transition={opened ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Box body */}
        <motion.div
          className="relative w-48 h-40 rounded-lg"
          style={{ background: "linear-gradient(135deg, #f9a8d4, #f472b6)" }}
          animate={opened ? { rotate: [-4, 4, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #c084fc, #a855f7)" }}
            animate={opened ? { scaleX: 0 } : {}}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-6 -translate-y-1/2"
            style={{ background: "linear-gradient(90deg, #c084fc, #a855f7)" }}
            animate={opened ? { scaleY: 0 } : {}}
            transition={{ duration: 0.3 }}
          />
          {/* Cute panda face on box */}
          {!opened && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl opacity-30">🐼</div>
            </div>
          )}
        </motion.div>

        {/* Lid */}
        <motion.div
          className="absolute -top-4 left-0 w-48 h-10 rounded-lg"
          style={{ background: "linear-gradient(135deg, #fbcfe8, #f9a8d4)", transformOrigin: "top" }}
          animate={opened ? { rotateX: -130 } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-6 -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, #c084fc, #a855f7)" }}
            animate={opened ? { scaleX: 0 } : {}}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Bow */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center"
          animate={opened ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-6 rounded-full" style={{ background: "linear-gradient(135deg, #c084fc, #a855f7)", transform: "rotate(-30deg)" }} />
          <div className="w-10 h-6 rounded-full -ml-4" style={{ background: "linear-gradient(135deg, #c084fc, #a855f7)", transform: "rotate(30deg)" }} />
        </motion.div>

        {/* Light burst */}
        <AnimatePresence>
          {opened && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: 100, height: 100, background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent)" }}
            />
          )}
        </AnimatePresence>

        {/* Sparkles with emojis */}
        <AnimatePresence>
          {sparkles.map((s) => (
            <motion.div
              key={s.id}
              className="absolute top-1/2 left-1/2"
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{ x: s.x, y: s.y, scale: [0, 1.5, 0], opacity: [1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="text-2xl">{s.emoji}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {!opened && (
        <motion.div className="mt-12 text-center">
          <motion.p
            className="text-gray-700 font-playfair text-lg mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to unwrap your surprise! 🎁
          </motion.p>
          <div className="flex justify-center gap-2 text-xl">
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>🌸</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>💖</motion.span>
            <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>🐼</motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
