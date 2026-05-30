import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive podiatry services from Douglas Veitch — general care, orthotics, heel pain, diabetic foot care, ingrown toenail treatment and children's podiatry.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Podiatry Care
            </h1>
            <p className="text-blue-100 text-lg">
              From routine foot maintenance to complex lower limb conditions —
              Douglas provides care across the full scope of general podiatry
              practice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <h2 className="text-lg font-semibold text-brand mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {s.shortDesc}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Conditions treated
                  </p>
                  <ul className="space-y-1">
                    {s.conditions.slice(0, 3).map((c) => (
                      <li key={c} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-accent text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-blue-100 mb-6">
            Book a general consultation and Douglas will assess your feet and
            recommend the right treatment plan.
          </p>
          <Link
            href={BOOKING_URL}
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
