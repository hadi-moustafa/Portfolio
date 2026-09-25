import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const font = (w: string) => readFile(join(process.cwd(), `src/assets/fonts/Poppins-${w}.ttf`));

/** Shared social share card in the se.hadi brand. */
export async function ogCard({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const [medium, bold] = await Promise.all([font("Medium"), font("Bold")]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          background: "#F5F5F0",
          backgroundImage: "radial-gradient(rgba(13, 27, 42, 0.08) 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          fontFamily: "Poppins",
          color: "#0D1B2A",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 500, letterSpacing: "-0.02em" }}>
          se.hadi<span style={{ color: "#00C2CB" }}>/</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "0.14em", color: "#00767C", marginBottom: 20 }}>
            {eyebrow.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: title.length > 28 ? 64 : 80, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
            {/* "\n" in a title forces a line break */}
            {title.split("\n").map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <div style={{ fontSize: 30, fontWeight: 500, color: "#2B2B2B", marginTop: 24, maxWidth: 1000 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24, fontWeight: 500 }}>
          <span>hadimoustafa.dev</span>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ width: 90, height: 12, borderRadius: 6, background: "#0D1B2A" }} />
            <div style={{ width: 60, height: 12, borderRadius: 6, background: "#00C2CB" }} />
            <div style={{ width: 30, height: 12, borderRadius: 6, background: "#FF6B5B" }} />
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Poppins", data: medium, weight: 500, style: "normal" },
        { name: "Poppins", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
