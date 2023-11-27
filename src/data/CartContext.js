import React, { createContext, useReducer, useContext } from "react";

// Define the initial state for the cart
const initialState = {
  cart: [],
};
// Create the context
const CartContext = createContext();

// Define the reducer function to update the state based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        // If the product is in the cart, update its quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    // Add more cases for other actions as needed

    default:
      return state;
  }
};

// Create a custom hook to simplify the useContext pattern
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
