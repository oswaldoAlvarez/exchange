"use client";

import { PairRow } from "@/components";
import { usePairsDataSocket } from "@/hooks";

export const PairList = () => {
  const { pairs } = usePairsDataSocket();

  return (
    <div className="mb-20">
      {pairs.map(({ symbol, price }) => (
        <PairRow key={symbol} symbol={symbol} price={+price} />
      ))}
    </div>
  );
};
