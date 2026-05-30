import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive podiatry services from Douglas Veitch — general care, orthotics, heel pain, diabetic foot care, ingrown toenail treatment and children's podiatry.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand py-16 md:py-20 border-b-2 border-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/40" />
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Services
            </p>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Comprehensive Podiatry Care
            </h1>
            <p className="text-white/60 text-lg" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              From routine foot maintenance to complex lower limb conditions —
              Douglas provides care across the full scope of general podiatry
              practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-accent/20 hover:border-accent/50 group overflow-hidden"
              >
                <div className="h-0.5 bg-accent/20 group-hover:bg-accent transition-colors" />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-brand mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                    {s.title}
                  </h2>
                  <p className="text-brand/60 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    {s.shortDesc}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-accent/70" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      Conditions treated
                    </p>
                    <ul className="space-y-1">
                      {s.conditions.slice(0, 3).map((c) => (
                        <li key={c} className="text-sm text-brand/60 flex items-center gap-2" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                          <span className="w-3 h-px bg-accent/50 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-accent text-xs font-medium tracking-widest uppercase group-hover:underline" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand border-t-2 border-accent/40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/40" />
            <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
            <div className="h-px w-10 bg-accent/40" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/60 mb-6" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
            Give us a call or send an enquiry — Douglas will assess your feet and recommend the right treatment plan.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3.5 tracking-widest uppercase text-sm"
            style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
