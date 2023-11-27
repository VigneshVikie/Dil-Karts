import Navbar from "./Navbar";
import ItemListing from "./ItemListing";
import { useCart } from "@/data/CartContext";

export default function Hero({data}) {
  const { state } = useCart();

  return (
    <div>
     <Navbar cartItemCount={state.cart.length}/>
     <ItemListing data={data}/>
    </div>
  );
}
