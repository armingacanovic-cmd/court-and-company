"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LEISTUNGEN = [
  { id: "location", label: "Location & Court-Buchung", icon: "📍" },
  { id: "organisation", label: "Turnierorganisation & Moderation", icon: "📋" },
  { id: "coaching", label: "Coaching & Warm-up", icon: "🎾" },
  { id: "catering", label: "Catering & Getränke", icon: "🍽️" },
  { id: "entertainment", label: "DJ & Entertainment", icon: "🎵" },
  { id: "branding", label: "Branding & Merchandise", icon: "🎨" },
  { id: "networking", label: "Networking-Bereiche", icon: "💬" },
  { id: "siegerehrung", label: "Siegerehrung & Awards", icon: "🏆" },
];

const ANLAESSE = [
  "Mitarbeiter-Teamfeier",
  "Kunden-Event",
  "Partner-Event",
  "Firmen-Jubiläum",
  "Weihnachtsfeier",
  "Sonstiges",
];

type FormData = {
  datum: string;
  teilnehmer: string;
  anlass: string;
  leistungen: string[];
  firma: string;
  ansprechpartner: string;
  email: string;
  telefon: string;
  nachricht: string;
};

const initialData: FormData = {
  datum: "",
  teilnehmer: "",
  anlass: "",
  leistungen: [],
  firma: "",
  ansprechpartner: "",
  email: "",
  telefon: "",
  nachricht: "",
};

export default function BuchenPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleLeistung = (id: string) =>
    setForm((prev) => ({
      ...prev,
      leistungen: prev.leistungen.includes(id)
        ? prev.leistungen.filter((l) => l !== id)
        : [...prev.leistungen, id],
    }));

  const canNext1 = form.datum && form.teilnehmer && form.anlass;
  const canNext2 = form.leistungen.length > 0;
  const canSubmit = form.firma && form.ansprechpartner && form.email;

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      router.push("/danke");
    } catch {
      setError("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-cream">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 bg-cream border-b border-beige/30">
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-forest">Court</span>
          <span className="text-2xl font-light tracking-tight text-anthracite"> & Company</span>
        </Link>
      </nav>

      {/* Header */}
      <div className="text-center pt-14 pb-10 px-6">
        <span className="inline-block bg-lime text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Anfrage
        </span>
        <h1 className="text-4xl font-extrabold text-anthracite mb-2">Euer Event planen</h1>
        <p className="text-anthracite/55 text-sm">Unverbindlich · Kostenlos · Antwort in 24h</p>
      </div>

      {/* Progress */}
      <div className="flex justify-center gap-3 mb-10 px-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? "bg-forest text-cream" : "bg-sand text-anthracite/40"
              }`}
            >
              {step > s ? "✓" : s}
            </div>
            {s < 3 && (
              <div className={`w-16 h-0.5 ${step > s ? "bg-forest" : "bg-sand"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="max-w-xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-sm border border-beige/20 p-8">

          {/* Schritt 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-extrabold text-anthracite mb-6">Event-Details</h2>
              <div className="space-y-5">

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">
                    Wunschdatum *
                  </label>
                  <input
                    type="date"
                    value={form.datum}
                    onChange={(e) => update("datum", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">
                    Anzahl Teilnehmer *
                  </label>
                  <select
                    value={form.teilnehmer}
                    onChange={(e) => update("teilnehmer", e.target.value)}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  >
                    <option value="">Bitte wählen</option>
                    <option>10–20 Personen</option>
                    <option>20–40 Personen</option>
                    <option>40–60 Personen</option>
                    <option>60–100 Personen</option>
                    <option>100+ Personen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">
                    Anlass *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {ANLAESSE.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => update("anlass", a)}
                        className={`text-sm px-4 py-2.5 rounded-xl border font-medium transition-colors text-left ${
                          form.anlass === a
                            ? "bg-forest text-cream border-forest"
                            : "bg-cream border-beige/40 text-anthracite hover:border-forest"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schritt 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-extrabold text-anthracite mb-2">Gewünschte Leistungen</h2>
              <p className="text-sm text-anthracite/50 mb-6">Wähle alles aus, was euer Event beinhalten soll.</p>
              <div className="grid grid-cols-1 gap-3">
                {LEISTUNGEN.map((l) => {
                  const active = form.leistungen.includes(l.id);
                  return (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => toggleLeistung(l.id)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl border text-left transition-all ${
                        active
                          ? "bg-forest text-cream border-forest"
                          : "bg-cream border-beige/40 text-anthracite hover:border-forest"
                      }`}
                    >
                      <span className="text-xl">{l.icon}</span>
                      <span className="font-semibold text-sm">{l.label}</span>
                      <span className={`ml-auto text-xs font-bold ${active ? "text-lime" : "text-anthracite/20"}`}>
                        {active ? "✓" : "+"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Schritt 3 */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-extrabold text-anthracite mb-6">Eure Kontaktdaten</h2>
              <div className="space-y-4">

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">Firmenname *</label>
                  <input
                    type="text"
                    placeholder="Mustermann GmbH"
                    value={form.firma}
                    onChange={(e) => update("firma", e.target.value)}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">Ansprechpartner *</label>
                  <input
                    type="text"
                    placeholder="Max Mustermann"
                    value={form.ansprechpartner}
                    onChange={(e) => update("ansprechpartner", e.target.value)}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">E-Mail *</label>
                  <input
                    type="email"
                    placeholder="max@mustermann.de"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+49 123 456789"
                    value={form.telefon}
                    onChange={(e) => update("telefon", e.target.value)}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-anthracite mb-1.5">Anmerkungen</label>
                  <textarea
                    placeholder="Besondere Wünsche, Fragen oder Anmerkungen..."
                    value={form.nachricht}
                    onChange={(e) => update("nachricht", e.target.value)}
                    rows={3}
                    className="w-full border border-beige/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-cream resize-none"
                  />
                </div>

                {/* Zusammenfassung */}
                <div className="bg-sand rounded-2xl p-4 text-sm space-y-1">
                  <p className="font-bold text-anthracite mb-2">Zusammenfassung</p>
                  <p className="text-anthracite/60">📅 {form.datum} · {form.teilnehmer}</p>
                  <p className="text-anthracite/60">🎯 {form.anlass}</p>
                  <p className="text-anthracite/60">
                    ✓ {form.leistungen.length} Leistung{form.leistungen.length !== 1 ? "en" : ""} ausgewählt
                  </p>
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm text-anthracite/50 hover:text-anthracite font-medium transition-colors"
              >
                ← Zurück
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 ? !canNext1 : !canNext2}
                className="bg-forest text-cream px-7 py-3 rounded-full text-sm font-bold hover:bg-lime transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Weiter →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canSubmit || loading}
                className="bg-lime text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-forest transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {loading ? "Wird gesendet…" : "Anfrage senden ✓"}
              </button>
            )}
          </div>

        </div>

        <p className="text-center text-anthracite/35 text-xs mt-6">
          Unverbindlich · Keine Zahlung · Wir melden uns innerhalb von 24h
        </p>
      </div>
    </main>
  );
}
