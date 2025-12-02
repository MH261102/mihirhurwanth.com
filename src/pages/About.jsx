import React from "react";
import MotionSection from "../components/MotionSection.jsx";
import about from "../content/about.json";

export default function About() {
  return (
    <>
      <MotionSection>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
          Story
        </h1>
        <div className="space-y-3 text-sm sm:text-base text-slate-300 max-w-3xl">
          {about.intro.map((para) => (
            <p key={para.slice(0, 20)}>{para}</p>
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.1}>
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          Background
        </h2>
        <div className="space-y-2 text-sm text-slate-300 max-w-3xl">
          {about.background.map((para) => (
            <p key={para.slice(0, 20)}>{para}</p>
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.2}>
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          Notes
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {about.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-100 mb-1">
                {section.title}
              </h3>
              <p className="text-xs text-slate-300">{section.body}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection delay={0.3}>
        <h2 className="text-lg font-semibold text-slate-100 mb-2">
          Timeline
        </h2>
        <div className="space-y-4 border-l border-slate-700/80 pl-4 ml-1">
          {about.timeline.map((item) => (
            <div key={item.label} className="relative">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-brand-500 shadow shadow-brand-500/60" />
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {item.label}
              </p>
              <p className="text-sm text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
