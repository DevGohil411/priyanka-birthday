"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NightSky from "@/components/ui/NightSky";
import { useAppStore } from "@/store/useAppStore";

export default function IntroScreen() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const setScreen = useAppStore((s) => s.setScreen);
  const hasAdvanced = useRef(false);

  const fullLine1 = "Hey Priyanka... ✨";
  const fullLine2 = "A little magic is waiting for you... 🐼💕";

  useEffect(() => {
    const startTimeout = setTimeout(() => setShowLine1(true), 1000);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!showLine1) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setLine1(fullLine1.slice(0, i));
      if (i >= fullLine1.length) {
        clearInterval(interval);
        setTimeout(() => setShowLine2(true), 1500);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [showLine1]);

  useEffect(() => {
    if (!showLine2) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setLine2(fullLine2.slice(0, i));
      if (i >= fullLine2.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (!hasAdvanced.current) {
            hasAdvanced.current = true;
            setScreen("giftbox");
          }
        }, 2000);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [showLine2, setScreen]);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden flex items-center justify-center" style={{ background: "#0a0a1a" }}>
      <NightSky starCount={180} />

      <motion.div
        className="absolute top-10 right-10 md:top-16 md:right-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div
          className="rounded-full bg-yellow-100"
          style={{
            width: "80px",
            height: "80px",
            filter: "drop-shadow(0 0 40px rgba(255,250,220,0.6))",
          }}
        />
      </motion.div>

      {/* Floating cute elements */}
      <motion.div className="absolute top-20 left-10 text-3xl" animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>🐼</motion.div>
      <motion.div className="absolute bottom-20 right-10 text-3xl" animate={{ y: [0, -12, 0], rotate: [0, -10, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>🌸</motion.div>
      <motion.div className="absolute top-1/3 right-20 text-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.div>
      <motion.div className="absolute bottom-1/3 left-20 text-2xl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>🎀</motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          className="text-6xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          🐼💕
        </motion.div>
        <div className="font-playfair text-white text-2xl md:text-[2.5rem] leading-relaxed min-h-[120px]">
          {showLine1 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
              {line1}
              <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse" />
            </motion.p>
          )}
          {showLine2 && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {line2}
              <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse" />
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
