"use client";

import { BinanceTicker } from "@/hooks/useBinanceInfo";

const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

let listeners: Array<(data: BinanceTicker) => void> = [];

socket.onmessage = (event) => {
  const dataArray = JSON.parse(event.data);
  if (Array.isArray(dataArray)) {
    dataArray.forEach((data) =>
      listeners.forEach((listener) => listener(data))
    );
  }
};

export const subscribe = (callback: (data: BinanceTicker) => void) => {
  listeners.push(callback);
};

export const unsubscribe = (callback: (data: BinanceTicker) => void) => {
  listeners = listeners.filter((cb) => cb !== callback);
};
