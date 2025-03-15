import { useBinanceInfo } from "./useBinanceInfo";

export const useGetFavoritePairs = () => {
  const { data } = useBinanceInfo();

  const desiredSymbols = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT"];

  const filteredPairs = data.filter(({ symbol }) =>
    desiredSymbols.includes(symbol)
  );

  const favoritePairs = filteredPairs.map((pair) => ({
    ...pair,
    symbol: pair.symbol.replace("USDT", "/USDT"),
  }));

  return {
    favoritePairs,
  };
};
