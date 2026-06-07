"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useAppStore } from "@/store/useAppStore";
import PasswordScreen from "@/components/screens/PasswordScreen";
import HeroScreen from "@/components/screens/HeroScreen";
import ThoughtsScreen from "@/components/screens/ThoughtsScreen";
import BalloonsScreen from "@/components/screens/BalloonsScreen";
import TourScreen from "@/components/screens/TourScreen";
import IntroScreen from "@/components/screens/IntroScreen";
import GiftBoxScreen from "@/components/screens/GiftBoxScreen";
import RevealScreen from "@/components/screens/RevealScreen";
import StoryScreen from "@/components/screens/StoryScreen";
import GalleryScreen from "@/components/screens/GalleryScreen";
import LetterScreen from "@/components/screens/LetterScreen";
import FinaleScreen from "@/components/screens/FinaleScreen";
import PraiseScreen from "@/components/screens/PraiseScreen";

const screens = {
  password: PasswordScreen,
  hero: HeroScreen,
  thoughts: ThoughtsScreen,
  balloons: BalloonsScreen,
  tour: TourScreen,
  intro: IntroScreen,
  giftbox: GiftBoxScreen,
  reveal: RevealScreen,
  story: StoryScreen,
  gallery: GalleryScreen,
  letter: LetterScreen,
  finale: FinaleScreen,
  praise: PraiseScreen,
};

export default function Home() {
  const screen = useAppStore((s) => s.screen);
  const ScreenComponent = screens[screen];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={screen}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ScreenComponent />
      </motion.div>
    </AnimatePresence>
  );
}
