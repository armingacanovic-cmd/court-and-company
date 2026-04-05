import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-anthracite">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30 sticky top-0 z-50">
        <div>
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </div>
        <Link
          href="/buchen"
          className="bg-forest text-cream px-6 py-2.5 rounded-full text-sm font-bold hover:bg-lime transition-colors"
        >
          Jetzt anfragen
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-padel.jpg')" }}
        />
        {/* Dunkler Overlay für Lesbarkeit */}
        <div className="absolute inset-0 bg-forest/75" />

        <div className="relative z-10 px-6 py-28">
          <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Corporate Padel Events · Deutschland
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Padel Meets<br />
            <span className="text-lime">Business.</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Wir gestalten hochwertige Eventformate für Unternehmen, die ihren Mitarbeitenden,
            Kunden oder Partnern mehr bieten möchten als ein klassisches Get-together.
            Sportliche Aktivierung, stilvolles Ambiente und echtes Networking — vollständig organisiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/buchen"
              className="bg-lime text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white hover:text-forest transition-colors shadow-lg"
            >
              Kostenlos anfragen →
            </Link>
            <a
              href="#leistungen"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-semibold hover:border-white hover:bg-white/10 transition-colors"
            >
              Leistungen entdecken
            </a>
          </div>
          {/* Vertrauens-Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/60 text-sm">
            <span>⭐ 5.0 Bewertung</span>
            <span>🎾 30+ Events</span>
            <span>👥 500+ Teilnehmer</span>
            <span>🇩🇪 Deutschlandweit</span>
          </div>
        </div>
      </section>

      {/* Warum Padel */}
      <section className="bg-forest text-cream px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Der Unterschied
          </span>
          <h2 className="text-4xl font-extrabold mb-14">Warum Padel?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "🤝", text: "Team-Building mit emotionalem Mehrwert" },
              { icon: "🏆", text: "Sportlicher Wettbewerb in lockerer Atmosphäre" },
              { icon: "💬", text: "Networking abseits klassischer Business-Formate" },
              { icon: "✨", text: "Premium-Inszenierung statt Standard-Firmenfeier" },
              { icon: "💪", text: "Stärkt Teamgeist und Mitarbeiterbindung" },
              { icon: "👥", text: "Für Mitarbeitende, Kunden und Partner" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-white/10 hover:bg-white/15 rounded-2xl p-5 border border-white/10 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-cream/90 font-semibold leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="px-6 py-20 bg-sand">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-forest text-cream text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Zielgruppen
          </span>
          <h2 className="text-4xl font-extrabold mb-14 text-anthracite">Für wen ist das?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mitarbeiter",
                desc: "Ein exklusives Eventformat, das Teamgeist stärkt, Motivation fördert und Mitarbeitenden echte Wertschätzung in einem besonderen Rahmen vermittelt.",
                icon: "🏢",
                accent: "bg-lime",
              },
              {
                title: "Kunden",
                desc: "Ein hochwertiger Anlass, um Beziehungen zu vertiefen, persönliche Begegnungen zu schaffen und Markenbindung auf emotionale Weise erlebbar zu machen.",
                icon: "🌟",
                accent: "bg-forest",
              },
              {
                title: "Partner",
                desc: "Eine stilvolle Plattform für Austausch, Vernetzung und gemeinsame Erlebnisse, die bestehende Business-Beziehungen stärkt und neue Verbindungen fördert.",
                icon: "🤝",
                accent: "bg-beige",
              },
              {
                title: "Sportvereine",
                desc: "Ob Vereinsausflug, Saisonabschluss oder Mitglieder-Event — Padel ist der perfekte Sport für Vereine, die ihren Zusammenhalt auf dem Court feiern wollen.",
                icon: "🏅",
                accent: "bg-lime",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${item.accent} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-3 text-forest">{item.title}</h3>
                <p className="text-anthracite/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="px-6 py-20 bg-cream">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Full-Service
          </span>
          <h2 className="text-4xl font-extrabold mb-4 text-anthracite">Was wir übernehmen</h2>
          <p className="text-anthracite/55 max-w-xl mb-14 text-sm leading-relaxed">
            Von der ersten Planung bis zum letzten Programmpunkt übernehmen wir alles.
            Ihr erscheint — wir haben alles vorbereitet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📍", title: "Location", desc: "Hochwertige Padel-Locations, vollständige Court-Koordination und professionelles Set-up." },
              { icon: "📋", title: "Organisation", desc: "Ablaufplanung, Turnierformate, Moderation und Ergebniserfassung." },
              { icon: "🎾", title: "Coaching", desc: "Trainer vor Ort, Warm-up, Einführung für Einsteiger aller Spielniveaus." },
              { icon: "🍽️", title: "Catering", desc: "Hochwertiges Catering, Getränke, Snacks und kulinarischer Abschluss." },
              { icon: "🎵", title: "Entertainment", desc: "DJ, Moderation, Musik und atmosphärische Gestaltung." },
              { icon: "🎨", title: "Branding", desc: "Logo-Flächen, Shirts, Caps, Paddlebälle und individuelle Inszenierung." },
              { icon: "💬", title: "Networking", desc: "Lounge-Bereiche, Networking-Slots und professioneller Austausch." },
              { icon: "🏆", title: "Siegerehrung", desc: "Siegertrophäen, emotionale Abschlussmomente und gebrandete Awards." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-2xl p-6 hover:shadow-md transition-shadow ${i % 3 === 0 ? "bg-forest text-cream" : "bg-sand"}`}
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className={`font-extrabold mb-2 ${i % 3 === 0 ? "text-lime" : "text-forest"}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${i % 3 === 0 ? "text-cream/70" : "text-anthracite/60"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="px-6 py-20 bg-sand">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-forest text-cream text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-4xl font-extrabold mb-2 text-anthracite">Was unsere Kunden sagen</h2>
          <p className="text-anthracite/50 text-sm mb-12">Über 30 erfolgreiche Events in Deutschland</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Markus Bauer",
                firma: "Bauer & Partner Consulting GmbH",
                ort: "München",
                text: "Absolut begeistert! Unser Team-Event war ein voller Erfolg. Die Organisation war perfekt, das Catering top und die Atmosphäre einfach großartig. Alle Mitarbeiter reden noch heute davon.",
                stars: 5,
                initial: "MB",
              },
              {
                name: "Sandra Hoffmann",
                firma: "Hoffmann Digital AG",
                ort: "Hamburg",
                text: "Wir haben Court & Company für unser Kunden-Event gebucht und waren von Anfang bis Ende begeistert. Professionelle Abwicklung, herzliches Team und ein unvergesslicher Abend. Sehr gerne wieder!",
                stars: 5,
                initial: "SH",
              },
              {
                name: "Thomas Klein",
                firma: "Klein Immobilien GmbH",
                ort: "Berlin",
                text: "Das perfekte Format für moderne Firmenfeiern. Kein langweiliges Dinner, sondern echtes Erlebnis mit Spaßfaktor. Unsere Partner waren restlos begeistert. Klare Empfehlung!",
                stars: 5,
                initial: "TK",
              },
              {
                name: "Julia Neumann",
                firma: "Neumann & Söhne KG",
                ort: "Frankfurt",
                text: "Endlich eine Firmenfeier, die wirklich Spaß macht! Padel war der perfekte Rahmen — auch für Anfänger wie uns. Die Coaches waren super geduldig und das Event wurde 1A organisiert.",
                stars: 5,
                initial: "JN",
              },
              {
                name: "Lars Schreiber",
                firma: "Schreiber Automotive GmbH",
                ort: "Stuttgart",
                text: "Von der Anfrage bis zum letzten Pokal — alles lief reibungslos. Das Team von Court & Company hat jeden Wunsch erfüllt. Branding war erstklassig, Catering hervorragend. 10/10!",
                stars: 5,
                initial: "LS",
              },
              {
                name: "Petra Vogel",
                firma: "Vogel & Friends Marketing",
                ort: "Köln",
                text: "Wir wollten etwas anderes als die übliche Weihnachtsfeier — Court & Company hat genau das geliefert. Unsere 40 Mitarbeiter hatten einen unvergesslichen Tag. Nächstes Jahr wieder!",
                stars: 5,
                initial: "PV",
              },
            ].map((review) => (
              <div key={review.name} className="bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest text-cream font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-bold text-anthracite text-sm">{review.name}</p>
                    <p className="text-anthracite/50 text-xs">{review.firma}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.stars)].map((_, i) => (
                    <span key={i} className="text-lime text-sm">★</span>
                  ))}
                </div>
                <p className="text-anthracite/70 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <p className="text-anthracite/30 text-xs mt-3">{review.ort}</p>
              </div>
            ))}
          </div>

          {/* Gesamt-Rating */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 bg-forest text-cream rounded-2xl p-8">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-lime">5.0</p>
              <div className="flex gap-1 justify-center my-1">
                {[...Array(5)].map((_, i) => <span key={i} className="text-lime text-lg">★</span>)}
              </div>
              <p className="text-cream/60 text-xs">Durchschnittsbewertung</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-5xl font-extrabold">30+</p>
              <p className="text-cream/60 text-xs mt-1">Erfolgreiche Events</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-5xl font-extrabold">500+</p>
              <p className="text-cream/60 text-xs mt-1">Zufriedene Teilnehmer</p>
            </div>
            <div className="w-px h-16 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <p className="text-5xl font-extrabold text-lime">100%</p>
              <p className="text-cream/60 text-xs mt-1">Würden uns empfehlen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Flow */}
      <section className="px-6 py-20 bg-anthracite text-cream">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Tagesablauf
          </span>
          <h2 className="text-4xl font-extrabold mb-14">Ein typischer Event-Tag</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { time: "15:00", title: "Welcome & Arrival", desc: "Welcome Drinks, gebrandete Welcome Area und erste Musik schaffen eine exklusive Atmosphäre." },
              { time: "15:30", title: "Opening", desc: "Begrüßung, Einführung in das Eventkonzept und den Tagesablauf." },
              { time: "15:45", title: "Warm-up & Coaching", desc: "Gemeinsames Warm-up mit Trainern, Einweisung in Spielablauf und Turniermodus." },
              { time: "16:15", title: "Match Phase I", desc: "Erste Spielrunde — übrige Gäste genießen Lounge, Musik und Catering." },
              { time: "17:30", title: "Social Break", desc: "Gezielte Pause mit Fokus auf Austausch, Verpflegung und Networking." },
              { time: "18:00", title: "Match Phase II", desc: "Finalspiele und sportlicher Höhepunkt des Events." },
              { time: "19:00", title: "Siegerehrung", desc: "Übergabe von Pokalen, Awards und gebrandeten Preisen." },
              { time: "19:30", title: "Get Together", desc: "DJ, Drinks, Catering und Lounge-Atmosphäre für den stilvollen Ausklang." },
            ].map((item) => (
              <div key={item.time} className="rounded-2xl p-5 border border-white/10 hover:border-lime/60 hover:bg-white/5 transition-all">
                <p className="text-lime font-extrabold text-sm mb-1">{item.time}</p>
                <h3 className="font-bold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime text-white text-center px-6 py-24">
        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Bereit loszulegen?
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Euer Event. Unser Service.</h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Unverbindliche Anfrage in 2 Minuten — wir melden uns innerhalb von 24 Stunden mit einem maßgeschneiderten Angebot.
        </p>
        <Link
          href="/buchen"
          className="bg-forest text-cream px-10 py-4 rounded-full text-base font-bold hover:bg-anthracite transition-colors shadow-xl"
        >
          Jetzt kostenlos anfragen →
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-anthracite text-cream/40 text-sm px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>
          <strong className="text-cream">Court</strong> & Company — Corporate Padel Events
        </span>
        <div className="flex gap-6">
          <a href="/impressum" className="hover:text-lime transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-lime transition-colors">Datenschutz</a>
          <a href="/buchen" className="hover:text-lime transition-colors">Anfragen</a>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/4917651998637"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp kontaktieren"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </main>
  );
}
