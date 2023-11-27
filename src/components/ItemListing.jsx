export default function productListing({ data }) {
  return (
    <>
      {data ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {data?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between items-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-44 rounded-lg w-max sm:mx-0 sm:shrink-0 ]"
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
              <button className="px-4 py-2 mt-4 text-base font-semibold text-white bg-red-500 rounded-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-6xl text-red-600 w-full h-screen flex items-center justify-center">
          Loading...
        </p>
      )}
    </>
  );
}
