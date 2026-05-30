import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Douglas Veitch",
  description:
    "Meet Douglas Veitch, AHPRA-registered podiatrist serving Lakelands, Halls Head and Armadale in Perth's south.",
};

const credentials = [
  "AHPRA-Registered Podiatrist",
  "Member, Australian Podiatry Association",
  "Registered Podiatrist (General)",
  "Practising across Perth South",
];

const approach = [
  {
    title: "Patient-Centred Care",
    desc: "Every patient is different. Douglas takes time to understand your specific concerns, lifestyle and goals before recommending a course of treatment.",
  },
  {
    title: "Clear Communication",
    desc: "You'll always leave knowing exactly what's happening with your feet, what the treatment involves, and what to expect.",
  },
  {
    title: "Ongoing Support",
    desc: "Foot health is an ongoing commitment. Douglas provides follow-up and monitoring to make sure treatment is working and adjust as needed.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 md:py-24 border-b-2 border-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/40" />
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              About
            </p>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Douglas Veitch
            </h1>
            <p className="text-white/60 text-lg tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              AHPRA-Registered Podiatrist · Perth South
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="border-2 border-accent/25 overflow-hidden aspect-[3/4] flex items-center justify-center bg-warm">
              <div className="text-center p-8" style={{ color: '#9B7B2E' }}>
                <svg className="w-20 h-20 mx-auto mb-3 opacity-25" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-sm opacity-40 tracking-widest uppercase" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Professional photo of Douglas</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-5" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                Experienced, Attentive Podiatric Care
              </h2>
              <div className="space-y-4 leading-relaxed text-brand/70" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                <p>
                  Douglas Veitch is an AHPRA-registered general podiatrist with
                  a broad scope of practice covering the full range of everyday
                  and complex foot conditions. He currently consults across three
                  clinics in Perth&apos;s south — Lakelands, Halls Head, and
                  Armadale — making quality podiatry accessible to patients
                  across the region.
                </p>
                <p>
                  Douglas takes a patient-centred approach to care: thorough
                  assessments, clear explanations, and treatment plans built
                  around your individual needs and lifestyle — not a one-size-fits-all
                  protocol.
                </p>
                <p>
                  His scope covers general podiatry and nail care, custom
                  orthotic prescription, heel and arch pain, diabetic foot
                  management, ingrown toenail treatment (including minor nail
                  surgery), and paediatric podiatry.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 border-t border-accent/20 pt-6">
                <h3 className="font-semibold text-brand mb-4 text-xs uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)', color: '#9B7B2E' }}>
                  Qualifications &amp; Registration
                </h3>
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-brand/70 text-sm" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      <div className="w-4 h-px bg-accent/50 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Approach</span>
              <div className="h-px w-8 bg-accent/50" />
            </div>
            <h2 className="text-3xl font-bold text-brand mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Douglas&apos;s Approach to Care
            </h2>
            <p className="text-brand/60 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              What you can expect every time you visit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="bg-white p-6 border border-accent/20">
                <div className="w-8 h-0.5 bg-accent/50 mb-4" />
                <h3 className="font-semibold text-brand mb-2" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{item.title}</h3>
                <p className="text-brand/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand border-t-2 border-accent/40">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent/40" />
            <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
            <div className="h-px w-10 bg-accent/40" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
            Get in Touch with Douglas
          </h2>
          <p className="text-white/60 mb-6" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
            Appointments available at Lakelands, Halls Head, and Armadale. Call your nearest clinic or send an enquiry.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-3.5 tracking-widest uppercase text-sm"
            style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
