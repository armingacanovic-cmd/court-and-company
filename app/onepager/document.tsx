import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const FOREST = "#1A4731";
const GOLD = "#C9A227";
const CREAM = "#F5F0E8";
const SAND = "#EDE8DF";
const WHITE = "#FFFFFF";
const DARK = "#1A1A1A";

const s = StyleSheet.create({
  page: { backgroundColor: CREAM, fontFamily: "Helvetica", flexDirection: "column" },

  // ── HEADER ──────────────────────────────────────────────
  header: { backgroundColor: FOREST, padding: "28 32 18 32" },
  headerTitle: { color: GOLD, fontSize: 34, fontFamily: "Helvetica-Bold", lineHeight: 1.1 },
  headerSub: { color: WHITE, fontSize: 19, fontFamily: "Helvetica", marginTop: 8, lineHeight: 1.3 },

  // ── TAGLINE STRIP ────────────────────────────────────────
  taglineStrip: { backgroundColor: FOREST, paddingHorizontal: 32, paddingBottom: 18 },
  badgeWrap: { borderWidth: 1, borderColor: GOLD, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 3, alignSelf: "flex-start", marginBottom: 8 },
  badgeText: { color: GOLD, fontSize: 7, fontFamily: "Helvetica-Bold", letterSpacing: 1.8 },
  taglineLine: { color: WHITE, fontSize: 7.5, fontFamily: "Helvetica-Bold", lineHeight: 1.7, letterSpacing: 0.3 },

  // ── MIDDLE ROW ───────────────────────────────────────────
  middleRow: { flexDirection: "row", backgroundColor: SAND, flex: 0 },

  leftCol: { flex: 55, padding: "18 18 18 32" },
  divider: { width: 1, backgroundColor: "#C8C2B8" },
  rightCol: { flex: 45, padding: "18 28 18 18" },

  colHeading: { fontSize: 15, fontFamily: "Helvetica-Bold", color: DARK, marginBottom: 14, lineHeight: 1.2 },

  // bullet rows
  bulletRow: { flexDirection: "row", gap: 8, marginBottom: 9, alignItems: "flex-start" },
  bulletIconCircle: { width: 18, height: 18, borderRadius: 9, borderWidth: 1, borderColor: "#A8A098", backgroundColor: CREAM, marginTop: 0.5, flexShrink: 0 },
  bulletText: { fontSize: 7.5, color: DARK, lineHeight: 1.55, flex: 1 },

  // referenzen stats
  statRow: { flexDirection: "row", gap: 9, marginBottom: 9, alignItems: "center" },
  statIconBox: { width: 22, height: 22, borderWidth: 1, borderColor: DARK, borderRadius: 4, alignItems: "center", justifyContent: "center", flexShrink: 0 },
  statIconText: { fontSize: 10 },
  statText: { fontSize: 8.5, color: DARK, fontFamily: "Helvetica-Bold" },

  // player silhouettes placeholder
  playersRow: { flexDirection: "row", gap: 8, marginTop: 10, justifyContent: "center" },
  playerBox: { width: 44, height: 60, backgroundColor: DARK, borderRadius: 4, opacity: 0.15 },

  // ── BOTTOM ROW ───────────────────────────────────────────
  bottomRow: { flexDirection: "row", backgroundColor: FOREST, flex: 0 },
  bottomLeft: { flex: 55, padding: "18 18 18 32" },
  bottomDivider: { width: 1, backgroundColor: "rgba(255,255,255,0.12)" },
  bottomRight: { flex: 45, padding: "18 28 18 18" },

  bottomHeading: { fontSize: 15, fontFamily: "Helvetica-Bold", color: WHITE, marginBottom: 5 },
  bottomDesc: { fontSize: 7.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: 12 },

  leistungenGrid: { flexDirection: "row", flexWrap: "wrap", gap: 0 },
  leistungItem: { width: "50%", flexDirection: "row", gap: 6, alignItems: "center", marginBottom: 9 },
  leistungDotOuter: { width: 18, height: 18, borderRadius: 9, backgroundColor: "rgba(255,255,255,0.12)", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  leistungDotInner: { width: 6, height: 6, borderRadius: 3, backgroundColor: GOLD },
  leistungLabel: { fontSize: 7.5, color: WHITE, fontFamily: "Helvetica-Bold" },

  kontaktHeading: { fontSize: 15, fontFamily: "Helvetica-Bold", color: WHITE, marginBottom: 14 },
  kontaktRow: { flexDirection: "row", gap: 10, marginBottom: 11, alignItems: "center" },
  kontaktIconBox: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: "rgba(255,255,255,0.35)", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  kontaktIconChar: { fontSize: 8, color: WHITE },
  kontaktText: { fontSize: 8, color: WHITE, lineHeight: 1.4 },

  // ── FOOTER ───────────────────────────────────────────────
  footer: { backgroundColor: GOLD, padding: "11 32", alignItems: "center", justifyContent: "center" },
  footerText: { color: FOREST, fontSize: 8.5, fontFamily: "Helvetica-Bold", letterSpacing: 2.5 },
});

const leistungen = [
  "Konzeption",
  "Organisation",
  "Teilnehmererlebnis",
  "Markeninszenierung",
  "Nachbereitung",
];

const bullets = [
  "Full-Service von A bis Z –\nIhr genießt, wir organisieren.",
  "Keine Court-Erfahrung nötig –\nUnser Coaching holt alle ab.",
  "Teambuilding, das wirklich verbindet –\nFür Mitarbeitende, Kunden und Partner.",
  "Professionelle Inszenierung –\nVon der Konzeption bis zum Aftermovie.",
];

export function OnepagerDocument() {
  return (
    <Document title="Court & Company — Corporate Padel Events" author="Court & Company">
      <Page size="A4" style={s.page}>

        {/* ── HEADER ── */}
        <View style={s.header}>
          <Text style={s.headerTitle}>Court &amp;{"\n"}Company</Text>
          <Text style={s.headerSub}>Padel trifft{"\n"}Business.</Text>
        </View>

        {/* ── TAGLINE STRIP ── */}
        <View style={s.taglineStrip}>
          <View style={s.badgeWrap}>
            <Text style={s.badgeText}>CORPORATE PADEL EVENTS</Text>
          </View>
          <Text style={s.taglineLine}>
            WAS WÄRE, WENN EUER NÄCHSTES EVENT WIRKLICH ETWAS BEWEGT?{"\n"}
            WIR ORGANISIEREN CORPORATE PADEL EVENTS, DIE IN ERINNERUNG BLEIBEN –{"\n"}
            UNVERGESSLICH, SPORTLICH, MODERN.
          </Text>
        </View>

        {/* ── MIDDLE ROW ── */}
        <View style={s.middleRow}>
          {/* Left — Warum Court & Company */}
          <View style={s.leftCol}>
            <Text style={s.colHeading}>WARUM{"\n"}COURT &amp;{"\n"}COMPANY</Text>
            {bullets.map((b) => (
              <View key={b} style={s.bulletRow}>
                <View style={s.bulletIconCircle} />
                <Text style={s.bulletText}>{b}</Text>
              </View>
            ))}
          </View>

          <View style={s.divider} />

          {/* Right — Referenzen */}
          <View style={s.rightCol}>
            <Text style={s.colHeading}>REFERENZEN</Text>

            {[
              { icon: "★", text: "30+ erfolgreiche Events" },
              { icon: "♟", text: "500+ Teilnehmer" },
              { icon: "◎", text: "4.8 Sterne Bewertung" },
            ].map((item) => (
              <View key={item.text} style={s.statRow}>
                <View style={s.statIconBox}>
                  <Text style={s.statIconText}>{item.icon}</Text>
                </View>
                <Text style={s.statText}>{item.text}</Text>
              </View>
            ))}

            <View style={s.playersRow}>
              <View style={s.playerBox} />
              <View style={s.playerBox} />
            </View>
          </View>
        </View>

        {/* ── BOTTOM ROW ── */}
        <View style={s.bottomRow}>
          {/* Left — Leistungen */}
          <View style={s.bottomLeft}>
            <Text style={s.bottomHeading}>LEISTUNGEN</Text>
            <Text style={s.bottomDesc}>
              Von der Konzeption bis zum Aftermovie. Wir übernehmen alles –{"\n"}
              vollständig, professionell, termingerecht.
            </Text>
            <View style={s.leistungenGrid}>
              {leistungen.map((l) => (
                <View key={l} style={s.leistungItem}>
                  <View style={s.leistungDotOuter}>
                    <View style={s.leistungDotInner} />
                  </View>
                  <Text style={s.leistungLabel}>{l}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.bottomDivider} />

          {/* Right — Kontakt */}
          <View style={s.bottomRight}>
            <Text style={s.kontaktHeading}>Kontakt</Text>

            {[
              { icon: "⊕", text: "www.court-and-company.com" },
              { icon: "✉", text: "info@court-and-company.com" },
              { icon: "◎", text: "+49 176 519 986 37" },
            ].map((item) => (
              <View key={item.text} style={s.kontaktRow}>
                <View style={s.kontaktIconBox}>
                  <Text style={s.kontaktIconChar}>{item.icon}</Text>
                </View>
                <Text style={s.kontaktText}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── FOOTER ── */}
        <View style={s.footer}>
          <Text style={s.footerText}>EUER NÄCHSTES EVENT WARTET. WIR AUCH!</Text>
        </View>

      </Page>
    </Document>
  );
}
