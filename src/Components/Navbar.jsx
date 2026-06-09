"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Updates", url: "/updates" },
  ];

  return (
    <header className="w-full bg-black text-white shadow-md sticky top-0 z-40">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200">
              <div id="p" className="max-md:w-8 max-md:h-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-4xl max-md:text-lg text-slate-900 font-black shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/80 transition-shadow duration-300">
                P
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pivot</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="text-lg hover:text-sky-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="../signin"
              className="px-4 py-2 bg-sky-500 text-slate-900 rounded-md font-medium hover:bg-cyan-400 transition-colors duration-200"
            >
              Sign In
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-cyan-300 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <svg
                className={`h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-800/95">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="block text-lg px-2 py-2 rounded hover:bg-slate-700 transition-colors duration-150"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/signin"
              className="block w-full text-center px-3 py-2 bg-cyan-500 text-slate-900 rounded-md font-medium hover:bg-cyan-400 transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
