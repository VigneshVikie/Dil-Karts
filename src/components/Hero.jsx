import Navbar from "./Navbar";
import ItemListing from "./ItemListing";

export default function Hero({data}) {
  return (
    <div>
     <Navbar/>
     <ItemListing data={data}/>
    </div>
  );
}
