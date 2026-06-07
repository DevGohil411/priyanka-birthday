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
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 2 + Math.random() * 2 }}>
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
      animate={{ x: [0, 50, 20, 80, 40], y: [0, -25, 15, -30, 0] }}
      transition={{ duration: 16, delay, repeat: Infinity, ease: "easeInOut" }}>
      <motion.div animate={{ scaleX: [1, -1, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <svg width="32" height="24" viewBox="0 0 60 46">
          <ellipse cx="20" cy="18" rx="18" ry="12" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="18" cy="30" rx="12" ry="8" fill="#f9a8d4" opacity="0.8" />
          <ellipse cx="40" cy="18" rx="18" ry="12" fill="#fce7f3" opacity="0.9" />
          <ellipse cx="42" cy="30" rx="12" ry="8" fill="#f9a8d4" opacity="0.8" />
          <ellipse cx="30" cy="22" rx="3" ry="11" fill="#7c3aed" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ── Tulip ── */
function Tulip({ color = "#f9a8d4", size = 1 }: { color?: string; size?: number }) {
  return (
    <motion.svg width={50 * size} height={70 * size} viewBox="0 0 50 70"
      animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }}>
      <line x1="25" y1="38" x2="25" y2="70" stroke="#4ade80" strokeWidth="2.5" />
      <path d="M10 35 Q15 10 25 8 Q35 10 40 35 Q35 42 25 44 Q15 42 10 35 Z" fill={color} />
      <ellipse cx="25" cy="38" rx="10" ry="4" fill={color} opacity="0.7" />
      <path d="M8 32 Q5 18 15 16 Q12 28 10 35 Z" fill={color} opacity="0.85" />
      <path d="M42 32 Q45 18 35 16 Q38 28 40 35 Z" fill={color} opacity="0.85" />
    </motion.svg>
  );
}

/* ── Purple Flower Illustration ── */
function PurpleFlowerIllustration() {
  return (
    <motion.svg width="70" height="70" viewBox="0 0 80 80"
      animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.ellipse key={i}
          cx={40 + 20 * Math.cos((angle * Math.PI) / 180)} cy={40 + 20 * Math.sin((angle * Math.PI) / 180)}
          rx="14" ry="9" fill={["#c084fc", "#a78bfa", "#8b5cf6", "#c084fc", "#a78bfa", "#8b5cf6"][i]}
          opacity="0.9" transform={`rotate(${angle} ${40 + 20 * Math.cos((angle * Math.PI) / 180)} ${40 + 20 * Math.sin((angle * Math.PI) / 180)})`}
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      <circle cx="40" cy="40" r="12" fill="#fef3c7" />
      <circle cx="40" cy="40" r="6" fill="#f59e0b" />
      {/* Leaves */}
      <path d="M40 55 Q30 65 25 72" stroke="#4ade80" strokeWidth="2.5" fill="none" />
      <ellipse cx="27" cy="65" rx="8" ry="4" fill="#86efac" opacity="0.8" transform="rotate(-30 27 65)" />
      <path d="M40 55 Q50 65 55 72" stroke="#4ade80" strokeWidth="2.5" fill="none" />
      <ellipse cx="53" cy="65" rx="8" ry="4" fill="#4ade80" opacity="0.8" transform="rotate(30 53 65)" />
    </motion.svg>
  );
}

/* ── Lantern Illustration ── */
function LanternIllustration() {
  return (
    <motion.svg width="60" height="80" viewBox="0 0 60 90"
      animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      {/* String */}
      <line x1="30" y1="0" x2="30" y2="10" stroke="#d4a017" strokeWidth="2" />
      {/* Glow */}
      <motion.circle cx="30" cy="50" r="25" fill="#fde68a" opacity="0.2"
        animate={{ r: [25, 30, 25], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* Body */}
      <rect x="14" y="10" width="32" height="55" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
      {/* Ribs */}
      {[20, 30, 40, 50].map((y, i) => (
        <line key={i} x1="14" y1={y} x2="46" y2={y} stroke="#f59e0b" strokeWidth="0.8" opacity="0.5" />
      ))}
      {/* Flame */}
      <motion.path d="M26 45 Q25 35 30 30 Q35 35 34 45 Z" fill="#fb923c"
        animate={{ d: ["M26 45 Q25 35 30 30 Q35 35 34 45 Z", "M27 45 Q24 33 30 28 Q36 33 33 45 Z", "M26 45 Q25 35 30 30 Q35 35 34 45 Z"] }}
        transition={{ duration: 0.8, repeat: Infinity }} />
      <motion.path d="M28 44 Q27 37 30 33 Q33 37 32 44 Z" fill="#fde68a"
        animate={{ d: ["M28 44 Q27 37 30 33 Q33 37 32 44 Z", "M28 44 Q26 35 30 31 Q34 35 32 44 Z", "M28 44 Q27 37 30 33 Q33 37 32 44 Z"] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }} />
      {/* Base */}
      <rect x="18" y="65" width="24" height="6" rx="3" fill="#f59e0b" />
      <rect x="22" y="71" width="16" height="10" rx="3" fill="#d4a017" />
    </motion.svg>
  );
}

/* ── Prayer Hands Illustration ── */
function PrayerHandsIllustration() {
  return (
    <motion.svg width="65" height="75" viewBox="0 0 70 80"
      animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
      {/* Glow */}
      <motion.circle cx="35" cy="45" r="30" fill="#fde68a" opacity="0.15"
        animate={{ r: [28, 35, 28], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 2.5, repeat: Infinity }} />
      {/* Left hand */}
      <path d="M25 70 Q18 55 20 40 Q21 35 25 33 Q28 32 30 35 L32 50 L35 50 L33 30 Q33 26 36 25 Q39 25 40 29 L41 50" stroke="#f9a8d4" strokeWidth="2" fill="none" />
      <rect x="18" y="33" width="14" height="30" rx="7" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.5" />
      {/* Right hand */}
      <rect x="38" y="33" width="14" height="30" rx="7" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.5" />
      {/* Fingers together */}
      <path d="M25 33 Q35 28 45 33" stroke="#f9a8d4" strokeWidth="1.5" fill="none" />
      {/* Sparkle above */}
      <motion.path d="M35 20 L36 15 L37 20 L42 21 L37 22 L36 27 L35 22 L30 21 Z" fill="#fde68a"
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* Small stars */}
      <motion.circle cx="25" cy="20" r="2" fill="#fde68a"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
      <motion.circle cx="46" cy="22" r="1.5" fill="#c084fc"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} />
    </motion.svg>
  );
}

const cards = [
  {
    id: "soul",
    title: "A Soul Like You",
    verse: '"Some souls make the world softer simply by existing.',
    verse2: "May your kindness always return to you.\"",
    icon: <PurpleFlowerIllustration />,
    gradient: "linear-gradient(135deg, #fdf4ff, #f3e8ff)",
    border: "rgba(192,132,252,0.3)",
    accent: "#7c3aed",
    glow: "rgba(192,132,252,0.2)",
    flowers: ["🌸", "🌷"],
  },
  {
    id: "light",
    title: "Divine Light",
    verse: '"May this year bring clarity, warmth, and peace.',
    verse2: 'May every step ahead be filled with light."',
    icon: <LanternIllustration />,
    gradient: "linear-gradient(135deg, #fffbeb, #fef9c3)",
    border: "rgba(251,191,36,0.3)",
    accent: "#d97706",
    glow: "rgba(251,191,36,0.2)",
    flowers: ["✨", "🌼"],
  },
  {
    id: "prayer",
    title: "A Prayer For You",
    verse: '"May happiness find you often.',
    verse2: 'May love and blessings always stay near."',
    icon: <PrayerHandsIllustration />,
    gradient: "linear-gradient(135deg, #fff0f9, #fce7f3)",
    border: "rgba(249,168,212,0.3)",
    accent: "#db2777",
    glow: "rgba(249,168,212,0.25)",
    flowers: ["💖", "🌺"],
  },
];

const petals = [
  { x: 5, delay: 0, color: "#fecdd3" }, { x: 15, delay: 1.5, color: "#c084fc" },
  { x: 28, delay: 0.7, color: "#f9a8d4" }, { x: 42, delay: 2.3, color: "#fde68a" },
  { x: 58, delay: 1.1, color: "#fecdd3" }, { x: 72, delay: 3.1, color: "#c084fc" },
  { x: 85, delay: 0.4, color: "#f9a8d4" }, { x: 95, delay: 2.0, color: "#fde68a" },
  { x: 20, delay: 4.5, color: "#c084fc" }, { x: 65, delay: 3.8, color: "#fecdd3" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ThoughtsScreen() {
  const setScreen = useAppStore((s) => s.setScreen);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-y-auto overflow-x-hidden" style={{ overflowY: "auto" }}>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 30% 20%, #fce7f3 0%, #ede9fe 40%, #fff0f5 70%, #fdf2ff 100%)",
      }} />

      {/* Falling petals */}
      {petals.map((p, i) => <FallingPetal key={i} x={p.x} delay={p.delay} color={p.color} size={11 + (i % 3) * 3} />)}

      {/* Sparkles */}
      {[{ x: 8, y: 12 }, { x: 92, y: 15 }, { x: 5, y: 60 }, { x: 95, y: 55 }, { x: 50, y: 8 }, { x: 30, y: 90 }, { x: 75, y: 85 }].map((s, i) =>
        <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.6} />
      )}

      {/* Butterflies */}
      <Butterfly startX={2} startY={25} delay={1} />
      <Butterfly startX={75} startY={55} delay={5} />

      {/* Corner tulips */}
      <div className="fixed top-0 left-0 pointer-events-none flex gap-1 p-2" style={{ zIndex: 3 }}>
        <Tulip color="#f9a8d4" size={0.85} /><Tulip color="#c084fc" size={0.75} /><Tulip color="#fb7185" size={0.8} />
      </div>
      <div className="fixed top-0 right-0 pointer-events-none flex gap-1 p-2" style={{ zIndex: 3, transform: "scaleX(-1)" }}>
        <Tulip color="#fde68a" size={0.85} /><Tulip color="#f9a8d4" size={0.75} /><Tulip color="#c084fc" size={0.8} />
      </div>
      <div className="fixed bottom-0 left-0 pointer-events-none flex gap-1 p-2 items-end" style={{ zIndex: 3, transform: "scaleY(-1)" }}>
        <Tulip color="#fb7185" size={1} /><Tulip color="#f9a8d4" size={0.9} /><Tulip color="#c084fc" size={0.95} />
      </div>
      <div className="fixed bottom-0 right-0 pointer-events-none flex gap-1 p-2 items-end" style={{ zIndex: 3, transform: "scale(-1,-1)" }}>
        <Tulip color="#c084fc" size={1} /><Tulip color="#fb7185" size={0.9} /><Tulip color="#f9a8d4" size={0.95} />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center py-16 px-4">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <motion.div className="flex justify-center gap-2 mb-3">
            {["🌸", "💫", "🌷", "💫", "🌸"].map((e, i) => (
              <motion.span key={i} className="text-xl md:text-2xl"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
                {e}
              </motion.span>
            ))}
          </motion.div>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-2"
            style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Thoughts For Your Soul
          </h2>
          <p className="font-lato text-gray-500 text-sm md:text-base">Words that bloom from the heart 🌷</p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-2"
          variants={containerVariants} initial="hidden" animate="visible">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03, boxShadow: `0 20px 60px ${card.glow}` }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: card.gradient,
                border: `1.5px solid ${card.border}`,
                boxShadow: `0 8px 30px ${card.glow}`,
              }}>
              {/* Card corner flowers */}
              <div className="absolute top-2 right-2 text-sm opacity-60 flex gap-0.5">
                {card.flowers.map((f, i) => <span key={i}>{f}</span>)}
              </div>
              <div className="absolute bottom-2 left-2 text-sm opacity-60 flex gap-0.5">
                {card.flowers.map((f, i) => <span key={i}>{f}</span>)}
              </div>

              {/* Content - Left icon, right text layout on md+ */}
              <div className="flex flex-col md:flex-row items-center gap-4 p-6">
                {/* Left: Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
                  {card.icon}
                </div>

                {/* Right: Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-playfair font-bold text-lg mb-3" style={{ color: card.accent }}>
                    {card.title}
                  </h3>
                  <p className="font-caveat text-gray-700 text-base leading-relaxed">
                    {card.verse}<br />{card.verse2}
                  </p>
                </div>
              </div>

              {/* Hover petal effect */}
              <motion.div className="absolute inset-0 pointer-events-none opacity-0"
                whileHover={{ opacity: 1 }}
                style={{ background: `radial-gradient(circle at center, ${card.glow}, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Continue button */}
        <motion.button
          onClick={() => setScreen("balloons")}
          className="mt-12 px-10 py-4 text-white font-semibold rounded-full font-lato text-base"
          style={{
            background: "linear-gradient(135deg, #c084fc, #ec4899, #f9a8d4)",
            boxShadow: "0 10px 35px rgba(236,72,153,0.3)",
            border: "1.5px solid rgba(255,255,255,0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.06, boxShadow: "0 15px 45px rgba(236,72,153,0.45)" }}
          whileTap={{ scale: 0.97 }}>
          Continue the Journey ✨
        </motion.button>
      </div>
    </div>
  );
}
