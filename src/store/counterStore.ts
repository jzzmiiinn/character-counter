import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "light" | "dark";

interface CounterState {
  text: string;
  setText: (text: string) => void;

  excludeSpaces: boolean;
  setExcludeSpaces: (value: boolean) => void;

  isLimitEnabled: boolean;
  setIsLimitEnabled: (value: boolean) => void;

  characterLimit: number | null;
  setCharacterLimit: (limit: number | null) => void;

  theme: Theme;
  toggleTheme: () => void;
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      text: "",
      setText: (newText) => set({ text: newText }),

      excludeSpaces: false,
      setExcludeSpaces: (value) => set({ excludeSpaces: value }),

      isLimitEnabled: false,
      setIsLimitEnabled: (value) => set({ isLimitEnabled: value }),

      characterLimit: null,
      setCharacterLimit: (limit) => set({ characterLimit: limit }),

      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "character-counter-storage",

      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        text: state.text,
        theme: state.theme,
      }),
    },
  ),
);
