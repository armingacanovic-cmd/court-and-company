import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Court & Company — Corporate Padel Events";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A4731",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#5DB940",
            opacity: 0.12,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#5DB940",
            opacity: 0.08,
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            background: "#5DB940",
            color: "white",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 4,
            padding: "8px 24px",
            borderRadius: 999,
            marginBottom: 32,
            display: "flex",
          }}
        >
          CORPORATE PADEL EVENTS · DEUTSCHLAND
        </div>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#F5F0E8",
              lineHeight: 1,
            }}
          >
            Court
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 300,
              color: "#F5F0E8",
              lineHeight: 1,
            }}
          >
            &amp; Company
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 26,
            color: "rgba(245,240,232,0.65)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Wir organisieren euren kompletten Padel-Event —{"\n"}
          vollständig, professionell, unvergesslich.
        </p>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#5DB940",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
