import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
import { loadOgFonts, ogColors as c } from "@/lib/og-fonts";

const { personal, seo, siteUrl } = portfolio;

export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social preview card, generated at build time. */
// Read at module load (build time) so the image is prerendered as a static file.
const fonts = await loadOgFonts();

export default async function Image() {
  const host = new URL(siteUrl).host;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: c.bg,
        backgroundImage: `linear-gradient(to right, rgba(232,234,237,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,234,237,0.05) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        color: c.fg,
        fontFamily: "Geist",
      }}
    >
      {/* Amber glow */}
      <div
        style={{
          position: "absolute",
          top: -160,
          left: -120,
          width: 560,
          height: 560,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(255,178,36,0.22), transparent 70%)",
        }}
      />

      <div style={{ display: "flex", fontFamily: "JetBrains Mono", fontSize: 28, color: c.fg }}>
        <span style={{ color: c.accent }}>~/</span>
        {personal.name.toLowerCase().replace(/\s+/g, "-")}
        <span style={{ color: c.accent }}>_</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 600, letterSpacing: -4 }}>
          {personal.name}
          <span style={{ color: c.accent }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontFamily: "JetBrains Mono",
            fontSize: 34,
            color: c.accent,
          }}
        >
          <span style={{ color: c.muted, marginRight: 14 }}>{"//"}</span>
          {personal.title}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
          {seo.ogStack.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "8px 16px",
                border: `1px solid ${c.border}`,
                backgroundColor: c.surface,
                borderRadius: 8,
                fontFamily: "JetBrains Mono",
                fontSize: 22,
                color: c.fg,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono",
          fontSize: 24,
          color: c.muted,
        }}
      >
        <span>{personal.location}</span>
        <span style={{ color: c.fg }}>{host}</span>
      </div>
    </div>,
    { ...size, fonts },
  );
}
