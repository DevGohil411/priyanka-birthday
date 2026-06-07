"use client";

import { useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

/* ── Falling Petal ── */
function FallingPetal({ delay = 0, x = 50, color = "#f9a8d4", size = 12, duration = 8 }: {
  delay?: number; x?: number; color?: string; size?: number; duration?: number
}) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: "-30px", zIndex: 1 }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: "110vh", opacity: [0, 0.9, 0.9, 0], rotate: [0, 45, 90, 180, 270], x: [0, 30, -20, 40, -10] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}>
      <svg width={size} height={size} viewBox="0 0 20 20">
        <ellipse cx="10" cy="10" rx="6" ry="10" fill={color} opacity="0.8" transform="rotate(30 10 10)" />
      </svg>
    </motion.div>
  );
}

/* ── Sparkle ── */
function Sparkle({ x = 50, y = 50, delay = 0 }: { x?: number; y?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 180] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: Math.random() * 3 + 1 }}>
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="#fde68a" />
      </svg>
    </motion.div>
  );
}

/* ── Butterfly ── */
function Butterfly({ startX = 10, startY = 30, delay = 0 }: { startX?: number; startY?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${startX}%`, top: `${startY}%`, zIndex: 2 }}
      animate={{ x: [0, 80, 40, 120, 60], y: [0, -40, 20, -30, 10] }}
      transition={{ duration: 12, delay, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 0.6, repeat: Infinity }}>
        <svg width="36" height="28" viewBox="0 0 60 45">
          <motion.ellipse cx="20" cy="18" rx="18" ry="12" fill="#f9a8d4" opacity="0.85"
            animate={{ rotate: [0, 20, 0] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ transformOrigin: "30px 22px" }} />
          <motion.ellipse cx="18" cy="30" rx="14" ry="8" fill="#c084fc" opacity="0.75"
            animate={{ rotate: [0, 15, 0] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} style={{ transformOrigin: "30px 22px" }} />
          <motion.ellipse cx="40" cy="18" rx="18" ry="12" fill="#f9a8d4" opacity="0.85"
            animate={{ rotate: [0, -20, 0] }} transition={{ duration: 0.4, repeat: Infinity }} style={{ transformOrigin: "30px 22px" }} />
          <motion.ellipse cx="42" cy="30" rx="14" ry="8" fill="#c084fc" opacity="0.75"
            animate={{ rotate: [0, -15, 0] }} transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }} style={{ transformOrigin: "30px 22px" }} />
          <ellipse cx="30" cy="22" rx="3" ry="10" fill="#7c3aed" />
          <line x1="28" y1="12" x2="22" y2="4" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="22" cy="4" r="2" fill="#ec4899" />
          <line x1="32" y1="12" x2="38" y2="4" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="38" cy="4" r="2" fill="#ec4899" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Animated Flower ── */
function AnimatedFlower({ x, y, color, size = 40, delay = 0 }: { x: string; y: string; color: string; size?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y }}
      animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}>
      <svg width={size} height={size} viewBox="0 0 50 50">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.ellipse key={i}
            cx={25 + 14 * Math.cos((angle * Math.PI) / 180)} cy={25 + 14 * Math.sin((angle * Math.PI) / 180)}
            rx="11" ry="7" fill={color} opacity="0.88"
            transform={`rotate(${angle} ${25 + 14 * Math.cos((angle * Math.PI) / 180)} ${25 + 14 * Math.sin((angle * Math.PI) / 180)})`}
            animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
        ))}
        <circle cx="25" cy="25" r="9" fill="#fef3c7" />
        <circle cx="25" cy="25" r="5" fill="#f59e0b" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/* ── Tulip ── */
function Tulip({ x, y, color, size = 55, delay = 0 }: { x: string; y: string; color: string; size?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y }}
      animate={{ rotate: [-4, 4, -4] }} transition={{ duration: 3 + delay, repeat: Infinity }}>
      <svg width={size} height={size * 1.3} viewBox="0 0 50 70">
        <line x1="25" y1="38" x2="25" y2="70" stroke="#4ade80" strokeWidth="2.5" />
        <path d="M10 35 Q15 10 25 8 Q35 10 40 35 Q35 42 25 44 Q15 42 10 35 Z" fill={color} />
        <ellipse cx="25" cy="38" rx="10" ry="4" fill={color} opacity="0.7" />
        <path d="M8 32 Q5 18 15 16 Q12 28 10 35 Z" fill={color} opacity="0.85" />
        <path d="M42 32 Q45 18 35 16 Q38 28 40 35 Z" fill={color} opacity="0.85" />
      </svg>
    </motion.div>
  );
}

const petals = [
  { x: 5, delay: 0, color: "#fecdd3", size: 14 }, { x: 15, delay: 1.5, color: "#c084fc", size: 10 },
  { x: 25, delay: 0.5, color: "#f9a8d4", size: 16 }, { x: 35, delay: 2.5, color: "#fecdd3", size: 12 },
  { x: 45, delay: 1, color: "#c084fc", size: 14 }, { x: 55, delay: 3, color: "#f9a8d4", size: 10 },
  { x: 65, delay: 0.8, color: "#fde68a", size: 12 }, { x: 75, delay: 2, color: "#fecdd3", size: 15 },
  { x: 85, delay: 1.3, color: "#f9a8d4", size: 13 }, { x: 92, delay: 3.5, color: "#c084fc", size: 11 },
];

const KEYS = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["", "0", "⌫"],
];

export default function PasswordScreen() {
  const [digits, setDigits] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const controls = useAnimation();
  const setScreen = useAppStore((s) => s.setScreen);

  const handleKey = useCallback(async (key: string) => {
    if (key === "") return;
    if (key === "⌫") {
      setDigits((d) => d.slice(0, -1));
      return;
    }
    const newDigits = [...digits, key];
    setDigits(newDigits);

    if (newDigits.length === 4) {
      const password = process.env.NEXT_PUBLIC_PASSWORD || "0906";
      const entered = newDigits.join("");
      if (entered === password) {
        setShowOverlay(true);
        setTimeout(() => setScreen("hero"), 800);
      } else {
        setError(true);
        await controls.start({ x: [0, -14, 14, -14, 14, -7, 7, 0], transition: { duration: 0.5 } });
        setTimeout(() => { setError(false); setDigits([]); }, 1500);
      }
    }
  }, [digits, controls, setScreen]);

  const displayDots = Array.from({ length: 4 }, (_, i) => ({
    filled: i < digits.length,
  }));

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 30% 30%, #fce7f3, #ede9fe 40%, #fff0f5 70%, #fdf2ff)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 12s ease infinite",
      }} />

      {/* Falling petals */}
      {petals.map((p, i) => <FallingPetal key={i} x={p.x} delay={p.delay} color={p.color} size={p.size} duration={7 + i * 0.3} />)}

      {/* Sparkles */}
      {[{ x: 20, y: 20 }, { x: 80, y: 15 }, { x: 40, y: 70 }, { x: 70, y: 60 }, { x: 10, y: 45 }, { x: 90, y: 50 }, { x: 55, y: 30 }, { x: 30, y: 85 }].map((s, i) =>
        <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.4} />
      )}

      {/* Butterflies */}
      <Butterfly startX={5} startY={20} delay={0} />
      <Butterfly startX={60} startY={60} delay={3} />

      {/* Animated flowers - corners and sides */}
      <AnimatedFlower x="2%" y="8%" color="#f9a8d4" size={45} delay={0} />
      <AnimatedFlower x="88%" y="6%" color="#c084fc" size={40} delay={1} />
      <AnimatedFlower x="3%" y="65%" color="#fb7185" size={42} delay={2} />
      <AnimatedFlower x="90%" y="60%" color="#fde68a" size={38} delay={1.5} />
      <Tulip x="10%" y="5%" color="#f9a8d4" size={50} delay={0} />
      <Tulip x="75%" y="4%" color="#c084fc" size={48} delay={0.5} />
      <Tulip x="5%" y="40%" color="#fb7185" size={44} delay={1} />
      <Tulip x="88%" y="35%" color="#fde68a" size={44} delay={1.5} />
      <AnimatedFlower x="40%" y="3%" color="#86efac" size={36} delay={3} />
      <AnimatedFlower x="60%" y="85%" color="#f9a8d4" size={40} delay={2.5} />

      {/* Center card wrapper with live flowers around it */}
      <div className="relative z-10 max-w-sm w-[90%]">

        {/* Live mini flowers floating around the card */}
        {[
          { deg: 0,   color: "#f9a8d4", sz: 28 }, { deg: 30,  color: "#c084fc", sz: 24 },
          { deg: 60,  color: "#fb7185", sz: 26 }, { deg: 90,  color: "#fde68a", sz: 22 },
          { deg: 120, color: "#86efac", sz: 25 }, { deg: 150, color: "#a5b4fc", sz: 23 },
          { deg: 180, color: "#f9a8d4", sz: 27 }, { deg: 210, color: "#c084fc", sz: 24 },
          { deg: 240, color: "#fb7185", sz: 22 }, { deg: 270, color: "#fde68a", sz: 26 },
          { deg: 300, color: "#86efac", sz: 24 }, { deg: 330, color: "#a5b4fc", sz: 25 },
        ].map((f, idx) => {
          const rad = (f.deg * Math.PI) / 180;
          const rx = 52 + Math.cos(rad) * 52; // % from left of wrapper
          const ry = 50 + Math.sin(rad) * 56; // % from top of wrapper
          return (
            <motion.div key={idx} className="absolute pointer-events-none"
              style={{ left: `${rx}%`, top: `${ry}%`, transform: "translate(-50%,-50%)", zIndex: 5 }}
              animate={{ y: [0, -8, 0], rotate: [-8, 8, -8], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5 + idx * 0.22, repeat: Infinity, ease: "easeInOut", delay: idx * 0.18 }}>
              <svg width={f.sz} height={f.sz} viewBox="0 0 50 50">
                {[0, 72, 144, 216, 288].map((a, pi) => (
                  <ellipse key={pi}
                    cx={25 + 14 * Math.cos((a * Math.PI) / 180)} cy={25 + 14 * Math.sin((a * Math.PI) / 180)}
                    rx="11" ry="7" fill={f.color} opacity="0.9"
                    transform={`rotate(${a} ${25 + 14 * Math.cos((a * Math.PI) / 180)} ${25 + 14 * Math.sin((a * Math.PI) / 180)})`} />
                ))}
                <circle cx="25" cy="25" r="8" fill="#fef3c7" />
                <circle cx="25" cy="25" r="4" fill="#f59e0b" opacity="0.7" />
              </svg>
            </motion.div>
          );
        })}

        {/* Mini tulips at card corners */}
        {[
          { x: "-14px", y: "-18px", color: "#f9a8d4", flip: false },
          { x: "calc(100% - 26px)", y: "-18px", color: "#c084fc", flip: true },
          { x: "-14px", y: "calc(100% - 10px)", color: "#fb7185", flip: false },
          { x: "calc(100% - 26px)", y: "calc(100% - 10px)", color: "#fde68a", flip: true },
        ].map((t, ti) => (
          <motion.div key={ti} className="absolute pointer-events-none" style={{ left: t.x, top: t.y, zIndex: 5, transform: `scaleX(${t.flip ? -1 : 1})` }}
            animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 2.5 + ti * 0.4, repeat: Infinity }}>
            <svg width="32" height="44" viewBox="0 0 50 70">
              <line x1="25" y1="38" x2="25" y2="70" stroke="#4ade80" strokeWidth="2.5" />
              <path d="M10 35 Q15 10 25 8 Q35 10 40 35 Q35 42 25 44 Q15 42 10 35 Z" fill={t.color} />
              <ellipse cx="25" cy="38" rx="10" ry="4" fill={t.color} opacity="0.7" />
            </svg>
          </motion.div>
        ))}

      <motion.div
        animate={controls}
        className="relative"
        style={{
          backdropFilter: "blur(22px)",
          background: "rgba(255,255,255,0.42)",
          border: "2px solid rgba(249,168,212,0.35)",
          borderRadius: "28px",
          padding: "2rem 1.5rem",
          boxShadow: "0 25px 70px rgba(244,114,182,0.2), 0 0 0 1px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}>

        {/* Flower icon */}
        <motion.div className="flex justify-center mb-3" animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
          <svg width="56" height="56" viewBox="0 0 80 80">
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.ellipse key={i}
                cx={40 + 20 * Math.cos((angle * Math.PI) / 180)} cy={40 + 20 * Math.sin((angle * Math.PI) / 180)}
                rx="14" ry="9" fill={["#f9a8d4", "#c084fc", "#fb7185", "#fde68a", "#86efac", "#a5b4fc"][i]}
                opacity="0.9" transform={`rotate(${angle} ${40 + 20 * Math.cos((angle * Math.PI) / 180)} ${40 + 20 * Math.sin((angle * Math.PI) / 180)})`}
                animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
            ))}
            <circle cx="40" cy="40" r="12" fill="#fef3c7" />
            <circle cx="40" cy="40" r="6" fill="#f59e0b" />
          </svg>
        </motion.div>

        {/* Title */}
        <h1 className="font-playfair text-xl text-gray-800 text-center mb-1 leading-snug">
          Guess the Passcode 🌸
        </h1>
        <p className="text-center text-gray-500 text-xs mb-5 font-lato">
          Someone special has a surprise for you, Priyanka ✨
        </p>

        {/* PIN dots display */}
        <motion.div className="flex justify-center gap-4 mb-5">
          {displayDots.map((dot, i) => (
            <motion.div key={i}
              className="rounded-full border-2"
              style={{
                width: "18px", height: "18px",
                background: dot.filled ? "linear-gradient(135deg, #ec4899, #c084fc)" : "transparent",
                borderColor: dot.filled ? "#ec4899" : "rgba(244,114,182,0.4)",
                boxShadow: dot.filled ? "0 0 10px rgba(236,72,153,0.4)" : "none",
              }}
              animate={{ scale: dot.filled ? [1, 1.3, 1] : 1 }}
              transition={{ duration: 0.2 }} />
          ))}
        </motion.div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center text-pink-600 text-xs mb-2 font-lato">
              Oopsie... try again 🌷
            </motion.p>
          )}
        </AnimatePresence>

        {/* Number Keypad */}
        <div className="grid grid-cols-3 gap-3">
          {KEYS.flat().map((key, i) => (
            key === "" ? (
              <div key={i} />
            ) : (
              <motion.button
                key={i}
                onClick={() => handleKey(key)}
                className="flex items-center justify-center rounded-2xl font-playfair font-bold text-xl"
                style={{
                  height: "56px",
                  background: key === "⌫"
                    ? "rgba(244,114,182,0.12)"
                    : "rgba(255,255,255,0.55)",
                  border: "1.5px solid rgba(244,114,182,0.25)",
                  color: key === "⌫" ? "#be185d" : "#5b21b6",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 2px 8px rgba(244,114,182,0.08)",
                  fontSize: key === "⌫" ? "1.1rem" : "1.4rem",
                }}
                whileHover={{ scale: 1.08, background: "rgba(249,168,212,0.25)", boxShadow: "0 4px 15px rgba(244,114,182,0.2)" }}
                whileTap={{ scale: 0.88 }}
                disabled={digits.length >= 4 && key !== "⌫"}>
                {key}
              </motion.button>
            )
          ))}
        </div>
      </motion.div>
      </div>

      {/* Unlock overlay */}
      {showOverlay && (
        <motion.div className="fixed inset-0 z-50"
          style={{ background: "radial-gradient(circle, #fce7f3, #ede9fe)" }}
          initial={{ scale: 0, opacity: 1, borderRadius: "100%" }}
          animate={{ scale: 30, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }} />
      )}

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
