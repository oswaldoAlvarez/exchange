import { usePairStore } from "@/store/pairStore";
import { useState } from "react";

interface IDropdown {
  items: string[];
}

export const Dropdown = ({ items }: IDropdown) => {
  const selectedPair = usePairStore((state) => state.selectedPair);
  const setSelectedPair = usePairStore((state) => state.setSelectedPair);

  const { symbol } = selectedPair;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(symbol);

  return (
    <div className="relative inline-block text-left mb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex justify-between w-56 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selected ? selected : "Select a option"}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item: string, index: number) => (
              <button
                key={index}
                onClick={() => {
                  setSelected(item);
                  setSelectedPair({ symbol: item, price: 0 });
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
