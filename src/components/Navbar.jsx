import { BsBagHeartFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-row w-full bg-red-500 p-4 sticky top-0">
      <div className=" lg:hidden  ">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center flex-shrink-0 text-white md:justify-center lg:justify-start">
        <span className="font-extrabold text-4xl tracking-tight cursor-pointer">
          Dil Karts
        </span>
      </div>

      <div className=" flex-grow lg:flex lg:items-center lg:w-auto lg:text-center md:hidden">
        <div className="text-lg font-bold lg:flex-grow flex gap-4 justify-center">
          <Link href="#" className="text-red-200 hover:text-white">
            Home
          </Link>
          <Link href="#" className="text-red-200 hover:text-white">
            Shop
          </Link>
          <Link href="#" className="text-red-200 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className=" text-3xl pr-3 cursor-pointer text-white ">
          <BsBagHeartFill />
        </div>
        <span className="absolute top-1 right-0 bg-white rounded-full w-4 h-5 text-sm text-center">0</span>
      </div>
    </nav>
  );
}
