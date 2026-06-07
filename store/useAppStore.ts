import { create } from "zustand";

export type Screen =
  | "password"
  | "hero"
  | "thoughts"
  | "balloons"
  | "tour"
  | "intro"
  | "giftbox"
  | "reveal"
  | "story"
  | "gallery"
  | "letter"
  | "finale"
  | "praise";

interface AppState {
  screen: Screen;
  setScreen: (screen: Screen) => void;
}

export const useAppStore = create<AppState>((set) => ({
  screen: "password",
  setScreen: (screen) => set({ screen }),
}));
