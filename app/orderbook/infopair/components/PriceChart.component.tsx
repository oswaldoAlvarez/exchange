"use client";

import dynamic from "next/dynamic";
import { useKlineDataSocket, usePairsDataSocket } from "@/hooks";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PriceChart = () => {
  const { currentSelectedPair } = usePairsDataSocket();
  const { series } = useKlineDataSocket();

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 250,
            height: 200,
          },
        },
      },
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 300,
            height: 200,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 400,
            height: 300,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 900,
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            width: 1000,
            height: 400,
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            width: 1200,
            height: 500,
          },
        },
      },
    ],
    title: {
      text: currentSelectedPair
        ? `OHLCV for ${currentSelectedPair.symbol}`
        : "OHLCV Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  if (!currentSelectedPair) {
    return <div>No pair selected</div>;
  }

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
        width={400}
      />
    </div>
  );
};
