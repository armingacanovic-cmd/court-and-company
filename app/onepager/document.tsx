import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const FOREST = "#1A4731";
const LIME = "#7EC957";
const CREAM = "#FAF7F2";
const SAND = "#EDE8DF";
const ANTHRACITE = "#252525";

const s = StyleSheet.create({
  page: { backgroundColor: CREAM, fontFamily: "Helvetica", color: ANTHRACITE },

  // Header
  header: { backgroundColor: FOREST, padding: "20 32", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  logoText: { color: "white", fontSize: 20, fontFamily: "Helvetica-Bold" },
  logoLight: { color: "white", fontSize: 20, fontFamily: "Helvetica" },
  tagline: { color: "rgba(255,255,255,0.6)", fontSize: 8, letterSpacing: 2, marginTop: 3, textTransform: "uppercase" },
  headerContact: { color: "rgba(255,255,255,0.6)", fontSize: 9, textAlign: "right" },

  // Hero strip
  hero: { backgroundColor: "#2D6B4A", padding: "14 32", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  heroText: { color: "white", fontSize: 10, maxWidth: 340, lineHeight: 1.6 },
  heroBold: { fontFamily: "Helvetica-Bold" },
  stats: { flexDirection: "row", gap: 20 },
  statVal: { color: LIME, fontSize: 16, fontFamily: "Helvetica-Bold", textAlign: "center" },
  statLabel: { color: "rgba(255,255,255,0.5)", fontSize: 7, textTransform: "uppercase", letterSpacing: 1, textAlign: "center" },

  // Body
  body: { padding: "20 32", gap: 18 },

  // Section
  sectionBadge: { backgroundColor: FOREST, color: "white", fontSize: 7, fontFamily: "Helvetica-Bold", letterSpacing: 1.5, textTransform: "uppercase", padding: "2 8", borderRadius: 20, alignSelf: "flex-start", marginBottom: 6 },
  sectionBadgeLime: { backgroundColor: LIME },
  sectionTitle: { fontSize: 13, fontFamily: "Helvetica-Bold", color: FOREST, marginBottom: 8 },

  // Cards grid 4
  grid4: { flexDirection: "row", gap: 6 },
  card4: { flex: 1, backgroundColor: FOREST, borderRadius: 6, padding: 10 },
  card4Title: { fontSize: 7, fontFamily: "Helvetica-Bold", color: LIME, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4, lineHeight: 1.3 },
  card4Desc: { fontSize: 7.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 },

  // Cards grid 3
  grid3: { flexDirection: "row", gap: 6 },
  cardLight: { flex: 1, backgroundColor: SAND, borderRadius: 6, padding: 10 },
  cardDark: { flex: 1, backgroundColor: FOREST, borderRadius: 6, padding: 10 },
  cardTitleLight: { fontSize: 8, fontFamily: "Helvetica-Bold", color: FOREST, marginBottom: 4 },
  cardTitleDark: { fontSize: 8, fontFamily: "Helvetica-Bold", color: LIME, marginBottom: 4 },
  cardDescLight: { fontSize: 7.5, color: "rgba(37,37,37,0.6)", lineHeight: 1.5 },
  cardDescDark: { fontSize: 7.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 },
  cardIcon: { fontSize: 12, marginBottom: 4 },

  // Packages
  pkgBadge: { backgroundColor: LIME, color: "white", fontSize: 7, fontFamily: "Helvetica-Bold", letterSpacing: 1, textTransform: "uppercase", padding: "2 6", borderRadius: 12, alignSelf: "flex-start", marginBottom: 4 },
  pkgName: { fontSize: 12, fontFamily: "Helvetica-Bold", marginBottom: 6 },
  pkgNameLight: { color: ANTHRACITE },
  pkgNameDark: { color: "white" },
  featureRow: { flexDirection: "row", gap: 5, marginBottom: 3, alignItems: "flex-start" },
  featureCheck: { color: LIME, fontSize: 7, fontFamily: "Helvetica-Bold", marginTop: 1 },
  featureText: { fontSize: 7.5, lineHeight: 1.4 },
  featureTextLight: { color: "rgba(37,37,37,0.7)" },
  featureTextDark: { color: "rgba(255,255,255,0.8)" },

  // Footer
  footer: { backgroundColor: FOREST, padding: "12 32", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  footerLogo: { color: "white", fontSize: 11, fontFamily: "Helvetica-Bold" },
  footerContactWrap: { flexDirection: "row", gap: 20 },
  footerLabel: { fontSize: 7, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 2 },
  footerVal: { fontSize: 8, color: "white", fontFamily: "Helvetica-Bold" },

  noteText: { fontSize: 7, color: "rgba(37,37,37,0.4)", textAlign: "center", marginTop: 4 },
});

const leistungen = [
  { icon: "●", title: "Konzeption", desc: "Zielsetzung, Formatwahl, Dramaturgie und Ablaufdesign." },
  { icon: "●", title: "Organisation", desc: "Location, Court-Buchung, Teilnehmerhandling und Turnierlogik." },
  { icon: "●", title: "Teilnehmererlebnis", desc: "Coaching, Warm-up, Spielmodi, Moderation und Catering." },
  { icon: "●", title: "Markeninszenierung", desc: "Branding, Welcome Area, Materialien und Awards." },
  { icon: "●", title: "Nachbereitung", desc: "Aftermovie, Fotoauswahl, Social Recap und Highlight-Content." },
  { icon: "●", title: "Ihr Input. Unser Service.", desc: "Sie geben Ziel und Anlass vor — wir übernehmen alles." },
];

const pakete = [
  {
    name: "Court", dark: false,
    features: ["Court-Buchung & Location", "Turnierorganisation", "Coaching & Warm-up", "Equipment & Ausstattung", "Moderation & Betreuung"],
  },
  {
    name: "Business", dark: true, bestseller: true,
    features: ["Alles aus Court", "Catering & Getränke", "DJ & Musik", "Branding & Merchandise", "Networking-Bereich"],
  },
  {
    name: "Premium", dark: false,
    features: ["Alles aus Business", "Individuelle Inszenierung", "Siegerehrung & Awards", "Professionelle Fotografie", "Komplette Eventleitung"],
  },
];

export function OnepagerDocument() {
  return (
    <Document title="Court & Company — Corporate Padel Events" author="Court & Company">
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View>
            <Text style={s.logoText}>Court <Text style={s.logoLight}>&amp; Company</Text></Text>
            <Text style={s.tagline}>Corporate Padel Events · Deutschland</Text>
          </View>
          <View>
            <Text style={s.headerContact}>team@court-and-company.com</Text>
            <Text style={s.headerContact}>court-and-company.com</Text>
          </View>
        </View>

        {/* Hero */}
        <View style={s.hero}>
          <Text style={s.heroText}>
            Wir gestalten <Text style={s.heroBold}>hochwertige Padel-Eventformate</Text> für Unternehmen — sportlich, stilvoll und vollständig organisiert. Von der Konzeption bis zur Nachbereitung.
          </Text>
          <View style={s.stats}>
            {[["30+", "Events"], ["500+", "Teilnehmer"], ["4.8★", "Bewertung"]].map(([val, label]) => (
              <View key={label}>
                <Text style={s.statVal}>{val}</Text>
                <Text style={s.statLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Body */}
        <View style={s.body}>

          {/* Für welche Anlässe */}
          <View>
            <Text style={s.sectionBadge}>Zielgruppen</Text>
            <Text style={s.sectionTitle}>Für welche Anlässe?</Text>
            <View style={s.grid4}>
              {[
                { title: "Teambuilding & Mitarbeiterbindung", desc: "Bereichsübergreifende Aktivierung und gelebte Wertschätzung." },
                { title: "Kundenevents & Kundenbindung", desc: "Bestandskunden exklusiv und persönlich an die Marke binden." },
                { title: "Partner- & Netzwerkveranstaltungen", desc: "B2B-Kontakte in modernem Format zusammenbringen." },
                { title: "Employer Branding & Recruiting", desc: "Als Arbeitgeber positionieren und Young Professionals ansprechen." },
              ].map((item) => (
                <View key={item.title} style={s.card4}>
                  <Text style={s.card4Title}>{item.title}</Text>
                  <Text style={s.card4Desc}>{item.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Leistungsumfang */}
          <View>
            <Text style={[s.sectionBadge, s.sectionBadgeLime]}>Full-Service</Text>
            <Text style={s.sectionTitle}>Unser Leistungsumfang</Text>
            <View style={s.grid3}>
              {leistungen.map((item, i) => (
                <View key={item.title} style={[1, 3, 5].includes(i) ? s.cardDark : s.cardLight}>
                  <Text style={[1, 3, 5].includes(i) ? s.cardTitleDark : s.cardTitleLight}>{item.title}</Text>
                  <Text style={[1, 3, 5].includes(i) ? s.cardDescDark : s.cardDescLight}>{item.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Pakete */}
          <View>
            <Text style={s.sectionBadge}>Pakete</Text>
            <Text style={s.sectionTitle}>Unsere Pakete</Text>
            <View style={s.grid3}>
              {pakete.map((pkg) => (
                <View key={pkg.name} style={pkg.dark ? s.cardDark : s.cardLight}>
                  {pkg.bestseller && <Text style={s.pkgBadge}>Bestseller</Text>}
                  <Text style={[s.pkgName, pkg.dark ? s.pkgNameDark : s.pkgNameLight]}>{pkg.name}</Text>
                  {pkg.features.map((f) => (
                    <View key={f} style={s.featureRow}>
                      <Text style={s.featureCheck}>✓</Text>
                      <Text style={[s.featureText, pkg.dark ? s.featureTextDark : s.featureTextLight]}>{f}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
            <Text style={s.noteText}>Alle Pakete individuell kalkuliert · Ab 4 Personen · Unverbindliche Anfrage in 2 Minuten</Text>
          </View>

        </View>

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerLogo}>Court &amp; Company</Text>
          <View style={s.footerContactWrap}>
            {[
              { label: "E-Mail", value: "team@court-and-company.com" },
              { label: "WhatsApp", value: "+49 176 519 98637" },
              { label: "Web", value: "court-and-company.com" },
            ].map((item) => (
              <View key={item.label}>
                <Text style={s.footerLabel}>{item.label}</Text>
                <Text style={s.footerVal}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

      </Page>
    </Document>
  );
}
