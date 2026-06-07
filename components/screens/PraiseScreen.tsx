"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

/* ── Falling Petal ── */
function FallingPetal({ delay = 0, x = 50, color = "#f9a8d4", size = 12 }: { delay?: number; x?: number; color?: string; size?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: "-30px", zIndex: 1 }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: "110vh", opacity: [0, 0.8, 0.8, 0], rotate: [0, 90, 180, 270, 360], x: [0, 20, -15, 30, -5] }}
      transition={{ duration: 10 + delay * 0.3, delay, repeat: Infinity, ease: "linear" }}>
      <svg width={size} height={size * 1.5} viewBox="0 0 20 30">
        <ellipse cx="10" cy="15" rx="7" ry="13" fill={color} opacity="0.8" />
      </svg>
    </motion.div>
  );
}

/* ── Sparkle ── */
function Sparkle({ x = 50, y = 50, delay = 0 }: { x?: number; y?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 45] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 2.5 }}>
      <svg width="14" height="14" viewBox="0 0 24 24">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="#fde68a" />
      </svg>
    </motion.div>
  );
}

/* ── Butterfly ── */
function Butterfly({ startX = 10, startY = 30, delay = 0 }: { startX?: number; startY?: number; delay?: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${startX}%`, top: `${startY}%`, zIndex: 5 }}
      animate={{ x: [0, 60, 25, 90, 45], y: [0, -30, 18, -25, 8] }}
      transition={{ duration: 15, delay, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <svg width="30" height="22" viewBox="0 0 60 46">
          <ellipse cx="20" cy="18" rx="17" ry="11" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="18" cy="31" rx="11" ry="7" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="40" cy="18" rx="17" ry="11" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="42" cy="31" rx="11" ry="7" fill="#f9a8d4" opacity="0.85" />
          <ellipse cx="30" cy="22" rx="3" ry="10" fill="#7c3aed" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Floating Flower ── */
function FloatingFlower({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}>
      <svg width="38" height="38" viewBox="0 0 50 50">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse key={i} cx={25 + 14 * Math.cos((angle * Math.PI) / 180)} cy={25 + 14 * Math.sin((angle * Math.PI) / 180)}
            rx="10" ry="7" fill={color} opacity="0.85"
            transform={`rotate(${angle} ${25 + 14 * Math.cos((angle * Math.PI) / 180)} ${25 + 14 * Math.sin((angle * Math.PI) / 180)})`} />
        ))}
        <circle cx="25" cy="25" r="8" fill="#fef3c7" />
        <circle cx="25" cy="25" r="4" fill="#f59e0b" opacity="0.7" />
      </svg>
    </motion.div>
  );
}

/* ── Tulip Corner ── */
function TulipCorner({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  const isLeft = corner === "tl" || corner === "bl";
  const isTop = corner === "tl" || corner === "tr";
  const colors = ["#f9a8d4", "#c084fc", "#fb7185", "#fde68a"];
  return (
    <div className="absolute pointer-events-none" style={{
      top: isTop ? 0 : undefined, bottom: !isTop ? 0 : undefined,
      left: isLeft ? 0 : undefined, right: !isLeft ? 0 : undefined,
      transform: `scaleX(${isLeft ? 1 : -1}) scaleY(${isTop ? 1 : -1})`,
      zIndex: 3, display: "flex", gap: "4px", padding: "8px", alignItems: isTop ? "flex-end" : "flex-start",
    }}>
      {colors.map((c, i) => (
        <motion.svg key={i} width={45 - i * 3} height={60 - i * 4} viewBox="0 0 50 70"
          animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}>
          <line x1="25" y1="38" x2="25" y2="70" stroke="#4ade80" strokeWidth="2.5" />
          <path d="M10 35 Q15 10 25 8 Q35 10 40 35 Q35 42 25 44 Q15 42 10 35 Z" fill={c} />
          <ellipse cx="25" cy="38" rx="10" ry="4" fill={c} opacity="0.7" />
        </motion.svg>
      ))}
    </div>
  );
}

const petals = [
  { x: 8, delay: 0, color: "#fecdd3" }, { x: 18, delay: 1.4, color: "#c084fc" },
  { x: 30, delay: 0.6, color: "#f9a8d4" }, { x: 45, delay: 2.2, color: "#fde68a" },
  { x: 60, delay: 1.0, color: "#fecdd3" }, { x: 73, delay: 3.0, color: "#c084fc" },
  { x: 85, delay: 0.3, color: "#f9a8d4" }, { x: 94, delay: 1.8, color: "#fde68a" },
];

const lines = [
  { text: "Priyanka,", delay: 0.3, emoji: "🌸", size: "text-3xl md:text-4xl", italic: false, bold: true },
  { text: "kuch log duniya mein aise aate hain jo sirf apni muskaan se hi sab kuch badal dete hain —", delay: 0.6, emoji: "", size: "text-base md:text-lg", italic: true, bold: false },
  { text: "tum unhi mein se ek ho. 🌷", delay: 0.9, emoji: "", size: "text-base md:text-lg", italic: true, bold: false },
  { text: "Teri hansna, tera dil, tera pyaar — sab kuch itna real aur itna warm hai", delay: 1.2, emoji: "", size: "text-base md:text-lg", italic: false, bold: false },
  { text: "ki jo bhi teri zindagi mein aata hai, khush hoke jaata hai. 💖", delay: 1.5, emoji: "", size: "text-base md:text-lg", italic: false, bold: false },
  { text: "Tu sirf ek insaan nahi hai —", delay: 1.8, emoji: "✨", size: "text-lg md:text-xl", italic: true, bold: false },
  { text: "tu ek feeling hai.", delay: 2.1, emoji: "✨", size: "text-lg md:text-xl", italic: true, bold: false },
  { text: "Aaj tere birthday par bus itna kehna hai —", delay: 2.4, emoji: "🌺", size: "text-base md:text-lg", italic: false, bold: false },
  { text: "God ne jab tujhe banaya hoga, toh zaroor muskuraya hoga. 🙏💫", delay: 2.7, emoji: "", size: "text-base md:text-lg", italic: false, bold: false },
];

export default function PraiseScreen() {
  const setScreen = useAppStore((s) => s.setScreen);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-y-auto overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 40% 30%, #fce7f3 0%, #ede9fe 45%, #fff0f5 75%, #fdf2ff 100%)",
      }} />

      {/* Petals */}
      {petals.map((p, i) => <FallingPetal key={i} x={p.x} delay={p.delay} color={p.color} size={11 + (i % 4) * 2} />)}

      {/* Sparkles */}
      {[{ x: 10, y: 15 }, { x: 88, y: 12 }, { x: 5, y: 55 }, { x: 93, y: 50 }, { x: 50, y: 8 }, { x: 25, y: 80 }, { x: 75, y: 78 }, { x: 40, y: 92 }].map((s, i) =>
        <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.5} />
      )}

      {/* Butterflies */}
      <Butterfly startX={3} startY={22} delay={1} />
      <Butterfly startX={72} startY={60} delay={6} />

      {/* Floating flowers */}
      <FloatingFlower x={2} y={38} color="#f9a8d4" delay={0} />
      <FloatingFlower x={90} y={35} color="#c084fc" delay={1.5} />
      <FloatingFlower x={6} y={70} color="#fb7185" delay={3} />
      <FloatingFlower x={88} y={68} color="#fde68a" delay={2} />

      {/* Corner tulips */}
      <TulipCorner corner="tl" />
      <TulipCorner corner="tr" />
      <TulipCorner corner="bl" />
      <TulipCorner corner="br" />

      {/* Main content */}
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center py-20 px-6 md:px-12">

        {/* Top emoji row */}
        <motion.div className="flex gap-3 mb-8"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {["🌷", "🌸", "💕", "🌸", "🌷"].map((e, i) => (
            <motion.span key={i} className="text-2xl md:text-3xl"
              animate={{ y: [0, -8, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
              {e}
            </motion.span>
          ))}
        </motion.div>

        {/* Praise card */}
        <motion.div
          className="max-w-2xl w-full relative"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(20px)",
            border: "1.5px solid rgba(249,168,212,0.4)",
            borderRadius: "32px",
            padding: "2.5rem 2rem",
            boxShadow: "0 20px 60px rgba(236,72,153,0.12), 0 0 0 1px rgba(255,255,255,0.5)",
          }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}>

          {/* Corner flowers on card */}
          <div className="absolute top-3 left-3 text-xl opacity-50">🌸</div>
          <div className="absolute top-3 right-3 text-xl opacity-50">🌸</div>
          <div className="absolute bottom-3 left-3 text-xl opacity-50">🌷</div>
          <div className="absolute bottom-3 right-3 text-xl opacity-50">🌷</div>

          {/* Quote mark */}
          <motion.div
            className="text-7xl font-playfair text-pink-300 leading-none mb-2 text-left"
            style={{ lineHeight: 0.8, opacity: 0.4 }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.4 }}>
            &ldquo;
          </motion.div>

          {/* Lines of text */}
          <div className="space-y-3 text-center">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                className={`${line.size} ${line.italic ? "italic" : ""} ${line.bold ? "font-bold font-playfair" : "font-lato"} leading-relaxed`}
                style={{
                  color: line.bold ? "#7c3aed" : "#4b2563",
                  textShadow: "0 1px 3px rgba(255,255,255,0.8)",
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: line.delay, duration: 0.5 }}>
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Closing quote mark */}
          <motion.div
            className="text-7xl font-playfair text-pink-300 leading-none mt-2 text-right"
            style={{ lineHeight: 0.8, opacity: 0.4 }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 2.8 }}>
            &rdquo;
          </motion.div>
        </motion.div>

        {/* Continue button */}
        <motion.button
          onClick={() => setScreen("thoughts")}
          className="mt-10 px-10 py-4 text-white font-semibold rounded-full font-lato text-base"
          style={{
            background: "linear-gradient(135deg, #f9a8d4, #ec4899, #c084fc)",
            boxShadow: "0 10px 35px rgba(236,72,153,0.35)",
            border: "1.5px solid rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
          whileHover={{ scale: 1.07, boxShadow: "0 15px 45px rgba(236,72,153,0.5)" }}
          whileTap={{ scale: 0.97 }}>
          Continue 🌸
        </motion.button>
      </div>
    </div>
  );
}
