import React, { useState } from "react";

const PriceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("any price");

  const prices = ["$50", "$100", "$150", "$200"];

  const handleSelect = (price) => {
    setSelectedPrice(price);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="flex items-center">
          <span className="text-gray-600">$</span>
          <span className="ml-2">{selectedPrice}</span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
          {prices.map((price) => (
            <div
              key={price}
              onClick={() => handleSelect(price)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
