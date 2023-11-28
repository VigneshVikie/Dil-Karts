"use client";
import { Formik, Form, Field } from "formik";
import { useCart } from "@/data/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const { cartState, updateCart } = useCart();
  const { cart } = cartState;
  const router = useRouter();

  const calculateTotalPrice = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  };
  return (
    <div className="bg-red-100 h-screen flex items-center justify-center">
      <div className="w-11/12 sm:w-1/2 lg:w-2/6 mx-auto p-4 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          Order Summary
        </h2>
        {cart.map((item, idx) => (
          <p className="text-gray-600 mb-4 font-medium">
            <span className="text-lg font-semibold">{item.name}</span> : $
            {item.price}
          </p>
        ))}
        <div className="flex items-center justify-center">
          <p
            className=" w-full text-xl text-center 
            font-semibold px-8 py-4  bg-red-200 
            rounded-full sm:w-80"
          >
            Total Price: ${calculateTotalPrice()}
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-red-600">
          Payment Details
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            address: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
          }}
          onSubmit={(values, actions) => {
            alert("Form submitted.");
            router.push("/");
            updateCart([]);
          }}
        >
          <Form>
            <div className="mb-4 ">
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-md font-medium text-gray-700"
              >
                Address:
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-md font-medium text-gray-700"
              >
                Card Number:
              </label>
              <Field
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="expiryDate"
                className="block text-md font-medium text-gray-700"
              >
                Expiry Date:
              </label>
              <Field
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-md font-medium text-gray-700"
              >
                CVV:
              </label>
              <Field
                type="text"
                id="cvv"
                name="cvv"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white font-bold text-lg rounded-full 
              py-3 px-7 hover:bg-red-800 focus:outline-none focus:ring-2
               focus:ring-red-600 focus:ring-offset-2"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
