import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-cream">
      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-anthracite mb-10">Impressum</h1>

        <div className="prose prose-sm text-anthracite/80 space-y-8">

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Armin Gacanovic<br />
              Kollatzstraße 5<br />
              14059 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Kontakt</h2>
            <p>
              Telefon: +49 176 51998637<br />
              E-Mail: armin.gacanovic@web.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Armin Gacanovic<br />
              Kollatzstraße 5, 14059 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-anthracite mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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
