"use client";

import { BaseText, MainCard } from "@/components";
import { usePairsDataSocket } from "@/hooks";
import { usePairStore } from "@/store/pairStore";
import { formattedAmount } from "@/utils";
import { Dropdown } from "./components/Dropdown.component";

const options = ["BTC/USDT", "ETH/USDT", "BNB/USDT", "SOL/USDT"];

export const InfoPair = () => {
  const selectedPair = usePairStore((state) => state.selectedPair);

  const { currentSelectedPair } = usePairsDataSocket();

  const { symbol } = selectedPair || {};
  const { price = "0" } = currentSelectedPair || {};

  const priceFormatted = formattedAmount(+price);

  return (
    <MainCard>
      <div className="my-10 w-[90%]">
        <div className="justify-end flex">
          <Dropdown items={options} />
        </div>
        <BaseText className="font-bold">{`Par: ${symbol}`}</BaseText>
        <BaseText className="text-green-600">{`Precio Actual: ${priceFormatted}`}</BaseText>
      </div>
    </MainCard>
  );
};
