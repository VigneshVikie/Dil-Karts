import React from "react";
import productsData from "../data/products";

const Product = ({ params }) => {
  const { productId } = params;

  const product = productsData.find((p) => p.id === parseInt(productId));

  return (
    <div
      className="w-screen h-screen
       flex items-center justify-center"
    >
      <div
        className="bg-red-100 rounded-xl shadow-lg 
      sm:flex sm:items-center 
      md:flex md:flex-row md:items-start 
      md:justify-between 
     w-4/5 h-4/5 p-6 flex flex-col items-center justify-between"
      >
        <img
          className="md:w-2/4 h-2/5 md:h-full drop-shadow-lg mx-auto rounded-md
        sm:mx-0 sm:shrink-0"
          src={product.image}
          alt={product.name}
        />
        <div
          className="text-left sm:text-left md:flex flex
         flex-col h-2/3 md:pl-4 md:pt-0 items-center 
         justify-between pt-2  md:text-2xl md:h-full 
         md:leading-10 sm:leading-6 sm:text-xl"
        >
          <div
            className="flex flex-col 
          "
          >
            <h1
              className=" text-black text-2xl py-1 
            font-bold lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="flex items-center md:py-2">
              <span className="">⭐</span>
              <span className="text-gray-500 pl-2 font-semibold">
                {product.rating}
              </span>
            </div>
            <p className="text-red-500 font-bold">
              <span className="text-black font-semibold">Price:</span> $
              {product.price}
            </p>
            <p className="text-gray-500 font-medium">
              <span className="text-black font-semibold">Description:</span>{" "}
              {product.description}
            </p>
            <p className="text-gray-500 font-medium">
              <span className="text-black font-semibold">Specifications:</span>
              <ul>
                {product.specifications.map((spec, idx) => (
                  <li key={idx}>{spec}</li>
                ))}
              </ul>
            </p>
          </div>
          <div className="h-[5%] flex items-center justify-center">
            <button
              className="px-4 py-2 text-md text-white 
          font-semibold rounded-full bg-red-600
           hover:bg-red-800 focus:outline-none 
           focus:ring-2 focus:ring-red-600 
           focus:ring-offset-2"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
