"use client";

import { useState } from "react";
import { locations } from "@/lib/locations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire up to a form backend (e.g. Resend, Formspree) before going live
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand py-16 md:py-20 border-b-2 border-accent/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent/40" />
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Contact
            </p>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
              Get in Touch
            </h1>
            <p className="text-white/60 text-lg" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
              Call your nearest clinic directly, or send us a message and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Locations + form */}
      <section className="py-20 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Locations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent/50" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  Our Locations
                </h2>
              </div>
              <div className="space-y-5">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="bg-white border border-accent/20"
                  >
                    <div className="bg-brand px-5 py-3 border-b-2 border-accent/40">
                      <h3 className="font-semibold text-white" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                        {loc.suburb}
                      </h3>
                      <p className="text-xs tracking-wider uppercase mt-0.5" style={{ color: '#C4A96A', fontFamily: 'var(--font-lora, Georgia, serif)' }}>{loc.clinic}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-brand/60 text-sm mt-1" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                        {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                      </p>
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, "")}`}
                        className="text-accent font-medium text-sm hover:underline mt-2 inline-block"
                      >
                        {loc.phone}
                      </a>
                      <div className="mt-3">
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs border border-accent/25 hover:border-accent text-brand/60 hover:text-brand px-3 py-1.5 tracking-wide uppercase"
                          style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                        >
                          Get Directions →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent/50" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                  Send a Message
                </h2>
              </div>
              {submitted ? (
                <div className="bg-white border-2 border-accent/40 p-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="h-px w-10 bg-accent/40" />
                    <div className="w-1.5 h-1.5 bg-accent rotate-45" />
                    <div className="h-px w-10 bg-accent/40" />
                  </div>
                  <h3 className="font-bold text-brand text-xl mb-2" style={{ fontFamily: 'var(--font-playfair, Georgia, serif)' }}>
                    Message Received
                  </h3>
                  <p className="text-brand/60" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    Thanks for getting in touch. We&apos;ll be in contact with you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] mb-1.5" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-accent/25 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors text-brand"
                        style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-[0.15em] mb-1.5" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04xx xxx xxx"
                        className="w-full border border-accent/25 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors text-brand"
                        style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] mb-1.5" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border border-accent/25 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors text-brand"
                      style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] mb-1.5" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      Preferred Location
                    </label>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full border border-accent/25 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors text-brand"
                      style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                    >
                      <option value="">Select a location…</option>
                      {locations.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.suburb} — {l.clinic}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-[0.15em] mb-1.5" style={{ color: '#9B7B2E', fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your foot concerns or what you'd like to discuss…"
                      className="w-full border border-accent/25 bg-white px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition-colors resize-none text-brand"
                      style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-white font-semibold px-6 py-3 tracking-widest uppercase text-sm"
                    style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-brand/40 text-center tracking-wide" style={{ fontFamily: 'var(--font-lora, Georgia, serif)' }}>
                    For urgent matters, please call your nearest clinic directly.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
