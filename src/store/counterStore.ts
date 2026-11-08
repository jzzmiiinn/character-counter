import { create } from "zustand";

interface CounterState {
  text: string;
  setText: (text: string) => void;
  excludeSpaces: boolean;
  setExcludeSpaces: (value: boolean) => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  text: "",
  setText: (newText) => set({ text: newText }),

  excludeSpaces: false,
  setExcludeSpaces: (value) => set({ excludeSpaces: value }),
}));
