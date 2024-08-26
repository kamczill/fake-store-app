import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import DropdownSelect from "../components/DropdownSelect";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const {
    data: defaultProducts,
    error,
    loading,
  } = useFetch("https://fakestoreapi.com/products");
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(undefined);

  useEffect(() => {
    if (defaultProducts) {
      setProducts(defaultProducts);
    }
  }, [defaultProducts]);

  useEffect(() => {
    if (sort && defaultProducts) {
      let sortedProducts = [...defaultProducts];
      switch (sort) {
        case "title-asc":
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-desc":
          sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "price-asc":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          sortedProducts = defaultProducts;
          break;
      }
      setProducts(sortedProducts);
    }
  }, [sort, defaultProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full flex flex-col items-center">
      <DropdownSelect sort={sort} setSort={setSort} />

      <div className="flex flex-wrap gap-12 mt-14 justify-center items-end">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
