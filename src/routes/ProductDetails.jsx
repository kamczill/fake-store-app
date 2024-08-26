import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  useEffect(() => {
    localStorage.setItem("lastVisitedProduct", id);
  }, [id]);

  if (loading) return <p>Loading product...</p>;

  if (error || data.length < 1) {
    let errorMessage = error;
    if (!errorMessage) errorMessage = "Something went wrong";
    return <p className="text-red-600">{errorMessage}</p>;
  }

  return (
    <div className="mt-14 flex flex-col justify-center items-center md:flex-row md:items-start md:gap-6">
      <div className="max-w-[500px]">
        <img src={data.image} alt={data.title} className="" />
      </div>
      <div className="mt-12 flex flex-col gap-3 max-w-[40vw] md:mt-14">
        <p>Rating: {data.rating.rate}/5</p>
        <h3 className="font-bold text-2xl">{data.title}</h3>
        <p className=" text-2xl">${data.price}</p>
        <p className=" text-2xl">Category: {data.category}</p>
        <p className=" text-base">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
