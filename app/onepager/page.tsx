"use client";

import { useEffect } from "react";

export default function OnepagerPage() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @page {
          size: A4;
          margin: 0;
        }
        * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; }
        }
      `}</style>

      {/* Print-Hinweis (nur am Bildschirm sichtbar) */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-forest text-cream text-center py-3 text-sm font-semibold">
        Druckdialog öffnet sich automatisch — „Als PDF speichern" auswählen.
        <button
          onClick={() => window.print()}
          className="ml-4 bg-lime text-white px-4 py-1 rounded-full text-xs font-bold hover:bg-white hover:text-forest transition-colors"
        >
          Erneut öffnen →
        </button>
      </div>

      {/* A4 Dokument */}
      <div
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "60px auto 40px",
          backgroundColor: "#FAF7F2",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#252525",
          boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
        }}
        className="no-print-margin"
      >
        {/* Header */}
        <div style={{ backgroundColor: "#1A4731", padding: "28px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "26px", fontWeight: 900, color: "white", letterSpacing: "-0.5px" }}>
              Court <span style={{ fontWeight: 300 }}>&amp; Company</span>
            </div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>
              Corporate Padel Events · Deutschland
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>team@court-and-company.com</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>court-and-company.com</div>
          </div>
        </div>

        {/* Hero-Zeile */}
        <div style={{ backgroundColor: "#2D6B4A", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "white", fontSize: "14px", margin: 0, maxWidth: "480px", lineHeight: 1.6 }}>
            Wir gestalten <strong>hochwertige Padel-Eventformate</strong> für Unternehmen — sportlich, stilvoll und vollständig organisiert. Von der Konzeption bis zur Nachbereitung.
          </p>
          <div style={{ display: "flex", gap: "20px", flexShrink: 0 }}>
            {[["30+", "Events"], ["500+", "Teilnehmer"], ["4.8★", "Bewertung"]].map(([val, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 900, color: "#7EC957" }}>{val}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 40px", display: "grid", gap: "24px" }}>

          {/* Für welche Anlässe */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ backgroundColor: "#1A4731", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px" }}>
                Zielgruppen
              </div>
            </div>
            <h2 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 12px", color: "#1A4731" }}>Für welche Anlässe?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "8px" }}>
              {[
                { title: "Teambuilding & Mitarbeiterbindung", desc: "Bereichsübergreifende Aktivierung und gelebte Wertschätzung." },
                { title: "Kundenevents & Kundenbindung", desc: "Bestandskunden exklusiv und persönlich an die Marke binden." },
                { title: "Partner- & Netzwerk­veranstaltungen", desc: "B2B-Kontakte in modernem Format zusammenbringen." },
                { title: "Employer Branding & Recruiting", desc: "Als Arbeitgeber positionieren und Young Professionals ansprechen." },
              ].map((item) => (
                <div key={item.title} style={{ backgroundColor: "#1A4731", borderRadius: "8px", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontSize: "10px", fontWeight: 800, color: "#7EC957", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.3 }}>{item.title}</div>
                  <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Leistungsumfang */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ backgroundColor: "#7EC957", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px" }}>
                Full-Service
              </div>
            </div>
            <h2 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 12px", color: "#1A4731" }}>Unser Leistungsumfang</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {[
                { icon: "🎯", title: "Konzeption", desc: "Zielsetzung, Formatwahl, Dramaturgie und Ablaufdesign." },
                { icon: "📋", title: "Organisation", desc: "Location, Court-Buchung, Teilnehmerhandling und Turnierlogik." },
                { icon: "🎾", title: "Teilnehmererlebnis", desc: "Coaching, Warm-up, Spielmodi, Moderation und Catering." },
                { icon: "🎨", title: "Markeninszenierung", desc: "Branding, Welcome Area, Materialien und Awards." },
                { icon: "🎬", title: "Nachbereitung", desc: "Aftermovie, Fotoauswahl, Social Recap und Highlight-Content." },
                { icon: "✅", title: "Ihr Input. Unser Service.", desc: "Sie geben Ziel und Anlass vor — wir übernehmen alles." },
              ].map((item, i) => (
                <div key={item.title} style={{
                  backgroundColor: [1, 3, 5].includes(i) ? "#1A4731" : "#EDE8DF",
                  borderRadius: "8px",
                  padding: "12px",
                }}>
                  <div style={{ fontSize: "16px", marginBottom: "4px" }}>{item.icon}</div>
                  <div style={{ fontSize: "10px", fontWeight: 800, color: [1, 3, 5].includes(i) ? "#7EC957" : "#1A4731", marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ fontSize: "9.5px", color: [1, 3, 5].includes(i) ? "rgba(255,255,255,0.7)" : "rgba(37,37,37,0.6)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pakete */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{ backgroundColor: "#1A4731", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px" }}>
                Pakete
              </div>
            </div>
            <h2 style={{ fontSize: "17px", fontWeight: 900, margin: "0 0 12px", color: "#1A4731" }}>Unsere Pakete</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
              {[
                {
                  name: "Court", highlight: false,
                  features: ["Court-Buchung & Location", "Turnierorganisation", "Coaching & Warm-up", "Equipment & Ausstattung", "Moderation & Betreuung"],
                },
                {
                  name: "Business", highlight: true,
                  features: ["Alles aus Court", "Catering & Getränke", "DJ & Musik", "Branding & Merchandise", "Networking-Bereich"],
                },
                {
                  name: "Premium", highlight: false,
                  features: ["Alles aus Business", "Individuelle Inszenierung", "Siegerehrung & Awards", "Professionelle Fotografie", "Komplette Eventleitung"],
                },
              ].map((pkg) => (
                <div key={pkg.name} style={{
                  backgroundColor: pkg.highlight ? "#1A4731" : "#EDE8DF",
                  borderRadius: "8px",
                  padding: "14px",
                }}>
                  {pkg.highlight && (
                    <div style={{ backgroundColor: "#7EC957", color: "white", fontSize: "8px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "2px 8px", borderRadius: "20px", display: "inline-block", marginBottom: "6px" }}>
                      Bestseller
                    </div>
                  )}
                  <div style={{ fontSize: "15px", fontWeight: 900, color: pkg.highlight ? "white" : "#252525", marginBottom: "8px" }}>{pkg.name}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {pkg.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
                        <span style={{ color: "#7EC957", fontWeight: 700, fontSize: "9px", marginTop: "1px", flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: "9.5px", color: pkg.highlight ? "rgba(255,255,255,0.8)" : "rgba(37,37,37,0.7)", lineHeight: 1.4 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "9px", color: "rgba(37,37,37,0.4)", marginTop: "8px", textAlign: "center" }}>
              Alle Pakete individuell kalkuliert · Ab 4 Personen · Unverbindliche Anfrage in 2 Minuten
            </p>
          </div>

        </div>

        {/* Footer */}
        <div style={{ backgroundColor: "#1A4731", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
          <div style={{ fontSize: "13px", fontWeight: 900, color: "white" }}>
            Court <span style={{ fontWeight: 300 }}>&amp; Company</span>
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "E-Mail", value: "team@court-and-company.com" },
              { label: "WhatsApp", value: "+49 176 519 98637" },
              { label: "Web", value: "court-and-company.com" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</div>
                <div style={{ fontSize: "10px", color: "white", fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
