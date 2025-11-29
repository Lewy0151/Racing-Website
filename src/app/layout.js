import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Behind The Saddle",
  description: "Horse racing media & podcast channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fcbebe] text-[#111] antialiased">

        {/* Sticky Navbar */}
        <Navbar />

        <main className="pt-28 md:pt-32">
          {children}
        </main>

      </body>
    </html>
  );
}
