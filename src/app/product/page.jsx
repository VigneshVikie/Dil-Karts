import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="text-2xl lg:text-6xl text-red-600 w-full h-screen flex flex-col gap-6 items-center justify-center">
        This is not a valid Product Page!!!
        <span className="bg-red-500 lg:text-2xl p-4 rounded-md">
          <Link href="/" className="text-white">
            Go back to Home
          </Link>
        </span>
      </div>
    </>
  );
}
