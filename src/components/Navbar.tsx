"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#visi-misi", label: "Visi & Misi" },
  { href: "/#bidang-usaha", label: "Bidang Usaha" },
  { href: "/#legalitas", label: "Legalitas" },
  { href: "/#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy-950/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Logo PT Citra Sinar Niaga" width={48} height={43} priority />
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold tracking-[0.25em] text-gold-400">PT</span>
            <span className="block text-base font-bold tracking-wide text-white">CITRA SINAR NIAGA</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-white/80 transition hover:text-gold-400">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md p-2 text-white md:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-5 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/90 hover:text-gold-400"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
