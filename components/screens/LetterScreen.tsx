"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";

export default function LetterScreen() {
  const [opened, setOpened] = useState(false);
  const setScreen = useAppStore((s) => s.setScreen);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
  };

  return (
    <div
      className="fixed inset-0 w-screen h-dvh overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #831843, #701a45, #4c1d3d, #312e81)" }}
    >
      {/* Floating cute pandas */}
      <motion.div className="absolute top-8 left-8 z-0" animate={{ y: [0, -10, 0], rotate: [0, 8, -8, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <svg width="55" height="50" viewBox="0 0 100 90">
          <ellipse cx="20" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="80" cy="18" rx="12" ry="10" fill="#222" />
          <ellipse cx="50" cy="45" rx="35" ry="30" fill="white" stroke="#ddd" strokeWidth="1" />
          <ellipse cx="35" cy="40" rx="10" ry="12" fill="#222" />
          <ellipse cx="65" cy="40" rx="10" ry="12" fill="#222" />
          <motion.circle cx="35" cy="40" r="3" fill="white" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }} />
          <motion.circle cx="65" cy="40" r="3" fill="white" animate={{ scaleY: [1, 0.1, 1] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }} />
          <ellipse cx="50" cy="52" rx="4" ry="3" fill="#222" />
          <path d="M42 58 Q50 64 58 58" stroke="#222" strokeWidth="2" fill="none" />
          <ellipse cx="22" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.6" />
          <ellipse cx="78" cy="55" rx="6" ry="4" fill="#ffb6c1" opacity="0.6" />
        </svg>
      </motion.div>

      <motion.div className="absolute bottom-12 right-10 z-0" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>
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

      <motion.div className="absolute top-1/4 right-6 z-0" animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
        <svg width="40" height="35" viewBox="0 0 100 90">
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

      {/* Floating flowers */}
      <motion.div className="absolute top-16 right-1/4 z-0" animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <svg width="35" height="35" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="15" fill="#f9a8d4" opacity="0.8" />
          <circle cx="70" cy="50" r="15" fill="#f9a8d4" opacity="0.8" />
          <circle cx="50" cy="70" r="15" fill="#f9a8d4" opacity="0.8" />
          <circle cx="30" cy="50" r="15" fill="#f9a8d4" opacity="0.8" />
          <circle cx="50" cy="50" r="12" fill="#fef3c7" />
        </svg>
      </motion.div>

      <motion.div className="absolute bottom-1/4 left-10 z-0" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 5, repeat: Infinity }}>
        <svg width="30" height="30" viewBox="0 0 100 100">
          <circle cx="50" cy="30" r="15" fill="#c084fc" opacity="0.8" />
          <circle cx="70" cy="50" r="15" fill="#c084fc" opacity="0.8" />
          <circle cx="50" cy="70" r="15" fill="#c084fc" opacity="0.8" />
          <circle cx="30" cy="50" r="15" fill="#c084fc" opacity="0.8" />
          <circle cx="50" cy="50" r="12" fill="#fef3c7" />
        </svg>
      </motion.div>

      {/* Title above envelope */}
      <motion.div
        className="relative z-10 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-center gap-2 mb-2">
          <motion.span className="text-3xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🌸</motion.span>
          <motion.span className="text-3xl" animate={{ y: [0, -7, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>💌</motion.span>
          <motion.span className="text-3xl" animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🌸</motion.span>
        </div>
        <h2 className="font-playfair text-white text-2xl md:text-3xl" style={{ textShadow: "0 0 20px rgba(255,200,200,0.4)" }}>
          A Letter For Priyanka
        </h2>
        <p className="text-white/60 text-sm mt-1 font-lato">Tap the envelope to open</p>
      </motion.div>

      {/* Envelope Container */}
      <div className="relative z-10" style={{ perspective: 1000 }} onClick={handleOpen}>
        
        {/* Letter (behind envelope, slides up when opened) */}
        <motion.div
          className="absolute left-1/2 bottom-4 w-72 -translate-x-1/2 origin-bottom"
          initial={{ y: 0, scaleY: 0.3, opacity: 0.8 }}
          animate={opened ? { y: -280, scaleY: 1, opacity: 1 } : { y: 0, scaleY: 0.3, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 60, damping: 12, delay: opened ? 0.5 : 0 }}
          style={{ zIndex: 5 }}
        >
          <div
            className="rounded-lg p-6 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #fdf6e3, #fff8dc)",
              fontFamily: "var(--font-caveat), Caveat, cursive",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#5c4033",
              boxShadow: "0 25px 60px rgba(0,0,0,0.3), inset 0 0 30px rgba(255,250,220,0.5)",
            }}
          >
            {/* Paper texture lines */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 23px, #d4c4a8 23px, #d4c4a8 24px)" }} />
            
            <div className="relative z-10">
              <div className="text-center text-xl mb-3">🌸 🐼 🌸</div>
              <p className="mb-3 font-bold text-lg">My Dearest Priyanka,</p>
              <p className="mb-3">
                On this beautiful day, I want you to know that you are not just loved — you are a blessing sent from above. 
                Your presence in our lives is like a gentle prayer answered, a light that guides us through every storm.
              </p>
              <p className="mb-3">
                There is a rare kind of magic in your heart — the way you care, the way you forgive, 
                the way you find beauty in the smallest things. That is not ordinary, Priyanka. That is divine. 
                The universe smiled the day you were born.
              </p>
              <p className="mb-3">
                Spiritually, you are a soul that radiates peace. You teach us patience without saying a word, 
                kindness without expecting anything back, and love that is pure and unconditional. 
                You are our living reminder that goodness still exists in this world.
              </p>
              <p className="mb-3">
                May this new year of your life bring you closer to your dreams, deepen your inner peace, 
                and surround you with the same warmth you so selflessly give to everyone around you. 
                May every sunrise bring you hope and every sunset bring you gratitude.
              </p>
              <p className="mb-4">
                You are not just special — you are sacred to us. Never forget how deeply you are cherished, 
                how proudly we speak your name, and how empty our world would be without you in it.
              </p>
              <p className="mb-1">With endless love, prayers, and blessings,</p>
              <p className="font-bold">Someone who thanks God every day for you</p>
              <div className="text-center text-lg mt-3">🌸 ✨ 🐼 ✨ 🌸</div>
            </div>
          </div>
        </motion.div>

        {/* Envelope Body */}
        <div className="relative w-80 h-52" style={{ zIndex: 10 }}>
          {/* Back of envelope */}
          <div className="absolute inset-0 rounded-lg shadow-2xl" style={{ background: "linear-gradient(135deg, #fda4af, #fb7185)" }} />
          
          {/* Bottom flap (visible when open) */}
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderLeft: "160px solid transparent",
              borderRight: "160px solid transparent",
              borderBottom: "100px solid #f43f5e",
              zIndex: 12,
            }}
            animate={opened ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3, delay: opened ? 0.2 : 0 }}
          />

          {/* Side flaps */}
          <div
            className="absolute bottom-0 left-0 w-0 h-0"
            style={{
              borderTop: "100px solid transparent",
              borderBottom: "100px solid transparent",
              borderLeft: "160px solid #fb7185",
              zIndex: 11,
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-0 h-0"
            style={{
              borderTop: "100px solid transparent",
              borderBottom: "100px solid transparent",
              borderRight: "160px solid #fb7185",
              zIndex: 11,
            }}
          />

          {/* Top flap (opens up) */}
          <motion.div
            className="absolute -top-[1px] left-0 w-80 h-0"
            style={{
              borderLeft: "160px solid transparent",
              borderRight: "160px solid transparent",
              borderBottom: "100px solid #f43f5e",
              transformOrigin: "top center",
              zIndex: 15,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
            }}
            animate={opened ? { rotateX: -180, zIndex: 1 } : { rotateX: 0, zIndex: 15 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />

          {/* Heart seal on flap */}
          <AnimatePresence>
            {!opened && (
              <motion.div
                className="absolute top-16 left-1/2 -translate-x-1/2 z-20"
                initial={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: "linear-gradient(135deg, #fce7f3, #f9a8d4)" }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-xl">💌</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Continue button */}
      <AnimatePresence>
        {opened && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="relative z-20 mt-8 px-8 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold shadow-lg hover:bg-white/30 transition-colors flex items-center gap-2"
            onClick={() => setScreen("finale")}
          >
            Continue
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
