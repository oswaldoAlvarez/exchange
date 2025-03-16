"use client";

import { BaseText, MainCard } from "@/components";
import { usePairsDataSocket } from "@/hooks";
import { usePairStore } from "@/store/pairStore";
import { formattedAmount } from "@/utils";
import { Dropdown } from "./components/Dropdown.component";
import { PriceChart } from "./components/PriceChart.component";

const options = ["BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT"];

export const InfoPair = () => {
  const selectedPair = usePairStore((state) => state.selectedPair);

  const { currentSelectedPair } = usePairsDataSocket();

  const { symbol } = selectedPair || {};
  const { price = "0" } = currentSelectedPair || {};

  const priceFormatted = +price === 0 ? "" : formattedAmount(+price);

  return (
    <MainCard>
      <div className="my-10 w-[90%]">
        <div className="justify-end flex mb-5">
          <Dropdown items={options} />
        </div>
        <div className="flex flex-row">
          <BaseText className="mr-2">Pair:</BaseText>
          <BaseText className="font-bold">{symbol}</BaseText>
        </div>
        <div className="flex flex-row mb-10">
          <BaseText className="mr-2">Current Price:</BaseText>
          <BaseText className="text-green-600">{priceFormatted}</BaseText>
        </div>
      </div>
      <PriceChart />
    </MainCard>
  );
};
