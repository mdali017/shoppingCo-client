import React from "react";

const categories = [
  { id: 1, title: "mens woods" },
  { id: 2, title: "womens woods" },
  { id: 3, title: "childs woods" },
  { id: 4, title: "dress " },
  { id: 5, title: "cloths" },
  { id: 6, title: "sunglasses" },
  { id: 7, title: "walet" },
  { id: 8, title: "shoes" },
];

const Category = () => {
  return (
    <div>
      <h1 className="text-xl uppercase text-center py-3 font-semibold text-gray-500 bg-gray-300">
        Top Category
      </h1>
      <div>
        {categories.map((category) => (
          <p
            className="capitalize my-2 text-lg ml-4 text-gray-500"
            key={category.id}
          >
            {category.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Category;
