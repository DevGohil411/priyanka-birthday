"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

const wishes = [
  {
    title: "A Soul Like Yours",
    text: "Priyanka, some souls are born to heal the world just by existing. Your presence is a gentle reminder that kindness still lives among us. May your heart always find the peace it gives to others.",
    icon: "🕊️",
  },
  {
    title: "Divine Light",
    text: "On this sacred day, I pray that the universe wraps you in its warmest embrace. You are not just a year older, but a year wiser, kinder, and more beautiful in spirit. May your path always be lit by inner wisdom.",
    icon: "🪔",
  },
  {
    title: "Blessed Connection",
    text: "There is a reason our souls crossed paths. You teach us patience without words, love without conditions, and faith without doubt. May this birthday deepen your connection with everything sacred and true.",
    icon: "🙏",
  },
  {
    title: "Eternal Gratitude",
    text: "The world whispered your name into existence with love. Every smile you share is a prayer answered. May you always feel the gratitude the universe holds for a soul as pure as yours, Priyanka.",
    icon: "✨",
  },
  {
    title: "Inner Peace",
    text: "In the chaos of this world, you are a sanctuary of calm. May this new year bring you closer to your true self — the one that radiates love, accepts flaws, and finds beauty in every moment.",
    icon: "🌸",
  },
  {
    title: "A Prayer For You",
    text: "May every sunrise bring you hope. May every sunset bring you peace. May every star in the night sky remind you that you are loved beyond measure. Happy Birthday, our dearest Priyanka.",
    icon: "⭐",
  },
];

export default function GalleryScreen() {
  const setScreen = useAppStore((s) => s.setScreen);

  return (
    <div
      className="fixed inset-0 w-screen h-dvh overflow-hidden overflow-y-auto scrollbar-hide"
      style={{ background: "linear-gradient(135deg, #fffbf5, #fff0e6, #fce7f3, #ede9fe)" }}
    >
      {/* Floating pandas */}
      <motion.div className="fixed top-10 left-6 z-0" animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <svg width="50" height="45" viewBox="0 0 100 90">
          <ellipse cx="20" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="80" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="50" cy="45" rx="35" ry="30" fill="white" stroke="#ddd" strokeWidth="1" />
          <ellipse cx="35" cy="40" rx="10" ry="12" fill="#222" />
          <ellipse cx="65" cy="40" rx="10" ry="12" fill="#222" />
          <circle cx="35" cy="40" r="3" fill="white" />
          <circle cx="65" cy="40" r="3" fill="white" />
          <ellipse cx="50" cy="52" rx="4" ry="3" fill="#222" />
          <path d="M42 58 Q50 64 58 58" stroke="#222" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>
      <motion.div className="fixed bottom-16 right-8 z-0" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <svg width="45" height="40" viewBox="0 0 100 90">
          <ellipse cx="20" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="80" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="50" cy="45" rx="35" ry="30" fill="white" stroke="#ddd" strokeWidth="1" />
          <ellipse cx="35" cy="40" rx="10" ry="12" fill="#222" />
          <ellipse cx="65" cy="40" rx="10" ry="12" fill="#222" />
          <circle cx="35" cy="40" r="3" fill="white" />
          <circle cx="65" cy="40" r="3" fill="white" />
          <ellipse cx="50" cy="52" rx="4" ry="3" fill="#222" />
        </svg>
      </motion.div>

      <div className="relative z-10 px-6 py-12 pb-24 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="flex justify-center gap-3 text-4xl mb-3">
            <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>🐼</motion.span>
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>🌸</motion.span>
            <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity }}>🐼</motion.span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-3xl md:text-4xl text-gray-800 text-center mb-3"
        >
          Thoughts For Your Soul, Priyanka
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-600 mb-10 font-lato"
        >
          Some words carry the weight of prayers...
        </motion.p>

        <div className="space-y-6">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className="backdrop-blur-xl bg-white/25 border border-white/40 rounded-2xl shadow-xl p-6 md:p-8 hover:bg-white/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{wish.icon}</span>
                  <h3 className="font-playfair text-xl text-gray-800">{wish.title}</h3>
                </div>
                <p className="text-gray-700 font-lato leading-relaxed text-base">{wish.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setScreen("letter")}
            className="px-8 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 font-semibold shadow-lg hover:bg-white/80 transition-colors flex items-center gap-2"
          >
            Open Your Letter
          </button>
        </motion.div>
      </div>
    </div>
  );
}
