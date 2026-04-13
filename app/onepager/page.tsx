export default function OnepagerPage() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-4xl mb-4">📄</div>
        <h1 className="text-2xl font-extrabold text-anthracite mb-2">Court &amp; Company</h1>
        <p className="text-anthracite/55 text-sm mb-8">Corporate Padel Events — Übersicht als PDF</p>
        <a
          href="/api/onepager"
          download="court-and-company-onepager.pdf"
          className="bg-forest text-cream px-8 py-4 rounded-full text-base font-bold hover:bg-lime transition-colors shadow-lg inline-block"
        >
          PDF herunterladen →
        </a>
      </div>
    </main>
  );
}
