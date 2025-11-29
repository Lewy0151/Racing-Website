"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t border-[#fa5555] bg-[#fb9292] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Social Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#fa5555]">Follow Us</h3>

          <a
            href="https://www.instagram.com/behindthesaddle_/"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#fa5555] transition hover:underline underline-offset-4 decoration-[#fa5555]"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@BehindTheSaddle25"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#fa5555] transition hover:underline underline-offset-4 decoration-[#fa5555]"
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/show/4wSYuUDXMOMAS7qE4N8iV1"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[#fa5555] transition hover:underline underline-offset-4 decoration-[#fa5555]"
          >
            Spotify
          </a>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#fa5555]">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="/" 
                className="hover:text-[#fa5555] hover:underline underline-offset-4 decoration-[#fa5555] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="hover:text-[#fa5555] hover:underline underline-offset-4 decoration-[#fa5555] transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="hover:text-[#fa5555] hover:underline underline-offset-4 decoration-[#fa5555] transition"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Branding / Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#fa5555]">Behind the Saddle</h3>
          <p className="text-white">
            Horse racing and equestrian content, insights, and behind-the-scenes stories.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-[#fa5555] text-sm border-t border-[#fa5555] pt-6">
        © {new Date().getFullYear()} Behind the Saddle. All rights reserved.
      </div>
    </footer>
  );
}
