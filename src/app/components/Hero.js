import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-8 flex flex-col items-center text-center space-y-4">
      <Image
        src="/logo.png"
        alt="Behind the Saddle Logo"
        width={120}
        height={120}
        className="rounded-full"
      />
      <h1 className="text-3xl font-bold">Behind the Saddle</h1>
      <p className="text-gray-400 max-w-md">
        Bringing you the latest stories and insights from the world of horse racing.
      </p>
      <a
        href="#episodes"
        className="bg-white text-black px-5 py-2 rounded-full font-semibold"
      >
        Listen Now
      </a>
    </div>
  );
}
