"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { useAppStore } from "@/store/useAppStore";

const stories = [
  { emoji: "🌸", text: "Priyanka, you deserve all the happiness in the world" },
  { emoji: "✨", text: "Every room you walk into becomes brighter because of you" },
  { emoji: "🎵", text: "Your laugh is literally your family's favorite sound" },
  { emoji: "🎂", text: "Today is entirely yours, celebrate every moment" },
  { emoji: "🌍", text: "The world is better because you're in it, Priyanka" },
  { emoji: "💫", text: "Here's to you, and everything beautiful you are" },
];

export default function StoryScreen() {
  const setScreen = useAppStore((s) => s.setScreen);

  return (
    <div
      className="fixed inset-0 w-screen h-dvh overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fff0e6, #fce7f3, #ede9fe, #e0f2fe)" }}
    >
      <FloatingParticles count={25} symbols={["🌸", "✨", "❀", "🐼", "🎀"]} />

      <div className="relative z-10 h-full overflow-y-auto scrollbar-hide px-6 py-12">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-5xl">🐼💕</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-3xl md:text-4xl text-gray-800 text-center mb-10"
        >
          A Few Thoughts For You, Priyanka
        </motion.h2>

        <div className="max-w-lg mx-auto space-y-6 pb-24">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <GlassCard className="p-6">
                <div className="text-3xl mb-2">{story.emoji}</div>
                <p className="text-gray-800 text-lg font-lato">{story.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setScreen("gallery")}
            className="px-8 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-gray-800 font-semibold shadow-lg hover:bg-white/80 transition-colors flex items-center gap-2"
          >
            Next → 🌸
          </button>
        </motion.div>
      </div>
    </div>
  );
}
