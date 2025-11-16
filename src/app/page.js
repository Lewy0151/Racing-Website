
import Image from "next/image";
import Hero from "./components/Hero"; 

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fcbebe] text-black">
      
    

      {/* Logo Section */}
      <section className="mt-10 flex flex-col items-center text-center px-4">
        <Image
          src="/Behind The Saddle.png"
          alt="Behind the Saddle logo"
          width={400}
          height={400}
          className="w-64 sm:w-80 md:w-[400px] h-auto object-contain"
        />
        <h1 className="mt-4 text-3xl font-semibold tracking-wide">
          Behind the Saddle
        </h1>
      </section>
    </main>
  );
}
