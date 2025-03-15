export const formattedAmount = (amount: number) => {
  return `${amount.toFixed(2).replace(".", ",")} USDT`;
};
