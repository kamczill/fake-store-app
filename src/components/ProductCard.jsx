import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const formattedPrice = Number(product.price).toFixed(2);

  return (
    <div className="flex flex-col w-full max-w-[200px]">
      <div className="w-full">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} />
        </Link>
      </div>
      <div>
        <Link to={`/products/${product.id}`} className="font-bold">
          {product.title}
        </Link>
        <p>{formattedPrice} zł</p>
      </div>
    </div>
  );
};

export default ProductCard;
