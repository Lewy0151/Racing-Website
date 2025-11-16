import Image from "next/image";
import Hero from "./components/Hero";
import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#fcbebe] text-black">

      {/* Content container */}
      <div className="flex flex-col items-center px-4 pt-10 flex-grow">
        {/* Logo Section */}
        <section className="flex flex-col items-center text-center">
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

        {/* Optional Hero Section */}
        {/* {Hero && (
          <section className="w-full mt-12">
            <Hero />
          </section>
        )} */}
      </div>

      {/* Instagram Feed Section */}
      <section className="w-full mt-12 mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Follow us on Instagram
        </h2>
        <InstagramFeed />
      </section>
    </main>
  );
}
