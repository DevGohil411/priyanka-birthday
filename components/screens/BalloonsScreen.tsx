"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

/* ── Falling Petal ── */
function FallingPetal({ delay = 0, x = 50, color = "#f9a8d4" }: { delay?: number; x?: number; color?: string }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: "-20px", zIndex: 1 }}
      animate={{ y: "105vh", opacity: [0, 0.8, 0.8, 0], rotate: [0, 180, 360], x: [0, 20, -10, 25] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "linear" }}>
      <div style={{ width: "10px", height: "16px", background: color, borderRadius: "50% 50% 50% 0", opacity: 0.75, transform: "rotate(30deg)" }} />
    </motion.div>
  );
}

/* ── Sparkle ── */
function Sparkle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0], rotate: [0, 45] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 2 + (delay % 2) }}>
      <svg width="14" height="14" viewBox="0 0 24 24">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="#fde68a" />
      </svg>
    </motion.div>
  );
}

/* ── Animated Flower ── */
function AnimatedFlower({ x, y, color, size = 44, delay = 0 }: { x: string; y: string; color: string; size?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y, zIndex: 2 }}
      animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}>
      <svg width={size} height={size} viewBox="0 0 50 50">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.ellipse key={i}
            cx={25 + 14 * Math.cos((angle * Math.PI) / 180)} cy={25 + 14 * Math.sin((angle * Math.PI) / 180)}
            rx="11" ry="7" fill={color} opacity="0.9"
            transform={`rotate(${angle} ${25 + 14 * Math.cos((angle * Math.PI) / 180)} ${25 + 14 * Math.sin((angle * Math.PI) / 180)})`}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
        ))}
        <circle cx="25" cy="25" r="9" fill="#fef3c7" />
        <circle cx="25" cy="25" r="5" fill="#f59e0b" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/* ── Tulip ── */
function Tulip({ x, y, color, size = 52, delay = 0 }: { x: string; y: string; color: string; size?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: x, top: y, zIndex: 2 }}
      animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3.5 + delay, repeat: Infinity }}>
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

/* ── Butterfly ── */
function Butterfly({ startX = 10, startY = 30, delay = 0 }: { startX?: number; startY?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${startX}%`, top: `${startY}%`, zIndex: 3 }}
      animate={{ x: [0, 70, 30, 110, 55], y: [0, -35, 22, -28, 8] }}
      transition={{ duration: 16, delay, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <svg width="34" height="26" viewBox="0 0 60 46">
          <ellipse cx="20" cy="18" rx="17" ry="11" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="18" cy="31" rx="12" ry="8" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="40" cy="18" rx="17" ry="11" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="42" cy="31" rx="12" ry="8" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="30" cy="22" rx="3" ry="10" fill="#7c3aed" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Pop Burst (particle explosion) ── */
function PopBurst({ visible }: { visible: boolean }) {
  if (!visible) return null;
  const pieces = [
    { dx: -55, dy: -65, color: "#f9a8d4", r: 8 }, { dx: 55, dy: -65, color: "#c084fc", r: 7 },
    { dx: -75, dy: -15, color: "#fde68a", r: 9 }, { dx: 75, dy: -15, color: "#86efac", r: 8 },
    { dx: -45, dy: 55, color: "#fb7185", r: 7 }, { dx: 45, dy: 55, color: "#a5b4fc", r: 8 },
    { dx: 0, dy: -85, color: "#fcd34d", r: 9 }, { dx: -25, dy: 70, color: "#fecdd3", r: 6 },
    { dx: 25, dy: 70, color: "#c084fc", r: 7 }, { dx: -85, dy: 20, color: "#f9a8d4", r: 8 },
    { dx: 85, dy: 20, color: "#fde68a", r: 7 }, { dx: 0, dy: 80, color: "#fb7185", r: 9 },
    { dx: -60, dy: 45, color: "#a5b4fc", r: 6 }, { dx: 60, dy: 45, color: "#fcd34d", r: 7 },
    { dx: 30, dy: -75, color: "#86efac", r: 6 }, { dx: -30, dy: -75, color: "#f9a8d4", r: 8 },
  ];
  return (
    <div className="absolute pointer-events-none" style={{ left: "50%", top: "40%", zIndex: 30 }}>
      {pieces.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full"
          style={{ width: p.r, height: p.r, background: p.color, marginLeft: -p.r / 2, marginTop: -p.r / 2 }}
          initial={{ x: 0, y: 0, scale: 1.5, opacity: 1 }}
          animate={{ x: p.dx, y: p.dy, scale: 0, opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.01 }} />
      ))}
    </div>
  );
}

/* ── Beautiful Balloon SVG (large) ── */
function BalloonSVG({ color, highlight, knotColor }: { color: string; highlight: string; knotColor: string }) {
  return (
    <svg width="100" height="150" viewBox="0 0 90 160">
      {/* Glow under balloon */}
      <ellipse cx="45" cy="118" rx="20" ry="5" fill={color} opacity="0.15" />
      {/* Knot */}
      <ellipse cx="45" cy="110" rx="5" ry="4" fill={knotColor} />
      {/* String with wobble */}
      <motion.path
        d="M45 114 Q40 124 44 134 Q48 144 44 154"
        stroke={knotColor} strokeWidth="1.5" fill="none" opacity="0.7"
        animate={{ d: [
          "M45 114 Q40 124 44 134 Q48 144 44 154",
          "M45 114 Q42 122 46 132 Q50 142 46 154",
          "M45 114 Q40 124 44 134 Q48 144 44 154",
        ]}}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Balloon body */}
      <motion.ellipse cx="45" cy="57" rx="36" ry="48" fill={color}
        animate={{ scaleY: [1, 1.04, 1], scaleX: [1, 0.97, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      {/* Shine highlight 1 */}
      <ellipse cx="30" cy="36" rx="14" ry="18" fill={highlight} opacity="0.45" />
      {/* Shine highlight 2 (bright dot) */}
      <ellipse cx="26" cy="30" rx="5" ry="7" fill="white" opacity="0.3" />
      {/* Rim at bottom of balloon */}
      <ellipse cx="45" cy="105" rx="10" ry="5" fill={knotColor} opacity="0.25" />
    </svg>
  );
}

const balloonData = [
  { word: "You", color: "#fbb6ce", highlight: "#fed7e2", knotColor: "#db2777", textColor: "#7c3aed", bg: "linear-gradient(135deg,#fce7f3,#fdf2ff)" },
  { word: "are", color: "#c084fc", highlight: "#e9d5ff", knotColor: "#7c3aed", textColor: "#be185d", bg: "linear-gradient(135deg,#f3e8ff,#ede9fe)" },
  { word: "special", color: "#f87171", highlight: "#fecaca", knotColor: "#be123c", textColor: "#7c3aed", bg: "linear-gradient(135deg,#fef2f2,#fff1f2)" },
  { word: "for", color: "#fcd34d", highlight: "#fef9c3", knotColor: "#d97706", textColor: "#92400e", bg: "linear-gradient(135deg,#fffbeb,#fef9c3)" },
  { word: "your", color: "#86efac", highlight: "#d1fae5", knotColor: "#15803d", textColor: "#7c3aed", bg: "linear-gradient(135deg,#f0fdf4,#dcfce7)" },
  { word: "family", color: "#a5b4fc", highlight: "#e0e7ff", knotColor: "#4338ca", textColor: "#be185d", bg: "linear-gradient(135deg,#eef2ff,#e0e7ff)" },
];

const petals = [
  { x: 5, delay: 0, color: "#fecdd3" }, { x: 18, delay: 1.2, color: "#c084fc" },
  { x: 32, delay: 0.5, color: "#f9a8d4" }, { x: 50, delay: 2.0, color: "#fde68a" },
  { x: 68, delay: 0.9, color: "#fecdd3" }, { x: 82, delay: 2.8, color: "#c084fc" },
  { x: 95, delay: 1.5, color: "#f9a8d4" }, { x: 12, delay: 3.5, color: "#fde68a" },
];

export default function BalloonsScreen() {
  const setScreen = useAppStore((s) => s.setScreen);
  const [popped, setPopped] = useState<boolean[]>([false, false, false, false, false, false]);
  const [bursting, setBursting] = useState<boolean[]>([false, false, false, false, false, false]);
  const allPopped = popped.every(Boolean);

  const handlePop = (index: number) => {
    if (popped[index]) return;

    // Show burst
    setBursting((prev) => { const n = [...prev]; n[index] = true; return n; });

    // After burst show word
    setTimeout(() => {
      setPopped((prev) => { const n = [...prev]; n[index] = true; return n; });
      setBursting((prev) => { const n = [...prev]; n[index] = false; return n; });
    }, 350);
  };

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 35% 25%, #fce7f3 0%, #ede9fe 40%, #fff0f5 70%, #fdf2ff 100%)",
      }} />

      {/* Falling petals */}
      {petals.map((p, i) => <FallingPetal key={i} x={p.x} delay={p.delay} color={p.color} />)}

      {/* Sparkles */}
      {[{ x: 8, y: 10 }, { x: 90, y: 12 }, { x: 5, y: 55 }, { x: 93, y: 50 }, { x: 48, y: 6 }, { x: 20, y: 85 }, { x: 78, y: 82 }, { x: 38, y: 92 }].map((s, i) =>
        <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.6} />
      )}

      {/* Animated flowers — top corners */}
      <AnimatedFlower x="0%" y="2%" color="#f9a8d4" size={50} delay={0} />
      <AnimatedFlower x="85%" y="1%" color="#c084fc" size={46} delay={1} />
      <Tulip x="6%" y="0%" color="#f9a8d4" size={55} delay={0} />
      <Tulip x="76%" y="0%" color="#c084fc" size={52} delay={0.5} />

      {/* Animated flowers — sides */}
      <AnimatedFlower x="0%" y="45%" color="#fb7185" size={44} delay={2} />
      <AnimatedFlower x="88%" y="42%" color="#fde68a" size={42} delay={1.5} />
      <Tulip x="2%" y="28%" color="#fb7185" size={48} delay={1} />
      <Tulip x="90%" y="25%" color="#fde68a" size={46} delay={1.5} />

      {/* Bottom corners */}
      <AnimatedFlower x="2%" y="75%" color="#86efac" size={44} delay={3} />
      <AnimatedFlower x="86%" y="73%" color="#a5b4fc" size={42} delay={2.5} />
      <Tulip x="14%" y="78%" color="#86efac" size={50} delay={2} />
      <Tulip x="73%" y="77%" color="#a5b4fc" size={48} delay={2.5} />

      {/* Butterflies */}
      <Butterfly startX={2} startY={18} delay={1} />
      <Butterfly startX={72} startY={55} delay={7} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full">

        {/* Header */}
        <motion.div className="text-center mb-6"
          initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex justify-center gap-2 mb-2">
            {["🎈", "🎀", "✨", "🎀", "🎈"].map((e, i) => (
              <motion.span key={i} className="text-2xl md:text-3xl"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
                {e}
              </motion.span>
            ))}
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-1"
            style={{ background: "linear-gradient(135deg, #ec4899, #c084fc)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Pop the Balloons! 🎊
          </h2>
          <p className="font-caveat text-gray-500 text-lg">Tap each balloon to reveal the message 💖</p>
        </motion.div>

        {/* Balloons row */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl">
          {balloonData.map((b, i) => (
            <div key={i} className="relative flex flex-col items-center" style={{ width: "110px" }}>

              <AnimatePresence mode="wait">
                {!popped[i] ? (
                  /* BALLOON */
                  <motion.div
                    key="balloon"
                    className="cursor-pointer select-none relative"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: bursting[i] ? 0 : 1, y: bursting[i] ? -20 : [0, -16, 0], scale: bursting[i] ? 1.4 : 1 }}
                    transition={bursting[i]
                      ? { duration: 0.2 }
                      : { y: { duration: 2.8 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }, opacity: { duration: 0.4, delay: i * 0.15 }, scale: { duration: 0.2 } }}
                    whileHover={{ scale: 1.18, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.75 }}
                    exit={{ scale: 0, opacity: 0, transition: { duration: 0.15 } }}
                    onClick={() => handlePop(i)}
                    style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.13))" }}>
                    <BalloonSVG color={b.color} highlight={b.highlight} knotColor={b.knotColor} />
                    {/* Pop burst */}
                    <PopBurst visible={bursting[i]} />
                  </motion.div>
                ) : (
                  /* WORD REVEALED */
                  <motion.div
                    key="word"
                    initial={{ scale: 0, rotate: -20, opacity: 0, y: 20 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="flex flex-col items-center"
                    style={{ width: "100px", height: "150px", justifyContent: "center" }}>
                    <motion.div
                      className="flex items-center justify-center rounded-3xl font-playfair font-bold"
                      style={{
                        width: "90px", height: "110px",
                        background: b.bg,
                        border: `2.5px solid ${b.color}`,
                        boxShadow: `0 0 25px ${b.color}55, 0 6px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)`,
                        color: b.textColor,
                        fontSize: b.word.length > 5 ? "1rem" : b.word.length > 3 ? "1.2rem" : "1.6rem",
                        textAlign: "center",
                      }}
                      animate={{ y: [0, -6, 0], boxShadow: [`0 0 25px ${b.color}55`, `0 0 40px ${b.color}88`, `0 0 25px ${b.color}55`] }}
                      transition={{ duration: 2.5, repeat: Infinity }}>
                      {b.word}
                    </motion.div>
                    <motion.div className="flex gap-1 mt-1">
                      {["✨", "🌸"].map((e, ei) => (
                        <motion.span key={ei} className="text-base"
                          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: ei * 0.3 }}>
                          {e}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Revealed message + Continue */}
        <AnimatePresence>
          {allPopped && (
            <motion.div className="mt-6 text-center"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}>
              <motion.div className="flex justify-center gap-1 mb-3">
                {["🎉", "🌸", "💖", "🌸", "🎉"].map((e, i) => (
                  <motion.span key={i} className="text-2xl"
                    animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
                    {e}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p className="font-playfair text-2xl md:text-3xl font-bold mb-5"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #c084fc, #f9a8d4)",
                  backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                You are special for your family 💖
              </motion.p>
              <motion.button onClick={() => setScreen("tour")}
                className="px-10 py-4 text-white font-semibold rounded-full font-lato text-base"
                style={{
                  background: "linear-gradient(135deg, #f9a8d4, #ec4899, #c084fc)",
                  boxShadow: "0 10px 35px rgba(236,72,153,0.4)",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.97 }}>
                Continue the Journey ✨
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress dots */}
        {!allPopped && (
          <motion.div className="flex gap-2 mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {balloonData.map((b, i) => (
              <motion.div key={i} className="rounded-full"
                style={{ width: 10, height: 10, background: popped[i] ? b.color : "#e5e7eb", boxShadow: popped[i] ? `0 0 8px ${b.color}` : "none" }}
                animate={{ scale: popped[i] ? [1, 1.5, 1] : 1 }}
                transition={{ duration: 0.3 }} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
