import React from "react";
import { motion } from "framer-motion";
import MotionSection from "../components/MotionSection.jsx";
import { Link } from "react-router-dom";
import site from "../content/site.json";

export default function Home() {
  return (
    <>
      <MotionSection>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1 space-y-4">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700/70 px-3 py-1 text-xs font-medium text-slate-300"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {site.tagline}
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-50"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-tr from-brand-300 via-emerald-300 to-sky-400 bg-clip-text text-transparent">
                {site.name}
              </span>
              .
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base text-slate-300 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {site.current}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 text-slate-950 px-4 py-1.5 text-sm font-semibold shadow-lg shadow-brand-500/40 hover:bg-brand-400 transition"
              >
                View projects
                <span aria-hidden>↗</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 px-4 py-1.5 text-sm font-medium text-slate-200 hover:bg-slate-900/70 transition"
              >
                Read my story
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="w-full md:w-64 lg:w-72"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 120 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-brand-400 via-emerald-400 to-sky-500 opacity-60 blur-xl" />
              <div className="relative rounded-3xl bg-slate-950/90 border border-slate-700/80 px-5 py-4 shadow-2xl shadow-brand-500/30">
                <p className="text-xs font-semibold text-slate-300 mb-2">
                  Snapshot
                </p>
                <ul className="space-y-2 text-xs text-slate-200/90">
                  <li className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Location</span>
                    <span>{site.location}</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Focus</span>
                    <span>{site.focus}</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span className="text-slate-400">Currently</span>
                    <span>{site.current}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </>
  );
}
