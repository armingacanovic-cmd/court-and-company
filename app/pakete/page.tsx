import Link from "next/link";

export default function PaketePage() {
  return (
    <main className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </Link>
        <Link href="/buchen" className="bg-forest text-cream px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime transition-colors">
          Jetzt anfragen
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <span className="inline-block bg-forest text-cream text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Pakete
        </span>
        <h1 className="text-4xl font-extrabold mb-16 text-anthracite">Unsere Pakete</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Court",
              subtitle: "Kompakter Einstieg für hochwertige Team-Events",
              highlight: false,
              features: [
                "Court-Buchung & Location",
                "Turnierorganisation",
                "Coaching & Warm-up",
                "Equipment & Ausstattung",
                "Moderation",
                "Persönliche Betreuung",
              ],
            },
            {
              name: "Business",
              subtitle: "Unser Bestseller für stilvolle Firmen-Events",
              highlight: true,
              features: [
                "Alles aus Court",
                "Catering & Getränke",
                "DJ & Musik",
                "Branding & Merchandise",
                "Networking-Bereich",
              ],
            },
            {
              name: "Premium",
              subtitle: "Individuell inszeniertes Signature-Event",
              highlight: false,
              features: [
                "Alles aus Business",
                "Individuelle Inszenierung",
                "Siegerehrung & Awards",
                "Professionelle Fotografie",
                "Komplette Eventleitung",
              ],
            },
          ].map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 flex flex-col ${pkg.highlight ? "bg-forest text-cream shadow-xl scale-105" : "bg-sand"}`}
            >
              <div className="mb-6">
                {pkg.highlight && (
                  <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    Bestseller
                  </span>
                )}
                <h3 className={`text-2xl font-extrabold ${pkg.highlight ? "text-white" : "text-anthracite"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mt-1 leading-snug ${pkg.highlight ? "text-cream/60" : "text-anthracite/50"}`}>
                  {pkg.subtitle}
                </p>
              </div>
              <ul className="space-y-2.5 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-cream/80" : "text-anthracite/70"}`}>
                    <span className="mt-0.5 font-bold text-lime">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/buchen"
                className={`mt-8 text-center py-3 rounded-full text-sm font-bold transition-colors ${pkg.highlight ? "bg-lime text-white hover:bg-white hover:text-forest" : "bg-forest text-cream hover:bg-lime"}`}
              >
                Jetzt anfragen →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-anthracite/45 text-xs leading-relaxed max-w-2xl mx-auto">
          Alle Pakete individuell kalkuliert · Ab 4 Personen · Keine versteckten Kosten
        </p>
      </div>
    </main>
  );
}
