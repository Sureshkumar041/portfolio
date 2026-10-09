import { ImageResponse } from "next/og";
import { loadOgFonts, ogColors as c } from "@/lib/og-fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** iOS home-screen icon: the same "SK" monogram as icon.svg. */
// Read at module load (build time) so the image is prerendered as a static file.
const fonts = await loadOgFonts();

export default async function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: c.bg,
        color: c.accent,
        fontFamily: "JetBrains Mono",
        fontSize: 76,
      }}
    >
      SK
    </div>,
    { ...size, fonts },
  );
}
