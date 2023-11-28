"use client";

import { createContext, useContext, useState } from "react";

const initialState = {
  cart: [],
};
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(initialState);

  const addToCart = (product) => {
    const existingProduct = cartState.cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCartState((prev) => ({
        ...prev,
        cart: prev.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }));
    } else {
      setCartState((prev) => ({
        ...prev,
        cart: [...prev.cart, { ...product, quantity: 1 }],
      }));
    }
  };

  const updateCart = (newCart) => {
    setCartState((prev) => ({
      ...prev,
      cart: newCart,
    }));
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
