"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
  <nav className="container mx-auto flex items-center justify-between h-20 px-4 md:h-24">
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="Sai Infra Group"
        width={190}
        height={900}
        priority
        className="h-auto w-auto max-h-16 sm:max-h-20 md:max-h-24"
      />
    </Link>

    {/* Mobile menu toggle */}
    <button
      aria-label="Toggle menu"
      className="md:hidden p-2 text-2xl focus:outline-none"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>

    {/* Desktop menu */}
    <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium ml-auto">
      <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
      <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
      <li><Link href="/team" className="hover:text-blue-600">Team</Link></li>
      <li><Link href="/equipment" className="hover:text-blue-600">Equipment</Link></li>
      <li><Link href="/financials" className="hover:text-blue-600">Financials</Link></li>
      <li>
        <Link href="/contact" className="btn btn-primary px-4 py-1.5">
          Contact
        </Link>
      </li>
    </ul>
  </nav>

  {/* Mobile menu */}
  {open && (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <ul className="flex flex-col gap-2 p-4">
        <li><Link href="/about" onClick={() => setOpen(false)} className="block w-full py-2">About</Link></li>
        <li><Link href="/projects" onClick={() => setOpen(false)} className="block w-full py-2">Projects</Link></li>
        <li><Link href="/team" onClick={() => setOpen(false)} className="block w-full py-2">Team</Link></li>
        <li><Link href="/equipment" onClick={() => setOpen(false)} className="block w-full py-2">Equipment</Link></li>
        <li><Link href="/financials" onClick={() => setOpen(false)} className="block w-full py-2">Financials</Link></li>
        <li>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary w-full text-center py-2"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )}
</header>

  );
}
