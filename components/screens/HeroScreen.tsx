"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

/* ── Falling Petal ── */
function FallingPetal({ delay = 0, x = 50, color = "#f9a8d4", size = 14 }: { delay?: number; x?: number; color?: string; size?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: "-30px", zIndex: 1 }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: "110vh", opacity: [0, 0.85, 0.85, 0], rotate: [0, 60, 120, 240, 360], x: [0, 25, -15, 35, -5] }}
      transition={{ duration: 9 + delay * 0.5, delay, repeat: Infinity, ease: "linear" }}>
      <svg width={size} height={size * 1.5} viewBox="0 0 20 30">
        <ellipse cx="10" cy="15" rx="7" ry="13" fill={color} opacity="0.85" />
        <path d="M10 2 Q15 10 10 28" stroke="white" strokeWidth="0.5" fill="none" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

/* ── Sparkle ── */
function Sparkle({ x = 50, y = 50, delay = 0, size = 14 }: { x?: number; y?: number; delay?: number; size?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0], rotate: [0, 90] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, repeatDelay: Math.random() * 3 + 1 }}>
      <svg width={size} height={size} viewBox="0 0 24 24">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="#fde68a" />
      </svg>
    </motion.div>
  );
}

/* ── Butterfly ── */
function Butterfly({ startX = 10, startY = 30, delay = 0, scale = 1 }: { startX?: number; startY?: number; delay?: number; scale?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${startX}%`, top: `${startY}%`, zIndex: 5 }}
      animate={{ x: [0, 60, 30, 100, 50], y: [0, -30, 20, -40, 5] }}
      transition={{ duration: 14, delay, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 0.7, repeat: Infinity }}>
        <svg width={40 * scale} height={32 * scale} viewBox="0 0 60 46">
          <ellipse cx="20" cy="18" rx="18" ry="13" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="18" cy="32" rx="13" ry="8" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="40" cy="18" rx="18" ry="13" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="42" cy="32" rx="13" ry="8" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="30" cy="22" rx="3" ry="11" fill="#7c3aed" />
          <circle cx="28" cy="4" r="2" fill="#ec4899" /><circle cx="32" cy="4" r="2" fill="#ec4899" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Arch Flower ── */
function ArchFlower({ angle, radius, color, size }: { angle: number; radius: number; color: string; size: number }) {
  const rad = (angle * Math.PI) / 180;
  const cx = 50 + radius * Math.cos(rad);
  const cy = 50 - radius * Math.sin(rad);
  return (
    <motion.div className="absolute pointer-events-none"
      style={{ left: `${cx}%`, top: `${cy - size * 0.5}%`, transform: "translate(-50%,-50%)" }}
      animate={{ y: [0, -5, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 2.5 + angle * 0.02, repeat: Infinity, ease: "easeInOut" }}>
      <svg width={size} height={size} viewBox="0 0 50 50">
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse key={i}
            cx={25 + 14 * Math.cos((a * Math.PI) / 180)} cy={25 + 14 * Math.sin((a * Math.PI) / 180)}
            rx="11" ry="7" fill={color} opacity="0.88"
            transform={`rotate(${a} ${25 + 14 * Math.cos((a * Math.PI) / 180)} ${25 + 14 * Math.sin((a * Math.PI) / 180)})`} />
        ))}
        <circle cx="25" cy="25" r="8" fill="#fef3c7" />
        <circle cx="25" cy="25" r="4" fill="#f59e0b" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/* ── Tulip ── */
function Tulip({ color = "#f9a8d4", size = 1 }: { color?: string; size?: number }) {
  return (
    <motion.svg width={50 * size} height={70 * size} viewBox="0 0 50 70"
      animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="25" y1="38" x2="25" y2="70" stroke="#4ade80" strokeWidth="2.5" />
      <path d="M10 35 Q15 10 25 8 Q35 10 40 35 Q35 42 25 44 Q15 42 10 35 Z" fill={color} />
      <ellipse cx="25" cy="38" rx="10" ry="4" fill={color} opacity="0.7" />
      <path d="M8 32 Q5 18 15 16 Q12 28 10 35 Z" fill={color} opacity="0.85" />
      <path d="M42 32 Q45 18 35 16 Q38 28 40 35 Z" fill={color} opacity="0.85" />
    </motion.svg>
  );
}

/* ── Cherry Blossom ── */
function CherryBlossom({ size = 1 }: { size?: number }) {
  return (
    <motion.svg width={45 * size} height={45 * size} viewBox="0 0 50 50"
      animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse key={i} cx={25 + 14 * Math.cos((angle * Math.PI) / 180)} cy={25 + 14 * Math.sin((angle * Math.PI) / 180)}
          rx="10" ry="7" fill="#fecdd3" opacity="0.9"
          transform={`rotate(${angle} ${25 + 14 * Math.cos((angle * Math.PI) / 180)} ${25 + 14 * Math.sin((angle * Math.PI) / 180)})`} />
      ))}
      <circle cx="25" cy="25" r="6" fill="#fbbf24" />
    </motion.svg>
  );
}

/* ── Rose ── */
function Rose({ size = 1 }: { size?: number }) {
  return (
    <motion.svg width={50 * size} height={55 * size} viewBox="0 0 50 55"
      animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity }}>
      <line x1="25" y1="38" x2="25" y2="55" stroke="#4ade80" strokeWidth="2" />
      <circle cx="25" cy="28" r="13" fill="#fb7185" />
      <circle cx="25" cy="26" r="10" fill="#f43f5e" />
      <circle cx="25" cy="24" r="7" fill="#e11d48" />
      <circle cx="25" cy="22" r="4" fill="#9f1239" />
      <ellipse cx="14" cy="33" rx="8" ry="5" fill="#fb7185" opacity="0.8" />
      <ellipse cx="36" cy="33" rx="8" ry="5" fill="#fb7185" opacity="0.8" />
    </motion.svg>
  );
}

const archAngles = [10, 30, 50, 70, 90, 110, 130, 150, 170];
const archColors = ["#f9a8d4", "#c084fc", "#fb7185", "#fde68a", "#86efac", "#fde68a", "#fb7185", "#c084fc", "#f9a8d4"];

const petals = [
  { x: 5, delay: 0, color: "#fecdd3" }, { x: 12, delay: 1.2, color: "#c084fc" },
  { x: 22, delay: 0.4, color: "#f9a8d4" }, { x: 33, delay: 2.1, color: "#fde68a" },
  { x: 44, delay: 0.9, color: "#fecdd3" }, { x: 56, delay: 3.2, color: "#c084fc" },
  { x: 67, delay: 1.6, color: "#f9a8d4" }, { x: 78, delay: 0.2, color: "#fecdd3" },
  { x: 88, delay: 2.7, color: "#fde68a" }, { x: 95, delay: 1.1, color: "#f9a8d4" },
  { x: 18, delay: 4.2, color: "#c084fc" }, { x: 50, delay: 3.8, color: "#fecdd3" },
  { x: 72, delay: 5.0, color: "#f9a8d4" }, { x: 38, delay: 4.8, color: "#fde68a" },
];

export default function HeroScreen() {
  const setScreen = useAppStore((s) => s.setScreen);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at top, #fce7f3 0%, #ede9fe 35%, #fff0f5 60%, #fdf2ff 100%)",
      }} />

      {/* Soft glow orbs */}
      <div className="absolute pointer-events-none" style={{ width: "600px", height: "600px", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(249,168,212,0.3), transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ width: "400px", height: "400px", top: "30%", left: "20%", background: "radial-gradient(circle, rgba(192,132,252,0.2), transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute pointer-events-none" style={{ width: "350px", height: "350px", top: "40%", right: "15%", background: "radial-gradient(circle, rgba(251,207,232,0.25), transparent 70%)", borderRadius: "50%" }} />

      {/* Falling petals */}
      {petals.map((p, i) => <FallingPetal key={i} x={p.x} delay={p.delay} color={p.color} size={13 + (i % 4)} />)}

      {/* Sparkles */}
      {[{ x: 15, y: 20 }, { x: 85, y: 18 }, { x: 10, y: 55 }, { x: 90, y: 60 }, { x: 50, y: 10 }, { x: 35, y: 80 }, { x: 70, y: 75 }, { x: 25, y: 40 }, { x: 75, y: 35 }].map((s, i) =>
        <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.5} size={12 + (i % 3) * 4} />
      )}

      {/* Butterflies */}
      <Butterfly startX={3} startY={15} delay={0} scale={1} />
      <Butterfly startX={70} startY={65} delay={4} scale={0.8} />
      <Butterfly startX={80} startY={20} delay={8} scale={1.1} />
      <Butterfly startX={15} startY={70} delay={2} scale={0.9} />

      {/* Corner bouquets */}
      {/* Top left */}
      <div className="absolute top-0 left-0 pointer-events-none flex gap-1 p-3" style={{ zIndex: 3 }}>
        <Rose size={0.8} /><Tulip color="#f9a8d4" size={0.9} /><CherryBlossom size={0.75} /><Tulip color="#c084fc" size={0.85} />
      </div>
      {/* Top right */}
      <div className="absolute top-0 right-0 pointer-events-none flex gap-1 p-3" style={{ zIndex: 3, transform: "scaleX(-1)" }}>
        <Rose size={0.8} /><Tulip color="#fb7185" size={0.9} /><CherryBlossom size={0.75} /><Tulip color="#fde68a" size={0.85} />
      </div>
      {/* Bottom left */}
      <div className="absolute bottom-0 left-0 pointer-events-none flex gap-1 p-3 items-end" style={{ zIndex: 3, transform: "scaleY(-1)" }}>
        <Tulip color="#f9a8d4" size={1.1} /><Tulip color="#c084fc" size={1} /><Tulip color="#fb7185" size={1.05} />
      </div>
      {/* Bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none flex gap-1 p-3 items-end" style={{ zIndex: 3, transform: "scale(-1, -1)" }}>
        <Tulip color="#fde68a" size={1.1} /><Tulip color="#f9a8d4" size={1} /><Tulip color="#c084fc" size={1.05} />
      </div>

      {/* Flower arch */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {archAngles.map((angle, i) => (
          <ArchFlower key={i} angle={angle} radius={28} color={archColors[i]} size={38} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Flower emoji row */}
        <motion.div className="flex gap-3 mb-4"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {["🌸", "🌷", "🌺", "🌷", "🌸"].map((flower, i) => (
            <motion.span key={i} className="text-2xl md:text-3xl"
              animate={{ y: [0, -8, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
              {flower}
            </motion.span>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 100 }}>
          <motion.h1
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2"
            style={{
              background: "linear-gradient(135deg, #ec4899, #c084fc, #f9a8d4, #ec4899)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "shimmer 4s ease infinite",
              filter: "drop-shadow(0 0 30px rgba(236,72,153,0.3))",
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}>
            Happy Birthday
          </motion.h1>
          <motion.h1
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{
              background: "linear-gradient(135deg, #c084fc, #f9a8d4, #ec4899, #c084fc)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "shimmer 4s ease infinite reverse",
              filter: "drop-shadow(0 0 25px rgba(192,132,252,0.3))",
            }}>
            Priyanka ✨
          </motion.h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div className="flex items-center gap-3 my-6"
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(to right, transparent, #ec4899)" }} />
          <motion.span className="text-2xl" animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>🌸</motion.span>
          <motion.span className="text-xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>💖</motion.span>
          <motion.span className="text-2xl" animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>🌸</motion.span>
          <div style={{ width: "80px", height: "2px", background: "linear-gradient(to left, transparent, #c084fc)" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-lato text-gray-600 text-base md:text-lg max-w-sm mb-8 leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          style={{ textShadow: "0 1px 3px rgba(255,255,255,0.8)" }}>
          A little journey made just for you... 🌷
        </motion.p>

        {/* Continue button */}
        <motion.button
          onClick={() => setScreen("thoughts")}
          className="px-10 py-4 text-white font-semibold rounded-full font-lato text-lg"
          style={{
            background: "linear-gradient(135deg, #f9a8d4, #ec4899, #c084fc)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 40px rgba(236,72,153,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
            border: "1.5px solid rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          whileHover={{ scale: 1.07, boxShadow: "0 15px 50px rgba(236,72,153,0.5)" }}
          whileTap={{ scale: 0.96 }}>
          Begin the Journey 🌸
        </motion.button>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
