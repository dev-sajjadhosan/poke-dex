import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";
export type Sections = 'search' | 'generate-card' | null
type Tab =
  | "default"
  | "overview"
  | "stats"
  | "moves"
  | "evolution"
  | "breeding"
  | string;

export const TabObject = {
  default: "default",
  overview: "overview",
  stats: "stats",
  moves: "moves",
  evolution: "evolution",
  breeding: "breeding",
} as const;

interface PokeStoreProps {
  theme: Theme;
  tab: Tab;
  history: string[];
  isSection: Sections;
  isFind: boolean;

  setTheme: (v: Theme) => void;
  setTab: (v: Tab) => void;
  setIsSection: (v: Sections) => void;
  setIsFind: (v: boolean) => void;

  addToHistory: (d: string) => void;
  removeFromHistory: (v: number | string) => void;
}

export const usePokeStore = create<PokeStoreProps>()(
  persist(
    (set) => ({
      theme: "system",
      tab: "overview",
      isSection: null,
      isFind: false,
      history: [],

      setTheme: (v: Theme) => set({ theme: v }),
      setTab: (v: Tab) => set({ tab: v }),
      setIsSection: (v: Sections) => set({ isSection: v }),
      setIsFind: (v: boolean) => set({ isFind: v }),

      addToHistory: (d: string) =>
        set((state) => {
          const newHistory = [d, ...state.history.filter((h) => h !== d)];
          return { history: newHistory.slice(0, 50) };
        }),

      removeFromHistory: (v: number | string) =>
        set((state) => {
          if (typeof v === "number") {
            return { history: state.history.filter((_, i) => i !== v) };
          }
          return { history: state.history.filter((h) => h !== v) };
        }),
    }),
    {
      name: "poke-store",
    }
  )
);
