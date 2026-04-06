"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Start", href: "#top" },
  { label: "Warum Padel?", href: "#warum" },
  { label: "Für wen?", href: "#fuerwen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber" },
  { label: "Pakete & Preise", href: "#pakete" },
  { label: "FAQ", href: "#faq" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Jetzt anfragen", href: "/buchen", cta: true },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center gap-1.5 w-9 h-9 p-1.5 rounded-lg hover:bg-sand transition-colors"
        aria-label="Menü öffnen"
      >
        <span className={`block h-0.5 bg-anthracite rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 bg-anthracite rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 bg-anthracite rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-cream z-50 shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-beige/30">
          <div>
            <span className="text-xl font-extrabold text-forest">Court</span>
            <span className="text-xl font-light text-anthracite"> & Company</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-anthracite/50 hover:text-anthracite text-2xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((link) =>
            link.cta ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mt-4 bg-forest text-cream text-center py-3 rounded-full text-sm font-bold hover:bg-lime transition-colors"
              >
                {link.label} →
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 text-sm font-semibold text-anthracite hover:text-forest hover:bg-sand rounded-xl transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-xs text-anthracite/30 text-center">
          court-and-company.com
        </div>
      </div>
    </>
  );
}
