import Image from "next/image";
import LatestYoutube from "./components/LatestYoutube";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
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
        </section>

        {/* Latest YouTube Video */}
        <section className="w-full mt-10">
          <LatestYoutube />
        </section>

        {/* Instagram Feed */}
        <section className="w-full mt-12">
          <InstagramFeed />
        </section>
      </main>

      {/* Footer (separate so it stays dark + clean) */}
      <Footer />
    </>
  );
}
