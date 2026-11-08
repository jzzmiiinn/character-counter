import { create } from "zustand";

interface CounterState {
  text: string;
  setText: (text: string) => void;

  excludeSpaces: boolean;
  setExcludeSpaces: (value: boolean) => void;

  isLimitEnabled: boolean;
  setIsLimitEnabled: (value: boolean) => void;

  characterLimit: number | null;
  setCharacterLimit: (limit: number | null) => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  text: "",
  setText: (newText) => set({ text: newText }),

  excludeSpaces: false,
  setExcludeSpaces: (value) => set({ excludeSpaces: value }),

  isLimitEnabled: false,
  setIsLimitEnabled: (value) => set({ isLimitEnabled: value }),

  characterLimit: null,
  setCharacterLimit: (limit) => set({ characterLimit: limit }),
}));
