import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";

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
      <section className="bg-brand py-16 md:py-20 border-b-2 border-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-accent/70 hover:text-accent text-xs mb-6 transition-colors tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
          >
            ← All Services
          </Link>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              {service.title}
            </h1>
            <p className="text-white/60 text-lg" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>{service.shortDesc}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-brand/70 leading-relaxed mb-10" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                {service.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-accent/50" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  What to Expect
                </h2>
              </div>
              <ul className="space-y-3 mb-10">
                {service.whatToExpect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-4 h-px bg-accent/50 shrink-0 mt-2.5" />
                    <span className="text-brand/70" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Book CTA */}
              <div className="bg-brand border-2 border-accent/40 p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-6 bg-accent/40" />
                  <h3 className="font-semibold text-sm uppercase tracking-[0.15em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Make an Enquiry
                  </h3>
                </div>
                <p className="text-white/60 text-sm mb-5" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  Available at Lakelands, Halls Head and Armadale. Call your nearest clinic or send a message.
                </p>
                <Link
                  href="/contact"
                  className="block border border-accent text-accent hover:bg-accent hover:text-white font-semibold px-5 py-2.5 text-center text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                >
                  Contact Us
                </Link>
              </div>

              {/* Conditions */}
              <div className="bg-white border border-accent/20 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-6 bg-accent/40" />
                  <h3 className="font-semibold text-brand text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)', color: '#9B7B2E' }}>
                    Conditions Treated
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.conditions.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-brand/70" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      <span className="w-3 h-px bg-accent/50 shrink-0" />
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
        <section className="py-16 bg-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent/50" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                Other Services
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="bg-white border border-accent/20 p-5 hover:border-accent/50 group"
                >
                  <h3 className="font-semibold text-brand mb-1 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                    {s.title}
                  </h3>
                  <p className="text-brand/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
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
