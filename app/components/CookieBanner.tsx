"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-anthracite text-cream px-6 py-5 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-semibold mb-1">🍪 Wir nutzen Cookies</p>
          <p className="text-xs text-cream/60 leading-relaxed">
            Diese Website verwendet technisch notwendige Cookies für den Betrieb sowie Analyse-Cookies zur Verbesserung unseres Angebots.
            Weitere Infos in unserer{" "}
            <a href="/datenschutz" className="underline hover:text-lime transition-colors">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2.5 rounded-full text-xs font-semibold border border-white/20 hover:border-white/50 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-lime text-white hover:bg-white hover:text-forest transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
