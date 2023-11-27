import { useState } from 'react';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-md shadow-md p-4">
      <img
        className="w-20 h-20 mr-4"
        src="product-image.jpg"
        alt="Product Image"
      />
      <div>
        <h3 className="text-lg font-semibold">Product Name</h3>
        <p className="text-gray-500">Product Description</p>
        <div className="flex items-center mt-2">
          <button
            className="p-2 rounded-full bg-red-500 text-white mr-2"
            onClick={handleDecrease}
          >
            -
          </button>
          <p className="font-semibold">{quantity}</p>
          <button
            className="p-2 rounded-full bg-red-500 text-white ml-2"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}