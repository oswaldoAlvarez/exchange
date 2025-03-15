"use client";

import { useEffect, useState } from "react";
import { useGetFavoritePairs } from "@/hooks";
import { BaseText, PairRow } from "../../components";
import { subscribe, unsubscribe } from "@/utils/binanceSocket";

interface Pair {
  symbol: string;
  price: string;
}

export const OrderBook = () => {
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

  return (
    <div className="flex flex-col justify-center bg-white m-20 items-center">
      <BaseText className="text-black mb-10 text-xl font-mono mt-20">
        Exchange OrderBook
      </BaseText>
      <div className="mb-20">
        {pairs.map(({ symbol, price }) => (
          <PairRow key={symbol} pair={symbol} price={+price} />
        ))}
      </div>
    </div>
  );
};
