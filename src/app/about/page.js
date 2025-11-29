"use client";

import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fcbebe] text-white tracking-widest px-6 py-12 flex flex-col items-center">

        <h1 className="text-4xl heading-font text-[#fa5555] uppercase tracking-widest mb-10">
          About
        </h1>

        {/* Text Block */}
        <section className="max-w-4xl w-full flex flex-col gap-10 animate-[fadeIn_0.6s_ease-out]">
          <div className="bg-[#fb9292] p-6 rounded-xl shadow-md leading-relaxed text-white">
            <p className="mb-4">
              <span className="font-semibold">Behind the Saddle</span> is a
              community-driven media channel and podcast dedicated to uncovering
              the untold stories within horse racing and the wider equestrian
              world. We shine a spotlight on the incredible individuals who make
              the industry run — the stable staff, trainers, physios, vets,
              instructors, clippers, and many others whose work often goes
              unseen but is vital to the wellbeing of horses and the success of
              the sport.
            </p>

            <p className="mb-4">
              Our mission is to educate, inspire, and give long-overdue
              recognition to these unsung heroes while supporting local riding
              schools and equestrian organisations across the UK. Whether you’re
              deeply involved in the horse world or simply passionate about the
              stories behind it, Behind the Saddle brings you closer to the
              people, passion, and dedication that drive the industry.
            </p>

            <p>
              We also explore the professional side of racing, travelling up and
              down racecourses across the country to interview rising jockeys,
              race-day staff, and countless individuals whose contributions
              deserve to be heard. Behind the Saddle gives them a platform to
              share their journeys, experiences, and the reality of life behind
              the scenes.
            </p>
          </div>

          {/* Images Block */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
            <Image
              src="/BTS1.jpg"
              width={600}
              height={400}
              alt="Behind the Saddle Image 1"
              className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
            />
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <Image
                src="/BTS2.jpg"
                width={600}
                height={400}
                alt="Behind the Saddle Image 2"
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <Image
                src="/BTS-3.jpg"
                width={600}
                height={400}
                alt="Behind the Saddle Image 3"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
