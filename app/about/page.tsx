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
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Douglas Veitch
            </h1>
            <p className="text-blue-100 text-lg">
              AHPRA-Registered Podiatrist · Perth South
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-gray-400 p-8">
                <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-sm">Professional photo of Douglas</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-5">
                Experienced, Attentive Podiatric Care
              </h2>
              <div className="prose text-gray-700 space-y-4 leading-relaxed">
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
              <div className="mt-8">
                <h3 className="font-semibold text-brand mb-3">
                  Qualifications & Registration
                </h3>
                <ul className="space-y-2">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand mb-3">
              Douglas&apos;s Approach to Care
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              What you can expect every time you visit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approach.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-brand mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Get in Touch with Douglas
          </h2>
          <p className="text-blue-100 mb-6">
            Appointments available at Lakelands, Halls Head, and Armadale. Call your nearest clinic or send an enquiry.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand font-semibold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
