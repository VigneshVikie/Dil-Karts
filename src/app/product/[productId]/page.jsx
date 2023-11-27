"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Product from "@/components/Product";
// import  fetchProductById  from "../data/products";

const ProductPage = ({ params }) => {
  // const router = useRouter();
  // const { productId } = router.query;
  // console.log(params.productId)

  return (
    <div>
      {/* <h1>Product Page</h1> */}
      <Product params={params} />
      {/* <ProductCard params={params} /> */}
    </div>
  );
};

export default ProductPage;
