import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t-4 border-accent/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Ornamental header rule */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-accent/25" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Melville Podiatry
            </span>
            <div className="w-1.5 h-1.5 bg-accent rotate-45" />
          </div>
          <div className="h-px flex-1 bg-accent/25" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#C4A96A' }}>
              Expert foot care from Douglas Veitch across Perth&apos;s south, helping patients move better and live pain-free.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["AHPRA", "APA Member"].map((b) => (
                <span key={b} className="border border-accent/40 text-xs px-2.5 py-1 tracking-wider uppercase" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)', fontSize: '0.65rem' }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent text-xs tracking-[0.15em] uppercase border-b border-accent/20 pb-2" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent text-xs tracking-[0.15em] uppercase border-b border-accent/20 pb-2" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Locations
            </h3>
            <ul className="space-y-3">
              {locations.map((l) => (
                <li key={l.id}>
                  <p className="text-white text-sm font-medium">{l.suburb}</p>
                  <p className="text-white/50 text-xs">{l.clinic}</p>
                  <a
                    href={`tel:${l.phone.replace(/\s/g, '')}`}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                  >
                    {l.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent text-xs tracking-[0.15em] uppercase border-b border-accent/20 pb-2" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Douglas' },
                { href: '/services', label: 'All Services' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/contact', label: 'Get in Touch' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ornamental footer rule */}
        <div className="flex items-center gap-4 mt-10 mb-6">
          <div className="h-px flex-1 bg-accent/20" />
          <div className="w-1.5 h-1.5 bg-accent/40 rotate-45" />
          <div className="h-px flex-1 bg-accent/20" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs tracking-wide" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
          <p>© {new Date().getFullYear()} Melville Podiatry. All rights reserved.</p>
          <p>Mr Douglas Robert Veitch · Registered Podiatrist</p>
        </div>
      </div>
    </footer>
  );
}
