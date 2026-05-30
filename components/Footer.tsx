import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-white/15 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <span className="text-lg font-bold">Melville Podiatry</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Expert foot care from Douglas Veitch across Perth&apos;s south, helping patients move better and live pain-free.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["AHPRA", "APA Member"].map((b) => (
                <span key={b} className="bg-white/10 border border-white/15 text-blue-100 text-xs px-2.5 py-1 rounded-md">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-3">
              {locations.map((l) => (
                <li key={l.id}>
                  <p className="text-white text-sm font-medium">{l.suburb}</p>
                  <p className="text-blue-200 text-sm">{l.clinic}</p>
                  <a
                    href={`tel:${l.phone.replace(/\s/g, '')}`}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {l.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Douglas' },
                { href: '/services', label: 'All Services' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/contact#book', label: 'Book Appointment' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Melville Podiatry. All rights reserved.</p>
          <p>Mr Douglas Robert Veitch · Registered Podiatrist</p>
        </div>
      </div>
    </footer>
  );
}
