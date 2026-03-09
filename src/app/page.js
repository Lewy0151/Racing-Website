import Image from "next/image"; 
import LatestYoutube from "./components/LatestYoutube";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-start min-h-screen bg-[#fcbebe] text-black">

        {/* Logo Section */}
        <section className="flex flex-col items-center text-center px-4 mt-16 sm:mt-20 w-full">
          <Image
            src="/BTS.PNG"
            alt="Behind the Saddle logo"
            width={450}
            height={450}
            className="w-72 sm:w-96 md:w-[450px] h-auto object-contain"
            priority
          />

          {/* Sponsored Container */}
          <a
            href="https://maccridingclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 bg-[#fa5555] hover:bg-[#fb9292] transition-all shadow-md 
              text-white px-6 py-3 rounded-full text-lg heading-font tracking-widest uppercase 
              border border-[#fb9292]"
          >
            Sponsored by Macclesfield" & "District Riding Club
          </a>

          {/* Tagline Text */}
          <p className="text-base font-bold text-[#fa5555] max-w-md mt-2 sm:mt-4">
            Behind the Saddle brings you horse racing and equestrian content, insights, and behind-the-scenes stories.
          </p>
        </section>

        {/* Horizontal Line */}
        <div className="w-full mt-20 mb-10">
          <hr className="border-t-8 border-[#fa5555] w-full" />
        </div>

        {/* Latest YouTube Video */}
        <section className="w-full mt-10">
          <LatestYoutube />
        </section>

        {/* Instagram Feed */}
        <section className="w-full mt-12">
          <InstagramFeed />
        </section>
      </main>

      <Footer />
    </>
  );
}
