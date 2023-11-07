import { useQuery } from "react-query";

const useAllProducts = () => {
  const {
    isLoading,
    isError,
    data: products = [],
    error,
  } = useQuery("products", async () => {
    const res = await fetch("products.json");
    return res.json();
  });
  return [products];
};

export default useAllProducts;
