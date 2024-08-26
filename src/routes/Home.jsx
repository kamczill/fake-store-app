import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [lastVisitedProduct, setLastVisitedProduct] = useState(
    localStorage.getItem("lastVisitedProduct")
  );

  return (
    <div className="flex flex-col gap-12 mt-12">
      <h1 className="text-2xl">Witaj na stronie głównej!</h1>
      {lastVisitedProduct && (
        <Link to={`/products/${lastVisitedProduct}`} className="underline">
          Wróć do przeglądania produktu
        </Link>
      )}
    </div>
  );
};

export default Home;
