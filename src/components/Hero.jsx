import Navbar from "./Navbar";
import ItemListing from "./ItemListing";
import { useCart } from "@/data/CartContext";

export default function Hero({ data }) {
  const { cartState } = useCart();

  return (
    <div>
      <Navbar cartItemCount={cartState.cart.length} />
      <ItemListing />
    </div>
  );
}
