import { create } from "zustand";

export interface Pair {
  symbol: string;
  price: string | number;
}

interface PairStore {
  selectedPair: Pair | null;
  setSelectedPair: (pair: Pair) => void;
  clearSelectedPair: () => void;
}

export const usePairStore = create<PairStore>((set) => ({
  selectedPair: null,
  setSelectedPair: (pair: Pair) => set({ selectedPair: pair }),
  clearSelectedPair: () => set({ selectedPair: null }),
}));
