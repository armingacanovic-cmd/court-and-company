import Link from "next/link";

export default function UeberUnsPage() {
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
        <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Über uns
        </span>
        <h1 className="text-4xl font-extrabold text-anthracite leading-tight mb-16">
          Sport ist unsere<br />
          <span className="text-forest">Leidenschaft & Expertise.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Armin */}
          <div className="bg-sand rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-forest flex items-center justify-center text-cream font-extrabold text-xl flex-shrink-0">
                AG
              </div>
              <div>
                <h3 className="font-extrabold text-anthracite text-lg">Armin Gacanovic</h3>
                <p className="text-xs text-forest font-semibold">Gründer & Trainer</p>
              </div>
            </div>
            <p className="text-anthracite/65 text-sm leading-relaxed">
              Armin ist ausgebildeter Sportlehrer (B.A. Sportlehramt, Universität Potsdam) und seit über 2 Jahren als aktiver Trainer tätig. Mit langjähriger Erfahrung in der Arbeit mit Sportstudios bringt er ein tiefes Verständnis für Bewegung, Motivation und Gruppenführung mit — auf dem Court und dahinter.
            </p>
            <div className="flex flex-col gap-2">
              {[
                "🎓 B.A. Sportlehramt, Universität Potsdam",
                "🏋️ Langjährige Erfahrung in Sportstudios",
                "🎾 Trainer & Coach seit über 2 Jahren",
              ].map((item) => (
                <p key={item} className="text-xs text-anthracite/60">{item}</p>
              ))}
            </div>
          </div>

          {/* Niklas */}
          <div className="bg-sand rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-lime flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0">
                NL
              </div>
              <div>
                <h3 className="font-extrabold text-anthracite text-lg">Niklas Linhardt</h3>
                <p className="text-xs text-forest font-semibold">Gründer & Eventmanagement</p>
              </div>
            </div>
            <p className="text-anthracite/65 text-sm leading-relaxed">
              Niklas bringt den strategischen Blick für Organisation und Eventplanung mit. Als Absolvent des Sportmanagement-Studiums (B.A., Universität Potsdam) verbindet er sportliche Leidenschaft mit betriebswirtschaftlichem Know-how — und sorgt dafür, dass jedes Event reibungslos läuft.
            </p>
            <div className="flex flex-col gap-2">
              {[
                "🎓 B.A. Sportmanagement, Universität Potsdam",
                "📋 Spezialist für Eventorganisation & Planung",
                "🤝 Experte für B2B-Eventformate",
              ].map((item) => (
                <p key={item} className="text-xs text-anthracite/60">{item}</p>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-8 bg-forest text-cream rounded-2xl p-8 text-center">
          <p className="text-lg font-bold mb-2">Zwei Absolventen. Eine Mission.</p>
          <p className="text-cream/65 text-sm max-w-xl mx-auto">
            Wir vereinen Trainerkompetenz, Sportmanagement und echte Padel-Begeisterung — für Events, die man nicht so schnell vergisst.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link href="/buchen" className="bg-lime text-white px-8 py-4 rounded-full text-base font-bold hover:bg-forest transition-colors shadow-lg inline-block">
            Jetzt anfragen →
          </Link>
        </div>
      </div>
    </main>
  );
}
