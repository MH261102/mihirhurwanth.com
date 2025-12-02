import React from "react";
import MotionSection from "../components/MotionSection.jsx";
import contact from "../content/contact.json";

export default function Contact() {
  return (
    <>
      <MotionSection>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
          Contact
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          {contact.blurb}
        </p>
      </MotionSection>

      <MotionSection delay={0.1}>
        <div className="grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-6 items-start">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4"
          >
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-slate-950/80 border border-slate-700/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/60 focus:border-brand-400 resize-none"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 text-slate-950 px-4 py-1.5 text-sm font-semibold shadow-lg shadow-brand-500/40 hover:bg-brand-400 transition"
            >
              Send
            </button>
          </form>

          <div className="space-y-3 text-sm text-slate-300">
            <p>
              You can also send a note directly:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-brand-300 hover:text-brand-200 underline-offset-2 hover:underline"
              >
                {contact.email}
              </a>
              .
            </p>
            {contact.links && contact.links.length > 0 && (
              <ul className="space-y-1 text-sm">
                {contact.links.map((link) => (
                  <li key={link.label}>
                    <span className="text-slate-400">{link.label} · </span>
                    {link.value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </MotionSection>
    </>
  );
}
