import { BaseText } from "../BaseText/BaseText.component";

interface IPairRow {
  pair: string;
  price: number;
}

export const PairRow = ({ pair, price }: IPairRow) => {
  const priceFormatted = `${price.toFixed(3).replace(".", ",")} USD`;

  return (
    <button
      onClick={() => console.log("Botón presionado")}
      className="hover:bg-gray-200 active:bg-gray-300 transition-colors h-20 w-400 lg:w-200 md:w-140 sm:w-100 rounded-lg bg-gray-100 flex justify-between items-center my-3"
    >
      <BaseText className="text-black font-bold ml-6">{pair}</BaseText>
      <BaseText className="text-black mr-6">{priceFormatted}</BaseText>
    </button>
  );
};
