import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkClasses = ({ isActive }) =>
  [
    "px-3 py-1.5 rounded-full text-sm font-medium transition",
    isActive
      ? "bg-brand-500 text-slate-950 shadow-lg shadow-brand-500/40"
      : "text-slate-200/80 hover:text-white hover:bg-slate-800/60",
  ].join(" ");

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-slate-950/60 border-b border-slate-800/70">
      <header className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-brand-500 via-emerald-400 to-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/40">
            <span className="text-xs font-bold tracking-tight text-slate-950">
              MH
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-slate-50">
              Mihir Hurwanth
            </p>
            <p className="text-xs text-slate-400">Personal site</p>
          </div>
        </motion.div>

        <motion.nav
          className="flex items-center gap-2 rounded-full bg-slate-900/70 border border-slate-700/80 px-2 py-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            Story
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </motion.nav>
      </header>
    </div>
  );
}
