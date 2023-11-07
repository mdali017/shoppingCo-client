import React from "react";

const ProductCard = ({ item }) => {
  const { image, name, regular_price, offered_price } = item;
  return (
    <div className="border">
      <div className="text-center">
        <img className="w-[200px] mx-auto" src={image} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text-sm">{name}</h3>
        <div className="flex gap-6">
          {/* <p>${regular_price}</p> */}
          <p className="bg-green-500 ">${offered_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
