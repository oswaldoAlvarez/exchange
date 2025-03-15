import { useEffect, useMemo, useState } from "react";
import { useGetFavoritePairs } from "./useGetFavoritePairs";
import { subscribe, unsubscribe } from "@/utils/binanceSocket";
import { usePairStore } from "@/store/pairStore";

interface Pair {
  symbol: string;
  price: string;
}

export const usePairsDataSocket = () => {
  const selectedPair = usePairStore((state) => state.selectedPair);

  const { favoritePairs } = useGetFavoritePairs();

  const [pairs, setPairs] = useState<Pair[]>(favoritePairs);

  useEffect(() => {
    if (favoritePairs.length && pairs.length === 0) {
      setPairs(favoritePairs);
    }
  }, [favoritePairs, pairs.length]);

  useEffect(() => {
    const allowedSymbols = favoritePairs.map((pair) =>
      pair.symbol.replace("/", "")
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callback = (data: any) => {
      const socketSymbol = data.s;
      const socketPrice = data.c;

      if (allowedSymbols.includes(socketSymbol)) {
        setPairs((currentPairs) =>
          currentPairs.map((pair) =>
            pair.symbol.replace("/", "") === socketSymbol
              ? { ...pair, price: socketPrice }
              : pair
          )
        );
      }
    };

    subscribe(callback);
    return () => unsubscribe(callback);
  }, [favoritePairs]);

  const currentSelectedPair = useMemo(() => {
    if (!selectedPair) return null;
    const normalizedSelected = selectedPair?.symbol?.replace("/", "");
    return (
      pairs.find(
        (pair) => pair.symbol.replace("/", "") === normalizedSelected
      ) || null
    );
  }, [selectedPair, pairs]);

  return {
    pairs,
    currentSelectedPair,
  };
};
