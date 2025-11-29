"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setOpen(!open);

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fcbebe] border-b border-[#fb9292] shadow-lg shadow-[#e0a6a6] z-50 text-[#fa5555]">
      
      {/* Desktop layout */}
      <div className="hidden md:flex flex-col items-center max-w-6xl mx-auto px-4 py-4">
        {/* Site Name */}
        <Link
          href="/"
          className="text-4xl tracking-widest uppercase heading-font mb-6 text-[#fa5555]"
        >
          Behind the Saddle
        </Link>

        {/* Desktop Menu */}
        <div className="flex space-x-10 text-m font-medium uppercase pb-4">
          <Link
            href="/"
            className={`hover:text-[#fb9292] transition ${isActive("/") ? "border-b-2 border-[#fa5555]" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#fb9292] transition ${isActive("/about") ? "border-b-2 border-[#fa5555]" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`hover:text-[#fb9292] transition ${isActive("/contact") ? "border-b-2 border-[#fa5555]" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        {/* Mobile Hamburger */}
        <button
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full bg-[#fa5555] transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[#fa5555] transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[#fa5555] transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Site Name */}
        <Link
          href="/"
          className="text-2xl tracking-widest heading-font uppercase text-[#fa5555]"
        >
          Behind the Saddle
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col bg-[#fcbebe] border-t border-[#fb9292] px-4 py-3 space-y-6">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
