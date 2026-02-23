"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-green-500 via-yellow-400 to-pink-400 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          IQ Point
        </h1>

        {/* Links */}
        <div className="flex gap-6 items-center">

          <Link href="/" className="text-white font-semibold hover:scale-110 transition">
            Home
          </Link>

          <Link href="/practice" className="text-white font-semibold hover:scale-110 transition">
            Practice
          </Link>

          <Link href="/resources" className="text-white font-semibold hover:scale-110 transition">
            Resources
          </Link>

          <Link href="/community" className="text-white font-semibold hover:scale-110 transition">
            Community
          </Link>

          {/* WhatsApp Button */}
          <a
            href="https://chat.whatsapp.com/JaTMhWxIBM0EY5out6HWLB"
            target="_blank"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            Join WhatsApp
          </a>

        </div>
      </div>
    </nav>
  );
}
