import React from "react";
import MotionSection from "../components/MotionSection.jsx";
import projects from "../content/projects.json";

export default function Projects() {
  return (
    <>
      <MotionSection>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50 mb-3">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          A small selection of things I have worked on. Replace or extend these
          entries with whatever you feel like sharing.
        </p>
      </MotionSection>

      <MotionSection delay={0.1}>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 hover:border-brand-400/80 hover:bg-slate-900/90 transition"
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-brand-200">
                  {project.title}
                </h2>
                {project.year && (
                  <span className="text-xs text-slate-400">{project.year}</span>
                )}
              </div>
              {project.summary && (
                <p className="text-xs text-slate-300 mb-3">{project.summary}</p>
              )}
              {project.stack && project.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800/80 border border-slate-700/80 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </MotionSection>
    </>
  );
}
