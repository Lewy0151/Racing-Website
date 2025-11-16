"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[#fb9292] shadow-lg shadow-[#e0a6a6] z-50 text-[#fa5555]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">

        {/* MOBILE: animated hamburger */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-black transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* SITE NAME */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide uppercase md:text-xl text-[#fa5555] "
        >
          Behind the Saddle
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 text-sm text-[#fa5555] font-medium">
          <Link href="/" className="hover:text-gray-600 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-600 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
        </div>
      </div>

      {/* MOBILE MENU animated dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-[#fcbebe] border-t border-[#fb9292] px-4 py-3 space-y-2">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
