"use client";

import Link from "next/link";
import { BaseText } from "../BaseText/BaseText.component";
import { usePairStore } from "@/store/pairStore";
import { formattedAmount } from "@/utils";

interface IPairRow {
  symbol: string;
  price: number;
}

export const PairRow = ({ symbol, price }: IPairRow) => {
  const priceFormatted = formattedAmount(price);

  const setSelectedPair = usePairStore((state) => state.setSelectedPair);

  const handleClick = () => {
    setSelectedPair({ symbol, price });
  };

  return (
    <Link
      href="/orderbook/infopair"
      onClick={handleClick}
      className="hover:bg-gray-200 active:bg-gray-300 transition-colors h-20 w-400 lg:w-200 md:w-140 sm:w-100 rounded-lg bg-gray-100 flex justify-between items-center my-3"
    >
      <BaseText className="text-black font-bold ml-6">{symbol}</BaseText>
      <BaseText className="text-green-600 mr-6">{priceFormatted}</BaseText>
    </Link>
  );
};
