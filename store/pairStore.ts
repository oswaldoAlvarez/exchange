import { create } from "zustand";

export interface Pair {
  symbol: string;
  price: string | number;
}

interface PairStore {
  selectedPair: Pair;
  setSelectedPair: (pair: Pair) => void;
  clearSelectedPair: () => void;
}

export const usePairStore = create<PairStore>((set) => ({
  selectedPair: { symbol: "", price: 0 },
  setSelectedPair: (pair: Pair) => set({ selectedPair: pair }),
  clearSelectedPair: () =>
    set({ selectedPair: { symbol: "", price: 0 } }),
}));
