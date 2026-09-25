import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared social share card so every page's image matches the site. */
export function ogCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
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
          backgroundImage: "radial-gradient(rgba(245, 158, 11, 0.16) 2px, transparent 2px)",
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
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#f59e0b" }} />
          {eyebrow}
        </div>
        <div
          style={{
            fontSize: title.length > 20 ? 72 : 96,
            fontWeight: 800,
            color: "#f2ece2",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 34, color: "#9c9488", marginTop: 28, maxWidth: 960 }}>{subtitle}</div>
        <div style={{ position: "absolute", bottom: 60, left: 80, fontSize: 26, color: "#f2ece2" }}>
          hadimoustafa.dev
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
