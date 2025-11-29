"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/behindthesaddle_/";

  useEffect(() => {
    // Only append the LightWidget script if it hasn't been added yet
    if (!document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-12 px-4">

      {/* Instagram Button */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 bg-[#fa5555] hover:bg-[#fb9292] transition-all shadow-md text-white px-6 py-3 rounded-full text-lg heading-font tracking-widest uppercase border border-[#fb9292]"
      >
        Follow us on Instagram
      </a>

      {/* LightWidget iframe */}
      <div className="w-full max-w-[1024px]">
        <iframe
          src="https://cdn.lightwidget.com/widgets/f4467889108250e38af602e47e68e0fb.html"
          scrolling="no"
          allowtransparency="true"
          className="w-full h-[450px] md:h-[400px] border-0 overflow-hidden rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
