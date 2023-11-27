import { useCart } from "@/data/CartContext";
import Link from "next/link";
import products from "../data/products";


export default function productListing() {
  const { dispatch } = useCart();
  const data = products

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      {data ? (
        <div className="bg-red-100 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {data?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between items-center"
            >
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto h-44 rounded-lg w-max sm:shrink-0 drop-shadow-md"
                />

                <div className="mt-4 h-38 ">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-500 font-medium">
                    {product.description}
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    ${product.price}
                  </p>
                </div>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 mt-4 text-base font-semibold text-white bg-red-500 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
