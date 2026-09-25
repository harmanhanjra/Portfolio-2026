import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          background: "#0b1210",
          color: "#f1eadc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#e2a06f" }}>AI ENGINEER // BERLIN</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 800, lineHeight: 1, marginTop: 16 }}>
          <span>HARMANPREET</span>
          <span>SINGH</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600, color: "#e2a06f", marginTop: 16 }}>AGENTS · RAG · FULL STACK</div>
        <div style={{ display: "flex", fontSize: 26, color: "#b6bdb4", marginTop: 8 }}>
          Production-minded AI systems and applications
        </div>
      </div>
    ),
    { ...size }
  );
}
