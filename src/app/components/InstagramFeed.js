"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // Load LightWidget script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-12">
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
