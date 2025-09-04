"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container flex items-center justify-between w-full px-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Sai Infra Group"
            width={150}
            height={40}
            priority
            className="h-auto w-auto max-h-10" 
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm ml-auto">
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/projects" className="hover:underline">Projects</Link></li>
          <li><Link href="/team" className="hover:underline">Team</Link></li>
          <li><Link href="/equipment" className="hover:underline">Equipment</Link></li>
          <li><Link href="/financials" className="hover:underline">Financials</Link></li>
          <li><Link href="/contact" className="btn btn-primary">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <ul className="container py-2 grid gap-2 text-sm">
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link href="/team" onClick={() => setOpen(false)}>Team</Link></li>
            <li><Link href="/equipment" onClick={() => setOpen(false)}>Equipment</Link></li>
            <li><Link href="/financials" onClick={() => setOpen(false)}>Financials</Link></li>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center"
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
