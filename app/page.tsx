import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { BOOKING_URL } from "@/lib/config";

const serviceIcons: Record<string, React.ReactNode> = {
  foot: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  orthotics: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  heel: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  heart: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  nail: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  child: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
};

const trustStats = [
  { value: "3", label: "Clinic Locations" },
  { value: "All ages", label: "Patients Welcome" },
  { value: "Online", label: "Booking Available" },
  { value: "AHPRA", label: "Registered Podiatrist" },
];

const whyUs = [
  {
    title: "Convenient Locations",
    desc: "Three clinics across Perth's south — Lakelands, Halls Head, and Armadale — so quality podiatry is always close to home.",
  },
  {
    title: "Comprehensive Care",
    desc: "From routine nail care and orthotics through to diabetic foot management and ingrown toenail surgery, all under one practitioner.",
  },
  {
    title: "Personal Attention",
    desc: "As an independent podiatrist, Douglas takes time to understand your situation and build a treatment plan that works for you.",
  },
  {
    title: "Easy Online Booking",
    desc: "Book an appointment at your preferred location online — no phone tag, no waiting.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #0d9488 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/10 text-blue-100 border border-white/20 text-sm font-medium px-3 py-1 rounded-full mb-6">
              Serving Perth South · Lakelands · Halls Head · Armadale
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert Foot Care,{" "}
              <span className="text-accent">Closer to Home</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8">
              Douglas Veitch is an experienced, AHPRA-registered podiatrist
              providing comprehensive foot and lower limb care across three
              convenient Perth South locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={BOOKING_URL}
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                Book an Appointment
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustStats.map((s) => (
              <div key={s.label} className="text-center py-1">
                <div className="text-white font-bold text-xl">{s.value}</div>
                <div className="text-blue-300 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive podiatry care covering everyday foot health through
              to complex lower limb conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                  {serviceIcons[s.icon]}
                </div>
                <h3 className="text-lg font-semibold text-brand mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.shortDesc}
                </p>
                <span className="inline-block mt-4 text-accent text-sm font-medium group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
                Why Choose Melville Podiatry?
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re managing a chronic condition, recovering from an
                injury, or just need routine foot care, Douglas provides
                attentive, professional podiatry you can count on.
              </p>
              <div className="space-y-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-gray-400 p-8">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm">Photo of Douglas</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl p-4 shadow-lg hidden md:block">
                <div className="font-bold text-lg">AHPRA</div>
                <div className="text-sm text-green-100">Registered Podiatrist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
              Find Us Near You
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Three convenient clinics across Perth&apos;s south. Find the location
              closest to you and book online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-brand mb-1">
                  {loc.suburb}
                </h3>
                <p className="text-gray-500 text-sm mb-1">{loc.clinic}</p>
                <p className="text-gray-700 text-sm mb-3">
                  {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                </p>
                <a
                  href={`tel:${loc.phone.replace(/\s/g, "")}`}
                  className="text-accent font-medium text-sm hover:underline"
                >
                  {loc.phone}
                </a>
                <div className="mt-4 flex gap-2">
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-gray-200 hover:border-brand text-gray-600 hover:text-brand px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Get Directions
                  </a>
                  <Link
                    href={BOOKING_URL}
                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Book Here
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Meet Douglas Veitch
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Douglas is an AHPRA-registered general podiatrist with a
                  commitment to providing attentive, patient-centred foot care
                  across Perth&apos;s southern suburbs. He brings experience across
                  the full scope of general podiatry — from routine nail care and
                  orthotic prescription through to diabetic foot management and
                  minor nail surgery.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-white text-brand font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  About Douglas →
                </Link>
              </div>
              <div className="bg-brand-dark flex items-center justify-center min-h-48 md:min-h-0">
                <div className="text-center text-blue-400 p-8">
                  <svg className="w-20 h-20 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm opacity-50">Douglas&apos;s photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-green-50 text-lg mb-8">
            Book an appointment online at your preferred location — Lakelands,
            Halls Head, or Armadale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={BOOKING_URL}
              className="bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-green-50 transition-colors"
            >
              Book Online Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
