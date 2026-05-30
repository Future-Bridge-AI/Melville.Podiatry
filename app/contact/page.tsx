"use client";

import { useState } from "react";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { BOOKING_URL } from "@/lib/config";

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
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-blue-100 text-lg">
              Book online, call your nearest clinic, or send us a message and
              we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Book online CTA */}
      <div className="bg-accent" id="book">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Prefer to book online?</p>
              <p className="text-green-100 text-sm">
                Select your preferred location and choose a time that suits you.
              </p>
            </div>
            <Link
              href={BOOKING_URL}
              className="bg-white text-accent font-semibold px-6 py-2.5 rounded-lg hover:bg-green-50 transition-colors shrink-0"
            >
              Book Online Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Locations + form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Locations */}
            <div>
              <h2 className="text-2xl font-bold text-brand mb-6">
                Our Locations
              </h2>
              <div className="space-y-5">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-brand">
                          {loc.suburb}
                        </h3>
                        <p className="text-gray-500 text-sm">{loc.clinic}</p>
                        <p className="text-gray-700 text-sm mt-1">
                          {loc.address}, {loc.suburb} {loc.state} {loc.postcode}
                        </p>
                        <a
                          href={`tel:${loc.phone.replace(/\s/g, "")}`}
                          className="text-accent font-medium text-sm hover:underline mt-1 inline-block"
                        >
                          {loc.phone}
                        </a>
                        <div className="mt-3">
                          <a
                            href={loc.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-500 hover:text-brand border border-gray-200 hover:border-brand px-3 py-1.5 rounded-lg transition-colors"
                          >
                            Get Directions →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-brand mb-6">
                Send a Message
              </h2>
              {submitted ? (
                <div className="bg-accent-light border border-accent/20 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-brand text-xl mb-2">
                    Message Received
                  </h3>
                  <p className="text-gray-600">
                    Thanks for getting in touch. We&apos;ll be in contact with you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04xx xxx xxx"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Location
                    </label>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors bg-white"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your foot concerns or what you'd like to book…"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
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
