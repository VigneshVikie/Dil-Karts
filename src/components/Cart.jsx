"use client";

import { useState } from "react";
import { useCart } from "@/data/CartContext";

export default function Cart() {
  const { state, dispatch } = useCart();
  const { cart } = state;
  const handleIncrease = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCart = [...cart];

    updatedCart[itemIndex] = {
      ...item,
      quantity: item.quantity + 1,
    };

    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      const updatedCart = [...cart];

      updatedCart[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      dispatch({ type: "UPDATE_CART", payload: updatedCart });
    }
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };

  return (
    <>
      {cart ? (
        <div className="bg-red-100 flex flex-col 
        justify-between h-screen p-4">
          <div>
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white 
                rounded-md shadow-md p-4 mt-2 "
              >
                <img
                  className="w-44 h-32 rounded-lg mr-4"
                  src={item.image}
                  alt={item.name}
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">{item.price}</p>
                  <p className="text-gray-500">{item.description}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="p-2 rounded-full bg-red-500 text-white mr-2"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <p className="font-semibold">{item.quantity}</p>
                    <button
                      className="p-2 rounded-full bg-red-500 text-white ml-2"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex sm:flex-row flex-col justify-end items-center ">
            <p className=" w-full text-xl text-center 
            font-semibold px-8 py-4  bg-red-200 
            rounded-full sm:w-80">
              Total Price: ${calculateTotalPrice()}
            </p>
            <button className="w-full m-4 px-8 py-4
             text-xl sm:text-2xl sm:w-80 font-semibold
              bg-red-500 text-white rounded-full">
              CheckOut Now
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
