"use client";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<nav className="container flex items-center w-full px-4 py-8 justify-between h-14">
<Link href="/" className="font-bold text-lg">Sai Infra Group</Link>
<button aria-label="Toggle menu" className="md:hidden p-2" onClick={() => setOpen(!open)}>
<span className="sr-only">Toggle menu</span>
☰
</button>
<ul className="hidden md:flex items-center gap-6 text-sm">
<li><a href="/about" className="hover:underline">About</a></li>
<li><a href="/projects" className="hover:underline">Projects</a></li>
<li><a href="/team" className="hover:underline">Team</a></li>
<li><a href="/equipment" className="hover:underline">Equipment</a></li>
<li><a href="/financials" className="hover:underline">Financials</a></li>
<li><Link href="/contact" className="btn btn-primary">Contact</Link></li>
</ul>
</nav>
{open && (
<div className="md:hidden border-t border-gray-200">
<ul className="container py-2 grid gap-2 text-sm">
<li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
<li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
<li><a href="#team" onClick={() => setOpen(false)}>Team</a></li>
<li><a href="#equipment" onClick={() => setOpen(false)}>Equipment</a></li>
<li><a href="#financials" onClick={() => setOpen(false)}>Financials</a></li>
<li><Link href="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full justify-center">Contact</Link></li>
</ul>
</div>
)}
</header>
);
}