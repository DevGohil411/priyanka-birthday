import { create } from "zustand";

interface MusicState {
  bgPaused: boolean;   // request to pause background music
  pauseBg: () => void;
  resumeBg: () => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  bgPaused: false,
  pauseBg: () => set({ bgPaused: true }),
  resumeBg: () => set({ bgPaused: false }),
}));
