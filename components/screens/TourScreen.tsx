"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useMusicStore } from "@/store/useMusicStore";

/* ── Star ── */
function Star({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none rounded-full bg-white"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, boxShadow: "0 0 6px 2px rgba(255,255,255,0.6)" }}
      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.4, 1] }}
      transition={{ duration: 2 + delay, repeat: Infinity, delay, ease: "easeInOut" }} />
  );
}

/* ── Firefly ── */
function Firefly({ startX, startY, delay }: { startX: number; startY: number; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none"
      style={{ left: `${startX}%`, top: `${startY}%`, zIndex: 3 }}
      animate={{ x: [0, 40, -20, 60, 10], y: [0, -30, 20, -15, 5], opacity: [0, 1, 0.5, 1, 0] }}
      transition={{ duration: 8 + delay, delay, repeat: Infinity, ease: "easeInOut" }}>
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fde68a", boxShadow: "0 0 10px 4px rgba(253,230,138,0.6)" }} />
    </motion.div>
  );
}

/* ── Floating Lantern ── */
function FloatingLantern({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, bottom: "-60px", zIndex: 2 }}
      animate={{ y: [0, -900], opacity: [0, 0.9, 0.9, 0], x: [0, 18, -10, 28, -12] }}
      transition={{ duration: 18 + delay * 2, delay, repeat: Infinity, ease: "linear" }}>
      <svg width="26" height="38" viewBox="0 0 30 45">
        <line x1="15" y1="0" x2="15" y2="5" stroke="#d4a017" strokeWidth="1.5" />
        <motion.rect x="5" y="5" width="20" height="26" rx="4" fill="#fef3c7" opacity="0.85" stroke="#f59e0b" strokeWidth="1"
          animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.path d="M12 17 Q13 12 15 10 Q17 12 18 17 Z" fill="#fb923c"
          animate={{ d: ["M12 17 Q13 12 15 10 Q17 12 18 17 Z", "M12 17 Q12 10 15 8 Q18 10 18 17 Z"] }}
          transition={{ duration: 0.6, repeat: Infinity }} />
        <rect x="7" y="31" width="16" height="4" rx="2" fill="#f59e0b" opacity="0.9" />
        <rect x="10" y="35" width="10" height="7" rx="2" fill="#d4a017" opacity="0.9" />
      </svg>
    </motion.div>
  );
}

/* ── Glow Flower ── */
function GlowingFlower({ x, y, color, delay }: { x: number; y: number; color: string; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 3 + delay, repeat: Infinity, delay }}>
      <div style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
        <svg width="32" height="32" viewBox="0 0 50 50">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx={25 + 14 * Math.cos((angle * Math.PI) / 180)} cy={25 + 14 * Math.sin((angle * Math.PI) / 180)}
              rx="10" ry="7" fill={color} opacity="0.7"
              transform={`rotate(${angle} ${25 + 14 * Math.cos((angle * Math.PI) / 180)} ${25 + 14 * Math.sin((angle * Math.PI) / 180)})`} />
          ))}
          <circle cx="25" cy="25" r="8" fill="#fef3c7" opacity="0.9" />
        </svg>
      </div>
    </motion.div>
  );
}

/* ── Sparkle ── */
function Sparkle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 3 }}>
      <svg width="12" height="12" viewBox="0 0 24 24">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="#fde68a" />
      </svg>
    </motion.div>
  );
}

const stars = Array.from({ length: 80 }, (_, i) => ({ x: (i * 1.3 * 7.7) % 100, y: (i * 1.7 * 5.3) % 100, size: 1 + (i % 3) * 0.8, delay: (i % 5) * 0.5 }));
const fireflies = Array.from({ length: 14 }, (_, i) => ({ startX: (i * 7.3) % 100, startY: (i * 6.7) % 100, delay: i * 0.9 }));
const lanterns = [6, 18, 32, 50, 66, 80, 93];
const glowFlowers = [
  { x: 4, y: 18, color: "#f9a8d4", delay: 0 }, { x: 91, y: 14, color: "#c084fc", delay: 1 },
  { x: 2, y: 62, color: "#fb7185", delay: 2 }, { x: 93, y: 58, color: "#f9a8d4", delay: 0.5 },
  { x: 13, y: 82, color: "#c084fc", delay: 1.5 }, { x: 83, y: 78, color: "#fde68a", delay: 3 },
];
const sparkles = [{ x: 18, y: 8 }, { x: 76, y: 10 }, { x: 9, y: 42 }, { x: 89, y: 38 }, { x: 38, y: 88 }, { x: 62, y: 86 }, { x: 50, y: 5 }, { x: 28, y: 68 }, { x: 72, y: 70 }];

export default function TourScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const pauseBg = useMusicStore((s) => s.pauseBg);
  const resumeBg = useMusicStore((s) => s.resumeBg);
  const reelAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pause global background music (Until I Found You) on this page
    pauseBg();

    // Create and configure reel audio to play automatically on page load
    const audio = new Audio("/reel-audio.mp3");
    audio.loop = true;
    audio.volume = 0.85;
    reelAudioRef.current = audio;

    const playAudio = () => {
      audio.play().catch((err) => {
        console.log("Autoplay of reel audio blocked, will retry on click or interaction", err);
      });
    };
    playAudio();

    // Fallback: also play on document click if autoplay was blocked
    const handleUserInteraction = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      if (reelAudioRef.current) {
        reelAudioRef.current.pause();
      }
      reelAudioRef.current = null;
      document.removeEventListener("click", handleUserInteraction);
      // Resume background music on leaving
      resumeBg();
    };
  }, [pauseBg, resumeBg]);

  const handleVideoEnded = useCallback(() => {
    setVideoPlaying(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  /* Click = fullscreen + play video (muted). Reel audio continues uninterrupted in the background. */
  const handleVideoClick = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start reel audio if it was blocked by browser autoplay policy
    if (reelAudioRef.current && reelAudioRef.current.paused) {
      reelAudioRef.current.play().catch(() => {});
    }

    // Request fullscreen
    if (video.requestFullscreen) {
      video.requestFullscreen().catch(() => {});
    } else if ((video as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      (video as HTMLVideoElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen!();
    }

    // Play video from beginning
    video.currentTime = 0;
    video.play()
      .then(() => setVideoPlaying(true))
      .catch(() => {});

    // Pause video when exiting fullscreen
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        video.pause();
        setVideoPlaying(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFsChange, { once: true });
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-y-auto overflow-x-hidden">
      {/* Night sky */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, #0a0118 0%, #1a0a2e 25%, #16213e 55%, #0a0118 100%)",
      }} />
      <div className="fixed pointer-events-none" style={{ width: "280px", height: "280px", top: "-40px", right: "12%", background: "radial-gradient(circle, rgba(255,250,220,0.13) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="fixed pointer-events-none" style={{ width: "70px", height: "70px", top: "18px", right: "calc(12% + 25px)", background: "radial-gradient(circle, #fef9c3, #fde68a)", borderRadius: "50%", boxShadow: "0 0 40px 15px rgba(255,250,200,0.18)" }} />

      {stars.map((s, i) => <Star key={i} x={s.x} y={s.y} size={s.size} delay={s.delay} />)}
      {fireflies.map((f, i) => <Firefly key={i} startX={f.startX} startY={f.startY} delay={f.delay} />)}
      {lanterns.map((x, i) => <FloatingLantern key={i} x={x} delay={i * 2.5} />)}
      {glowFlowers.map((f, i) => <GlowingFlower key={i} x={f.x} y={f.y} color={f.color} delay={f.delay} />)}
      {sparkles.map((s, i) => <Sparkle key={i} x={s.x} y={s.y} delay={i * 0.55} />)}

      {/* Content */}
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center py-14 px-4">

        {/* Header */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex justify-center gap-2 mb-3">
            {["🌟", "✨", "🌙", "✨", "🌟"].map((e, i) => (
              <motion.span key={i} className="text-xl md:text-2xl"
                animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}>{e}</motion.span>
            ))}
          </div>
          <motion.h2 className="font-playfair text-3xl md:text-5xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #fde68a, #f9a8d4, #c084fc)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundSize: "200%", animation: "shimmer 4s ease infinite",
              filter: "drop-shadow(0 0 20px rgba(249,168,212,0.4))",
            }}>
            ✨ A Virtual Tour For You ✨
          </motion.h2>
          <motion.p className="font-caveat text-white/70 text-lg md:text-xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            &ldquo;A beautiful moment, chosen especially for you.&rdquo;
          </motion.p>
        </motion.div>

        {/* Video Card — click = fullscreen + play video (muted). Reel audio plays in the background. */}
        <motion.div
          className="relative rounded-3xl overflow-hidden cursor-pointer max-w-2xl w-full"
          style={{
            background: "rgba(15,15,35,0.7)",
            backdropFilter: "blur(15px)",
            border: "2px solid rgba(249,168,212,0.35)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(249,168,212,0.15)",
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          whileHover={{ y: -6, boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 50px rgba(249,168,212,0.25)" }}
          onClick={handleVideoClick}>

          <div className="absolute top-3 left-3 text-xl opacity-80 z-10">🌸</div>
          <div className="absolute top-3 right-3 text-xl opacity-80 z-10">🌷</div>
          <div className="absolute bottom-14 left-3 text-xl opacity-80 z-10">🌺</div>
          <div className="absolute bottom-14 right-3 text-xl opacity-80 z-10">🌸</div>

          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <video
              ref={videoRef}
              src="/birthday-video.mp4"
              className="w-full h-full object-cover"
              playsInline
              muted
              onEnded={handleVideoEnded}
              style={{ filter: "brightness(0.88)" }}
            />

            {/* Play overlay — shown when not playing */}
            {!videoPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)" }} />
                <motion.div className="relative flex flex-col items-center gap-3"
                  animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <motion.div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "80px", height: "80px",
                      background: "rgba(249,168,212,0.2)",
                      backdropFilter: "blur(10px)",
                      border: "2.5px solid rgba(249,168,212,0.6)",
                      boxShadow: "0 0 40px rgba(249,168,212,0.4)",
                    }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <p className="font-caveat text-white/85 text-lg" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                    Tap to play fullscreen 🌙
                  </p>
                </motion.div>
              </div>
            )}
          </div>

          <div className="px-5 py-4 text-center">
            <p className="font-caveat text-white text-lg" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
              💖 A moment worth keeping forever
            </p>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <div className="flex justify-center gap-2 mb-4">
            {["✨", "💫", "⭐", "💫", "✨"].map((e, i) => (
              <motion.span key={i} className="text-lg md:text-xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>{e}</motion.span>
            ))}
          </div>
          <motion.p className="font-caveat text-white/80 text-xl md:text-2xl mb-5"
            style={{ textShadow: "0 0 20px rgba(249,168,212,0.4)" }}>
            This little journey was made especially for you ❤️
          </motion.p>
          <motion.p
            className="font-playfair text-3xl md:text-4xl font-bold"
            style={{
              background: "linear-gradient(135deg, #fde68a, #f9a8d4, #c084fc, #fde68a)",
              backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundSize: "300%", animation: "shimmer 5s ease infinite",
              filter: "drop-shadow(0 0 25px rgba(249,168,212,0.5))",
            }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}>
            Happy Birthday, Priyanka ✨
          </motion.p>
          <div className="flex justify-center gap-2 mt-5">
            {["🌸", "🌷", "💖", "🌺", "🌷", "🌸"].map((e, i) => (
              <motion.span key={i} className="text-xl md:text-2xl"
                animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>{e}</motion.span>
            ))}
          </div>
        </motion.div>
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
