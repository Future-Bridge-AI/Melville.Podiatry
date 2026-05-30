import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { BOOKING_URL } from "@/lib/config";

/* ─── Icons ────────────────────────────────────────────────── */
const serviceIcons: Record<string, React.ReactNode> = {
  foot: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  orthotics: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  heel: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  nail: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5" />
    </svg>
  ),
  child: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
};

/* ─── Data ──────────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Lakelands",
    quote:
      "I've been seeing Douglas for two years now for custom orthotics. He always takes the time to properly assess what's going on and explain it clearly. My knee pain has improved significantly.",
    initials: "SM",
  },
  {
    name: "James T.",
    suburb: "Armadale",
    quote:
      "Fantastic care for my plantar fasciitis. Douglas identified the issue quickly and the treatment worked. After months of pain I'm back to walking without any discomfort.",
    initials: "JT",
  },
  {
    name: "Michelle K.",
    suburb: "Halls Head",
    quote:
      "Douglas was brilliant with my 9-year-old daughter — he explained everything in a way she understood and put her completely at ease. Couldn't recommend him more highly.",
    initials: "MK",
  },
];

const whyUs = [
  {
    title: "Three Convenient Locations",
    desc: "Lakelands, Halls Head and Armadale — quality podiatry is always close to home across Perth's south.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Full Scope of Podiatry",
    desc: "Routine nail care, orthotics, heel pain, diabetic foot care and nail surgery — all under one trusted practitioner.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Personal, Attentive Care",
    desc: "As an independent practitioner, Douglas takes time to understand your situation and build a plan that works for you.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Easy Online Booking",
    desc: "Book an appointment at your preferred location online — no phone tag, available any time of day.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

/* ─── Helpers ───────────────────────────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-8 bg-accent" />
      <span className="text-accent text-sm font-semibold uppercase tracking-widest">{children}</span>
      <span className="h-px w-8 bg-accent" />
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-brand relative overflow-hidden">
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Teal glow */}
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 80% 40%, #0d9488 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Left: copy */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Perth South · Lakelands · Halls Head · Armadale
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-5">
                Expert Foot Care,{" "}
                <span className="text-accent">Closer to Home</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-7 max-w-xl">
                Douglas Veitch is an AHPRA-registered podiatrist providing
                comprehensive foot and lower limb care at three convenient Perth
                South locations.
              </p>

              {/* Star social proof */}
              <div className="flex items-center gap-3 mb-8">
                <Stars />
                <span className="text-blue-100 text-sm">
                  Highly recommended · Patient-centred care
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={BOOKING_URL}
                  className="bg-accent hover:bg-teal-600 text-white font-semibold px-7 py-3.5 rounded-lg text-center shadow-lg shadow-teal-900/30"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg text-center"
                >
                  Our Services
                </Link>
              </div>

              {/* Service pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="text-xs bg-white/10 hover:bg-white/20 border border-white/15 text-blue-100 hover:text-white px-3 py-1.5 rounded-full"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: credential card */}
            <div className="md:col-span-2 hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                {/* Photo placeholder */}
                <div className="bg-brand-dark/60 rounded-xl aspect-[4/3] flex items-center justify-center mb-5">
                  <div className="text-center text-blue-300">
                    <svg className="w-14 h-14 mx-auto mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="text-xs opacity-50">Photo of Douglas</p>
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-white font-semibold text-lg leading-tight">Douglas Veitch</p>
                  <p className="text-blue-200 text-sm">Registered Podiatrist (General)</p>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {[
                    "AHPRA Registered",
                    "APA Member",
                    "3 Clinic Locations",
                    "Online Booking Available",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-blue-100">
                      <span className="w-5 h-5 bg-accent/30 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={BOOKING_URL}
                  className="block w-full bg-accent hover:bg-teal-600 text-white font-semibold py-2.5 rounded-lg text-center text-sm"
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────── */}
      <section className="bg-brand-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                value: "3 Clinics",
                label: "Perth South",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
                value: "All Ages",
                label: "Patients Welcome",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>,
                value: "Online Booking",
                label: "Available Now",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                value: "AHPRA",
                label: "Registered & Insured",
              },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-6 py-3 first:pl-0 last:pr-0">
                <span className="text-accent hidden sm:block">{s.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm">{s.value}</div>
                  <div className="text-blue-300 text-xs">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="bg-warm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What We Treat</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Comprehensive care from everyday foot maintenance to complex lower
              limb conditions — all from a single trusted practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 group overflow-hidden"
              >
                <div className="h-1 bg-gray-100 group-hover:bg-accent transition-colors" />
                <div className="p-6">
                  <div className="w-11 h-11 bg-accent-light rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    {serviceIcons[s.icon]}
                  </div>
                  <h3 className="text-base font-semibold text-brand mb-2 group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {s.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overall rating bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold text-brand">5.0</div>
              <Stars />
              <p className="text-xs text-gray-500 mt-1">Overall rating</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div>
              <p className="text-gray-700 font-medium">Highly Recommended</p>
              <p className="text-gray-500 text-sm">
                Based on patient reviews across all locations
              </p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-200" />
            <div className="flex gap-2">
              {["AHPRA", "APA"].map((b) => (
                <span
                  key={b}
                  className="bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-lg"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mb-10">
            <SectionLabel>Patient Reviews</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col"
              >
                <Stars />
                <blockquote className="text-gray-700 text-sm leading-relaxed mt-4 mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ─────────────────────────────────────── */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Why Douglas?</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4">
                Why Choose Melville Podiatry?
              </h2>
              <p className="text-gray-500 mb-8">
                Whether you&apos;re managing a chronic condition, recovering from an
                injury, or just need routine care, Douglas provides attentive,
                professional podiatry you can count on.
              </p>
              <div className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card — replaces photo placeholder */}
            <div className="bg-brand rounded-2xl p-8 text-white">
              <p className="text-blue-200 text-sm font-medium uppercase tracking-widest mb-6">
                Practice at a Glance
              </p>
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { value: "3", label: "Clinic Locations" },
                  { value: "AHPRA", label: "Registered & Insured" },
                  { value: "All Ages", label: "Patients Welcome" },
                  { value: "6", label: "Services Offered" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/10 rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-2xl font-bold text-white mb-0.5">{s.value}</div>
                    <div className="text-blue-200 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/20 pt-6">
                <p className="text-blue-100 text-sm italic leading-relaxed mb-4">
                  &ldquo;Bringing professional podiatry care closer to Perth&apos;s
                  southern communities.&rdquo;
                </p>
                <p className="text-blue-200 text-xs">— Douglas Veitch, Podiatrist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations ──────────────────────────────────────── */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3">
              Three Locations Across Perth South
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Find the clinic closest to you and book an appointment online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header band */}
                <div className="bg-brand px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{loc.suburb}</h3>
                    <p className="text-blue-200 text-xs">{loc.clinic}</p>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-gray-600 text-sm mb-1">
                    {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                  </p>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline mt-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {loc.phone}
                  </a>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs border border-gray-200 hover:border-brand text-gray-600 hover:text-brand px-3 py-2 rounded-lg"
                    >
                      Get Directions
                    </a>
                    <Link
                      href={BOOKING_URL}
                      className="flex-1 text-center text-xs bg-accent hover:bg-teal-700 text-white px-3 py-2 rounded-lg font-medium"
                    >
                      Book Here
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ───────────────────────────────────── */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-10 md:p-14">
                <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
                  Your Podiatrist
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Meet Douglas Veitch
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Douglas is an AHPRA-registered general podiatrist with a
                  commitment to providing attentive, patient-centred care across
                  Perth&apos;s southern suburbs. He brings experience across the full
                  scope of general podiatry — from routine nail care and orthotic
                  prescription through to diabetic foot management and minor nail
                  surgery.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {["AHPRA Registered", "APA Member", "General Podiatry"].map((b) => (
                    <span key={b} className="bg-white/15 text-blue-100 text-xs px-3 py-1 rounded-full border border-white/20">
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-6 py-3 rounded-lg hover:bg-blue-50"
                >
                  About Douglas
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="md:col-span-2 bg-brand-dark flex items-center justify-center min-h-48 md:min-h-0">
                <div className="text-center text-blue-400 p-8">
                  <svg className="w-20 h-20 mx-auto mb-3 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm opacity-40">Douglas&apos;s photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to Take the First Step?
          </h2>
          <p className="text-teal-50 text-lg mb-8">
            Book an appointment online at your preferred location — Lakelands,
            Halls Head, or Armadale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={BOOKING_URL}
              className="bg-white text-accent font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-50 shadow-lg"
            >
              Book Online Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
