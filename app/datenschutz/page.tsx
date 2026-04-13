import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-anthracite mb-2">Datenschutzerklärung</h1>
        <p className="text-anthracite/50 text-sm mb-10">Gemäß DSGVO</p>

        <div className="space-y-8 text-sm text-anthracite/80 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutzgesetze ist:<br /><br />
              Armin Gacanovic<br />
              Kollatzstraße 5<br />
              14059 Berlin<br />
              E-Mail: team@court-and-company.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur, wenn du uns diese im Rahmen einer Anfrage über unser Kontaktformular freiwillig mitteilst. Dies umfasst:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Firmenname</li>
              <li>Name des Ansprechpartners</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Veranstaltungsdetails (Datum, Teilnehmerzahl, Anlass)</li>
            </ul>
            <p className="mt-3">
              Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage und zur Kontaktaufnahme verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">3. Rechtsgrundlage</h2>
            <p>
              Die Verarbeitung der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">4. Weitergabe von Daten</h2>
            <p>
              Wir geben deine personenbezogenen Daten nicht an Dritte weiter, es sei denn, dies ist zur Vertragserfüllung erforderlich oder du hast ausdrücklich eingewilligt. Für den E-Mail-Versand nutzen wir den Dienst <strong>Resend</strong> (Resend Inc., USA), der als Auftragsverarbeiter gemäß Art. 28 DSGVO tätig wird.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">5. Speicherdauer</h2>
            <p>
              Deine Daten werden nur so lange gespeichert, wie es für die Bearbeitung deiner Anfrage erforderlich ist, bzw. solange gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">6. Hosting</h2>
            <p>
              Diese Website wird auf Servern von <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Vercel verarbeitet dabei technisch bedingt Verbindungsdaten (u. a. IP-Adressen). Die Datenübertragung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">7. Cookies & Tracking</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies und keine Analyse-Tools. Es werden ausschließlich technisch notwendige Daten verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">8. Deine Rechte</h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung deiner Rechte wende dich an: <strong>team@court-and-company.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-3">9. Beschwerderecht</h2>
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde richtet sich nach deinem Bundesland.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-beige/30">
          <Link href="/" className="text-forest font-semibold hover:text-lime transition-colors text-sm">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
