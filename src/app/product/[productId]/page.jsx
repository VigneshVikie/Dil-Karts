"use client";

import Product from "@/components/Product";

const ProductPage = ({ params }) => {
  return (
    <div>
      <Product params={params} />
    </div>
  );
};

export default ProductPage;
