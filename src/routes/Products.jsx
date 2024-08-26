import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import DropdownSelect from "../components/DropdownSelect";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const {
    data: defaultProducts,
    error,
    loading,
  } = useFetch("https://fakestoreapi.com/products");

  const [sort, setSort] = useState("default");

  // Memoize sorted products
  const sortedProducts = useMemo(() => {
    if (!defaultProducts) return [];

    let sorted = [...defaultProducts];
    switch (sort) {
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = defaultProducts;
        break;
    }
    return sorted;
  }, [sort, defaultProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`An error occurred: ${error}`}</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <DropdownSelect sort={sort} setSort={setSort} />

      <div className="flex flex-wrap gap-12 mt-14 justify-center items-end">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
