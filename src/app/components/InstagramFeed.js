"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/behindthesaddle_/";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center my-12 px-4">

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 bg-[#fa5555] hover:bg-[#fb9292] transition-all shadow-md text-white px-6 py-3 rounded-full text-lg border border-[#fb9292]"
      >
        Follow us on Instagram
      </a>

      {/* Responsive LightWidget iframe */}
      <div className="w-full max-w-[1024px]">
        <iframe
          src="//lightwidget.com/widgets/f4467889108250e38af602e47e68e0fb.html"
          scrolling="no"
          allowtransparency="true"
          className="w-full h-[450px] md:h-[400px] border-0 overflow-hidden"
        ></iframe>
      </div>
    </div>
  );
}
