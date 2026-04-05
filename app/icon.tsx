import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A4731",
          borderRadius: "7px",
          position: "relative",
        }}
      >
        {/* C letter */}
        <span
          style={{
            color: "#F5F0E8",
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "serif",
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          C
        </span>
        {/* Green dot (padel ball) */}
        <div
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#5DB940",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
