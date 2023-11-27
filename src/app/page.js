"use client";
import Hero from "@/components/Hero";
import { useState, useEffect } from "react";
import products from "../data/products";
import ItemListing from "@/components/ItemListing";

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
    console.log("datafetched");
    fetchData();
  }, [products]);

  return (
    <>
      <Hero data={data} />
    </>
  );
}
