import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Fonts for generated images (Open Graph, apple-icon). ImageResponse can't read
 * the woff2 files next/font uses, so TTF/WOFF copies live in src/assets/fonts.
 */
const dir = join(process.cwd(), "src/assets/fonts");

export async function loadOgFonts() {
  const [regular, semibold, mono] = await Promise.all([
    readFile(join(dir, "Geist-Regular.ttf")),
    readFile(join(dir, "Geist-SemiBold.ttf")),
    readFile(join(dir, "JetBrainsMono-Regular.woff")),
  ]);
  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
    { name: "JetBrains Mono", data: mono, weight: 400 as const, style: "normal" as const },
  ];
}

/** Palette for generated images (matches the dark theme in globals.css). */
export const ogColors = {
  bg: "#0b0d10",
  surface: "#12151a",
  border: "#1f242c",
  fg: "#e8eaed",
  muted: "#9aa3ae",
  accent: "#ffb224",
};
