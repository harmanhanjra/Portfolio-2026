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
          background: "#05070d",
          color: "#f2efe9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#38bdf8" }}>SYS.LAB // AI CORE ONLINE</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 96, fontWeight: 800, lineHeight: 1, marginTop: 16 }}>
          <span>HARMANPREET</span>
          <span>SINGH</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600, color: "#7dd3fc", marginTop: 16 }}>AI ENGINEER</div>
        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8", marginTop: 8 }}>
          Generative AI · Agentic Systems · Full Stack
        </div>
      </div>
    ),
    { ...size }
  );
}
