"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/lib/config";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="text-xl font-bold text-brand">Melville</span>
            <span className="text-xl font-light text-gray-500">Podiatry</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-brand"
                    : "text-gray-600 hover:text-brand"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={BOOKING_URL}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Book Now
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-brand transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={BOOKING_URL}
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-lg text-center mt-3 hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
