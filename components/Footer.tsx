import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-3">Melville Podiatry</div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Expert foot care from Douglas Veitch across Perth&apos;s south, helping patients move better and live pain-free.
            </p>
            <p className="text-blue-200 text-sm mt-3">
              Registered Podiatrist (General)<br />
              Australian Podiatry Association
            </p>
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
