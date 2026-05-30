import Link from "next/link";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

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
  },
  {
    title: "Full Scope of Podiatry",
    desc: "Routine nail care, orthotics, heel pain, diabetic foot care and nail surgery — all under one trusted practitioner.",
  },
  {
    title: "Personal, Attentive Care",
    desc: "As an independent practitioner, Douglas takes time to understand your situation and build a plan that works for you.",
  },
  {
    title: "No Referral Needed",
    desc: "You can contact Douglas directly without a GP referral. Simply call your nearest clinic or send an enquiry to get started.",
  },
];

/* ─── Helpers ───────────────────────────────────────────────── */
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#9B7B2E" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function OrnamentRule({ light = false }: { light?: boolean }) {
  const col = light ? 'rgba(155,123,46,0.35)' : 'rgba(155,123,46,0.5)';
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="h-px flex-1" style={{ background: col }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: col }} />
      <div className="h-px flex-1" style={{ background: col }} />
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-8" style={{ background: dark ? '#9B7B2E' : '#9B7B2E', opacity: 0.6 }} />
      <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>{children}</span>
      <div className="h-px w-8" style={{ background: '#9B7B2E', opacity: 0.6 }} />
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-brand relative overflow-hidden">
        {/* Subtle linen texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)",
          }}
        />
        {/* Gold corner ornament top-right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, #9B7B2E 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Double-rule border top */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-accent/30" />
            <div className="w-1 h-1 bg-accent/50 rotate-45" />
            <div className="h-px flex-1 bg-accent/30" />
          </div>

          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Left: copy */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 border border-accent/30 text-xs px-3 py-1.5 mb-6 tracking-widest uppercase" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                Perth South · Lakelands · Halls Head · Armadale
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.2] mb-5" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                Expert Foot Care,{" "}
                <span className="text-accent italic">Closer to Home</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-7 max-w-xl" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                Douglas Veitch is an AHPRA-registered podiatrist providing
                comprehensive foot and lower limb care at three convenient Perth
                South locations.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <Stars />
                <span className="text-white/60 text-sm tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  Highly recommended · Patient-centred care
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold px-8 py-3.5 text-center tracking-widest uppercase text-sm"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/services"
                  className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 text-center tracking-widest uppercase text-sm"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
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
                    className="text-xs border border-white/15 hover:border-accent/50 text-white/60 hover:text-accent px-3 py-1.5 tracking-wide"
                    style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: credential card */}
            <div className="md:col-span-2 hidden md:block">
              <div className="border-2 border-accent/30 p-6 shadow-2xl bg-brand-dark/80">
                {/* Ornamental card header */}
                <div className="border-b border-accent/20 pb-4 mb-5 text-center">
                  <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Your Practitioner
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px w-8 bg-accent/30" />
                    <div className="w-1 h-1 bg-accent/50 rotate-45" />
                    <div className="h-px w-8 bg-accent/30" />
                  </div>
                </div>

                {/* Photo placeholder */}
                <div className="bg-brand/60 border border-white/10 aspect-[4/3] flex items-center justify-center mb-5">
                  <div className="text-center" style={{ color: '#C4A96A' }}>
                    <svg className="w-14 h-14 mx-auto mb-2 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="text-xs opacity-40 tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Photo of Douglas</p>
                  </div>
                </div>

                <div className="mb-5 text-center">
                  <p className="text-white font-semibold text-lg leading-tight" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>Douglas Veitch</p>
                  <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>Registered Podiatrist (General)</p>
                </div>

                <ul className="space-y-2.5 mb-5 border-t border-accent/20 pt-4">
                  {[
                    "AHPRA Registered",
                    "APA Member",
                    "3 Clinic Locations",
                    "No Referral Needed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      <span className="w-4 h-px bg-accent/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block w-full border border-accent text-accent hover:bg-accent hover:text-white font-semibold py-2.5 text-center text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Double-rule border bottom */}
          <div className="flex items-center gap-3 mt-10">
            <div className="h-px flex-1 bg-accent/30" />
            <div className="w-1 h-1 bg-accent/50 rotate-45" />
            <div className="h-px flex-1 bg-accent/30" />
          </div>
        </div>
      </section>

      {/* ── Trust bar ──────────────────────────────────────── */}
      <section className="bg-brand-dark border-b-2 border-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-accent/15">
            {[
              { value: "3 Clinics", label: "Perth South" },
              { value: "All Ages", label: "Patients Welcome" },
              { value: "No Referral", label: "Required" },
              { value: "AHPRA", label: "Registered & Insured" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 px-6 py-3 first:pl-0 last:pr-0">
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{s.value}</div>
                  <div className="text-xs tracking-wide" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────── */}
      <section className="bg-parchment py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>What We Treat</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Our Services
            </h2>
            <p className="text-brand/60 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Comprehensive care from everyday foot maintenance to complex lower
              limb conditions — all from a single trusted practitioner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white border border-accent/20 shadow-sm hover:shadow-md hover:border-accent/50 group overflow-hidden"
              >
                <div className="h-0.5 bg-accent/20 group-hover:bg-accent transition-colors" />
                <div className="p-6">
                  <div className="w-11 h-11 border border-accent/30 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    {serviceIcons[s.icon]}
                  </div>
                  <h3 className="text-base font-semibold text-brand mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                    {s.title}
                  </h3>
                  <p className="text-brand/60 text-sm leading-relaxed mb-4" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    {s.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────── */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overall rating bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 border border-accent/25 bg-white">
            <div className="text-center sm:text-left">
              <div className="text-4xl font-bold text-brand" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>5.0</div>
              <Stars />
              <p className="text-xs text-brand/50 mt-1 tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Overall rating</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-accent/20" />
            <div>
              <p className="text-brand font-semibold" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>Highly Recommended</p>
              <p className="text-brand/60 text-sm" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                Based on patient reviews across all locations
              </p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-accent/20" />
            <div className="flex gap-2">
              {["AHPRA", "APA"].map((b) => (
                <span
                  key={b}
                  className="border border-accent/40 text-accent text-xs font-bold px-3 py-1.5 tracking-wider"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mb-10">
            <SectionLabel>Patient Reviews</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-6 border border-accent/20 flex flex-col"
              >
                <Stars />
                <blockquote className="text-brand/70 text-sm leading-relaxed mt-4 mb-6 flex-1 italic" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-accent/15 pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 border-2 border-accent/40 flex items-center justify-center text-accent text-xs font-bold shrink-0" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{t.name}</p>
                    <p className="text-xs text-brand/50 tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>{t.suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ─────────────────────────────────────── */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Why Douglas?</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold text-brand mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                Why Choose Melville Podiatry?
              </h2>
              <p className="text-brand/60 mb-8" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                Whether you&apos;re managing a chronic condition, recovering from an
                injury, or just need routine care, Douglas provides attentive,
                professional podiatry you can count on.
              </p>
              <div className="space-y-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white border border-accent/20">
                    <div className="w-1 shrink-0 bg-accent/50" />
                    <div>
                      <h3 className="font-semibold text-brand text-sm mb-0.5" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{item.title}</h3>
                      <p className="text-brand/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="bg-brand border-2 border-accent/40 p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-accent/30" />
                <p className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Practice at a Glance</p>
                <div className="h-px flex-1 bg-accent/30" />
              </div>
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { value: "3", label: "Clinic Locations" },
                  { value: "AHPRA", label: "Registered & Insured" },
                  { value: "All Ages", label: "Patients Welcome" },
                  { value: "6", label: "Services Offered" },
                ].map((s) => (
                  <div key={s.label} className="border border-accent/25 p-4">
                    <div className="text-2xl font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{s.value}</div>
                    <div className="text-xs tracking-wide" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t border-accent/25 pt-6">
                <p className="text-white/70 text-sm italic leading-relaxed mb-4" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  &ldquo;Bringing professional podiatry care closer to Perth&apos;s
                  southern communities.&rdquo;
                </p>
                <p className="text-xs tracking-widest" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>— Douglas Veitch, Podiatrist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Locations ──────────────────────────────────────── */}
      <section id="locations" className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Three Locations Across Perth South
            </h2>
            <p className="text-brand/60 max-w-lg mx-auto" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Find the clinic closest to you and get in touch to arrange an appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="border border-accent/25 overflow-hidden hover:border-accent/50 transition-colors bg-white"
              >
                {/* Header band */}
                <div className="bg-brand px-6 py-4 border-b-2 border-accent/40">
                  <h3 className="text-white font-semibold" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>{loc.suburb}</h3>
                  <p className="text-xs tracking-wider uppercase mt-0.5" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>{loc.clinic}</p>
                </div>
                <div className="p-5">
                  <p className="text-brand/60 text-sm mb-1" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                  </p>
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:underline mt-1"
                  >
                    {loc.phone}
                  </a>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-xs border border-accent/25 hover:border-accent text-brand/60 hover:text-brand px-3 py-2 tracking-wide uppercase"
                      style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                    >
                      Directions
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 text-center text-xs bg-accent hover:bg-gold-dark text-white px-3 py-2 font-medium tracking-wide uppercase"
                      style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About teaser ───────────────────────────────────── */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand border-2 border-accent/40 overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 p-10 md:p-14">
                {/* Ornamental label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-accent/40" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Your Podiatrist
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                  Meet Douglas Veitch
                </h2>
                <p className="text-white/70 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  Douglas is an AHPRA-registered general podiatrist with a
                  commitment to providing attentive, patient-centred care across
                  Perth&apos;s southern suburbs. He brings experience across the full
                  scope of general podiatry — from routine nail care and orthotic
                  prescription through to diabetic foot management and minor nail
                  surgery.
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {["AHPRA Registered", "APA Member", "General Podiatry"].map((b) => (
                    <span key={b} className="border border-accent/30 text-xs px-3 py-1 tracking-wider" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3 text-sm tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                >
                  About Douglas →
                </Link>
              </div>
              <div className="md:col-span-2 bg-brand-dark border-l border-accent/20 flex items-center justify-center min-h-48 md:min-h-0">
                <div className="text-center p-8" style={{ color: '#C4A96A' }}>
                  <svg className="w-20 h-20 mx-auto mb-3 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-xs opacity-30 tracking-widest uppercase" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>Douglas&apos;s photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="py-16 bg-brand border-t-2 border-accent/40">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Ornamental top */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/40" />
            <div className="w-1.5 h-1.5 bg-accent/60 rotate-45" />
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
            Ready to Take the First Step?
          </h2>
          <p className="text-white/60 text-lg mb-8" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
            Appointments available at Lakelands, Halls Head, and Armadale.
            Call your nearest clinic or send an enquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold px-8 py-3.5 tracking-widest uppercase text-sm"
              style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
            >
              Get in Touch
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 tracking-widest uppercase text-sm"
              style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
