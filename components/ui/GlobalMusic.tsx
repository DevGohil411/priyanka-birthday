"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusicStore } from "@/store/useMusicStore";

interface GlobalMusicProps {
  src: string;
}

export default function GlobalMusic({ src }: GlobalMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const bgPaused = useMusicStore((s) => s.bgPaused);

  // Create audio element once
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.32;
    
    // Start at 01:09 (69 seconds) once metadata is loaded
    audio.addEventListener("loadedmetadata", () => {
      audio.currentTime = 69;
    }, { once: true });

    audioRef.current = audio;

    // Try autoplay immediately
    const tryPlay = () => {
      audio.play()
        .then(() => { setPlaying(true); setStarted(true); setShowHint(false); })
        .catch(() => { setShowHint(true); });
    };
    tryPlay();

    // Fallback: play on first user interaction
    const handleInteraction = () => {
      if (!started && audioRef.current) {
        audioRef.current.play()
          .then(() => { setPlaying(true); setStarted(true); setShowHint(false); })
          .catch(() => {});
      }
    };
    document.addEventListener("click", handleInteraction, { once: true });
    document.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  // React to bgPaused from music store (TourScreen sets this)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (bgPaused) {
      audio.pause();
      setPlaying(false);
    } else if (started) {
      // Only resume if user had already started playing
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  }, [bgPaused, started]);

  // Hide hint after 6 seconds
  useEffect(() => {
    if (showHint) {
      const t = setTimeout(() => setShowHint(false), 6000);
      return () => clearTimeout(t);
    }
  }, [showHint]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => { setPlaying(true); setStarted(true); });
    }
  };

  // Don't show button when TourScreen pauses the bg music (reel takes over)
  if (bgPaused) return null;

  return (
    <>
      {/* Music toggle — bottom right, always visible */}
      <motion.button
        onClick={toggle}
        className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full"
        style={{
          width: "46px", height: "46px",
          background: "rgba(255,255,255,0.28)",
          backdropFilter: "blur(14px)",
          border: "1.5px solid rgba(249,168,212,0.55)",
          boxShadow: "0 4px 20px rgba(236,72,153,0.25)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        title={playing ? "Pause music" : "Play music"}>
        {playing ? (
          <div className="flex gap-0.5 items-end" style={{ height: "20px" }}>
            {[0, 1, 2].map((i) => (
              <motion.div key={i}
                style={{ width: "3.5px", background: "linear-gradient(to top, #ec4899, #c084fc)", borderRadius: "2px" }}
                animate={{ height: ["5px", "17px", "7px", "14px", "5px"] }}
                transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.18 }} />
            ))}
          </div>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3z" fill="#ec4899" />
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" fill="#ec4899" opacity="0.4" />
            <line x1="2" y1="2" x2="22" y2="22" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </motion.button>

      {/* Hint bubble */}
      <AnimatePresence>
        {showHint && !playing && (
          <motion.div
            className="fixed bottom-14 right-4 z-50 px-3 py-2 rounded-2xl font-caveat text-sm text-white"
            style={{
              background: "linear-gradient(135deg, #ec4899, #c084fc)",
              boxShadow: "0 4px 18px rgba(236,72,153,0.4)",
              whiteSpace: "nowrap",
            }}
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.85 }}>
            🎵 Tap to play music!
            <div style={{
              position: "absolute", bottom: "-6px", right: "16px",
              width: 0, height: 0,
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid #c084fc",
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
