import React from "react";
import useAllProducts from "../../../hooks/useAllProducts";
import CategoryWiseProducts from "./CategoryWiseProducts/CategoryWiseProducts";

const ProductsCategory = () => {
  const [products] = useAllProducts();
  // console.log(products);
  const newArrivals = products.filter(
    (items) => items.category === "new-arrivals"
  );
  const premiumPanjabi = products.filter(
    (items) => items.category === "premium-panjabi"
  );

  const halfShirt = products.filter((items) => items.category === "half-shirt");
  const fullShirt = products.filter((items) => items.category === "full-shirt");
  const sunglass = products.filter((items) => items.category === "sunglass");
  const wallet = products.filter((items) => items.category === "wallet");

  return (
    <div className="container mx-auto">
      {/* For New Arrivals */}
      <CategoryWiseProducts
        items={newArrivals}
        category_title="New Arrivals"
      ></CategoryWiseProducts>

      {/* For Premimum Panjabi */}
      <CategoryWiseProducts
        items={premiumPanjabi}
        category_title="Premimum Panjabi"
      ></CategoryWiseProducts>

      {/* For Half Shirt */}
      <CategoryWiseProducts
        items={halfShirt}
        category_title="Half Shirt"
      ></CategoryWiseProducts>

      {/* For Full Shirt */}
      <CategoryWiseProducts
        items={fullShirt}
        category_title="Full Shirt"
      ></CategoryWiseProducts>

      {/* For Sunglass */}
      <CategoryWiseProducts
        items={sunglass}
        category_title="Sunglass"
      ></CategoryWiseProducts>

      {/* For Wallet */}
      <CategoryWiseProducts
        items={wallet}
        category_title="Wallet"
      ></CategoryWiseProducts>
    </div>
  );
};

export default ProductsCategory;
