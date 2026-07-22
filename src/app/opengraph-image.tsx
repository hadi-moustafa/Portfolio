import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hadi Moustafa — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "#0c0b09",
          backgroundImage:
            "radial-gradient(rgba(245, 158, 11, 0.16) 2px, transparent 2px)",
          backgroundSize: "34px 34px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 24,
            fontFamily: "monospace",
            color: "#f59e0b",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#f59e0b",
            }}
          />
          SYSTEMS ONLINE
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#f2ece2",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          HADI MOUSTAFA
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#9c9488",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Backend engineer. I build for the moments when the system is under real load — not the demo.
        </div>
      </div>
    ),
    { ...size }
  );
}
