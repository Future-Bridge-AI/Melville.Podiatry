import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { BOOKING_URL } from "@/lib/config";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All Services
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-blue-100 text-lg">{service.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-gray-700 leading-relaxed mb-10">
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <h2 className="text-xl font-bold text-brand mb-4">
                What to Expect
              </h2>
              <ul className="space-y-3 mb-10">
                {service.whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Book CTA */}
              <div className="bg-brand rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">
                  Book an Appointment
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Available at Lakelands, Halls Head and Armadale.
                </p>
                <Link
                  href={BOOKING_URL}
                  className="block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-5 py-2.5 rounded-lg text-center transition-colors"
                >
                  Book Online
                </Link>
                <Link
                  href="/contact"
                  className="block border border-white/30 hover:border-white text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center mt-2 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Conditions */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-brand mb-3">
                  Conditions Treated
                </h3>
                <ul className="space-y-2">
                  {service.conditions.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand mb-6">
              Other Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group"
                >
                  <h3 className="font-semibold text-brand mb-1 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
