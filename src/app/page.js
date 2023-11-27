"use client";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import products from "../data/products";
import { CartProvider } from "@/data/CartContext";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setData(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [products]);

  return (
    <CartProvider>
      <Hero data={data} />
    </CartProvider>
  );
}
