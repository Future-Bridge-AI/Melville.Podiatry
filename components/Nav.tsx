"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/lib/config";
import { locations } from "@/lib/locations";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const primaryPhone = locations[0].phone;

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-brand-dark hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9 text-xs text-blue-200">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                AHPRA Registered Podiatrist
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Australian Podiatry Association Member
              </span>
            </div>
            <div className="flex items-center gap-5">
              {locations.map((l) => (
                <a
                  key={l.id}
                  href={`tel:${l.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <PhoneIcon />
                  {l.suburb}: {l.phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-brand leading-none block">Melville Podiatry</span>
                <span className="text-xs text-gray-400 leading-none">Perth South</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium pb-0.5 transition-colors ${
                    pathname === l.href
                      ? "text-brand border-b-2 border-accent"
                      : "text-gray-600 hover:text-brand border-b-2 border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-accent"
              >
                <PhoneIcon />
                {primaryPhone}
              </a>
              <Link
                href={BOOKING_URL}
                className="bg-accent hover:bg-teal-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm"
              >
                Book Now
              </Link>
            </nav>

            {/* Mobile right side */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href={`tel:${primaryPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-1 text-sm font-semibold text-brand"
                aria-label={`Call ${primaryPhone}`}
              >
                <PhoneIcon />
              </a>
              <button
                className="p-2 text-gray-600 hover:text-brand"
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
          </div>

          {/* Mobile menu */}
          {open && (
            <nav className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium py-2.5 px-3 rounded-lg hover:bg-gray-50"
                >
                  {l.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-3 space-y-2">
                {locations.map((l) => (
                  <a
                    key={l.id}
                    href={`tel:${l.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-brand font-medium px-3 py-1.5"
                  >
                    <PhoneIcon />
                    {l.suburb}: {l.phone}
                  </a>
                ))}
              </div>
              <Link
                href={BOOKING_URL}
                onClick={() => setOpen(false)}
                className="bg-accent text-white font-semibold px-4 py-3 rounded-lg text-center mt-2"
              >
                Book an Appointment
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
