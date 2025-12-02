import React from "react";
import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        {children}
      </main>
    </div>
  );
}
