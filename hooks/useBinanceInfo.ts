import { useQuery } from "@tanstack/react-query";

export interface Ticker {
  symbol: string;
  price: string;
}

const fetchBinancePrices = async (): Promise<Ticker[]> => {
  const res = await fetch("https://api.binance.com/api/v3/ticker/price", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Error al obtener datos de Binance");
  }

  return res.json();
};

export const useBinanceInfo = () => {
  const { data, isLoading, isError, error } = useQuery<Ticker[], Error>({
    queryKey: ["binancePrices"],
    queryFn: fetchBinancePrices,
  });

  return {
    data: data || [],
    loading: isLoading,
    isError,
    error,
  };
};
