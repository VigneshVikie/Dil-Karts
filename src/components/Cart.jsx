"use client";
import { useCart } from "@/data/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { cartState, updateCart } = useCart();
  const { cart } = cartState;
  const router = useRouter();

  const handleIncrease = (item) => {
    const existingProduct = cart.find((cartItem) => cartItem.id === item.id);

    if (existingProduct) {
      updateCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    updateCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your Cart is empty. Please add items.");
      router.push("/");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <>
      <div className="bg-red-100 flex flex-col justify-between h-screen p-4">
        <div className="h-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full font-bold sm:text-3xl">
              <p className="p-8">Your Cart is empty. Please add items.</p>
              <Link href="/">
                <span className="bg-red-500 sm:text-2xl p-4 rounded-md text-white">
                  Continue Shopping
                </span>
              </Link>
            </div>
          ) : (
            <>
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white rounded-md shadow-md p-4 mt-2 "
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
                      <button
                        className="ml-2 text-red-500 font-semibold"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="flex sm:flex-row flex-col justify-end items-center ">
          <p
            className=" w-full text-xl text-center 
            font-semibold px-8 py-4  bg-red-200 
            rounded-full sm:w-80"
          >
            Total Price: ${calculateTotalPrice()}
          </p>
          <button
            className="w-full m-4 px-8 py-4
             text-xl sm:text-2xl sm:w-80 font-semibold
              bg-red-500 text-white rounded-full"
            onClick={handleCheckout}
          >
            CheckOut Now
          </button>
        </div>
      </div>
    </>
  );
}
