import Link from "next/link";

export default function DankePage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col">

      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-lg">

          <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center text-4xl mx-auto mb-8 shadow-lg">
            ✓
          </div>

          <h1 className="text-4xl font-extrabold text-anthracite mb-4">
            Anfrage eingegangen!
          </h1>
          <p className="text-anthracite/60 leading-relaxed mb-10">
            Vielen Dank für eure Anfrage. Wir haben alle Details erhalten und
            melden uns <strong className="text-anthracite">innerhalb von 24 Stunden</strong> mit
            einem maßgeschneiderten Angebot bei euch.
          </p>

          <div className="bg-sand rounded-2xl p-6 mb-10 text-left space-y-3">
            <p className="font-bold text-anthracite text-sm">Was passiert als nächstes?</p>
            {[
              "Wir prüfen eure Anfrage und die Verfügbarkeit der Locations.",
              "Ihr erhaltet ein individuelles Angebot per E-Mail.",
              "Nach eurer Bestätigung planen wir alles bis ins Detail.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-forest text-cream text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-anthracite/70">{text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="bg-forest text-cream px-8 py-3 rounded-full text-sm font-bold hover:bg-lime transition-colors inline-block"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
