import React from "react";
import ProductCard from "../../../../components/ProductCard";
import SectionTitle from "../../../../components/SectionTitle";

const CategoryWiseProducts = ({ items, category_title }) => {
  return (
    <div>
      <SectionTitle category_title={category_title}></SectionTitle>
      <div className="grid grid-cols-5 gap-10">
        {items.map((item) => (
          <ProductCard key={items.id} item={item}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
