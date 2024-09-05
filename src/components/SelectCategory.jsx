import { useState } from "react";

export function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected Category: ", category);
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Todos"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Todos")}
      >
        Todos
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Almacén"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Almacén")}
      >
        Almacén
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Carnicería"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Carnicería")}
      >
        Carnicería
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Pollería"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Pollería")}
      >
        Pollería
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Fiambrería"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Fiambrería")}
      >
        Fiambrería
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Verdulería"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Verdulería")}
      >
        Verdulería
      </button>
      <button
        className={`px-4 py-2 rounded-lg font-bold transition-colors duration-200 ${
          selectedCategory === "Lácteos"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black hover:bg-blue-300"
        }`}
        onClick={() => handleCategoryClick("Lácteos")}
      >
        Lácteos
      </button>
    </div>
  );
}
