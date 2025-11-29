"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("error");
    }
  }

  function updateField(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <main className="min-h-screen bg-[#fcbebe] text-white tracking-widest flex flex-col items-center px-6 py-10">

        <h1 className="text-3xl heading-font text-[#fa5555] tracking-widest mb-6">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[#fb9292] p-6 rounded-xl shadow-md flex flex-col gap-4 relative"
        >
          {/* SUCCESS POPUP */}
          {status === "success" && (
            <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg animate-[fadeInScale_0.4s_ease-out]">
              ✓ Message Sent!
            </div>
          )}

          {/* INPUTS */}
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Your Name"
            className="border-2 p-3 rounded-md text-white bg-transparent focus:outline-none focus:border-white"
            required
          />

          <input
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="Your Email"
            type="email"
            className="border-2 p-3 rounded-md text-white bg-transparent focus:outline-none focus:border-white"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Message..."
            rows="5"
            className="border-2 p-3 rounded-md text-white bg-transparent focus:outline-none focus:border-white"
            required
          />

          <button
            type="submit"
            className="bg-[#fa5555] hover:bg-white hover:text-[#fa5555] text-white py-3 rounded-full heading-font tracking-widest uppercase transition-all"
          >
            Send Message
          </button>

          {/* LOADING */}
          {status === "loading" && (
            <p className="text-white animate-pulse text-center">Sending...</p>
          )}

          {/* ERROR */}
          {status === "error" && (
            <p className="text-red-800 bg-red-200 rounded-md px-3 py-2 text-center">
              Something went wrong.
            </p>
          )}
        </form>

        <div className="text-center mt-10">
          <p className="text-[#fa5555] text-2xl heading-font tracking-widest">
            Behind the Saddle
          </p>
          <p className="text-white text-lg mt-2">
            Behindthesaddle25@gmail.com
          </p>
        </div>

        {/* KEYFRAMES */}
        <style jsx>{`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: translate(-50%, -10px) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, 0) scale(1);
            }
          }

          /* Autofill Fix */
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill,
          textarea:-webkit-autofill:hover,
          textarea:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px #fb9292 inset !important;
            -webkit-text-fill-color: white !important;
            border: 2px solid white !important;
            caret-color: white !important;
            transition: background-color 9999s ease-in-out 0s;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
