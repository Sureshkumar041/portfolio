import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { PointerGlow } from "@/components/motion/PointerGlow";
import { Footer } from "@/components/sections/Footer";
import { Providers } from "@/components/layout/Providers";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

const { personal, seo, siteUrl } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  alternates: { canonical: "/" },
  // The Open Graph image comes from `app/opengraph-image.tsx` automatically.
  openGraph: {
    type: "profile",
    url: "/",
    siteName: personal.name,
    title: seo.title,
    description: seo.description,
    locale: "en_IN",
    firstName: personal.firstName,
    lastName: personal.name.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class before React hydrates.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans">
        {/* Without JS, scroll reveals never fire — show everything instead. */}
        <noscript>
          <style>{`[data-inview="false"]{opacity:1!important;transform:none!important}.term *{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>
          <a
            href="#main"
            className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-medium text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            Skip to content
          </a>

          {/* Decorative background layers */}
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
            <div className="bg-grid absolute inset-0" />
            <div className="bg-noise absolute inset-0" />
          </div>

          <Navbar items={portfolio.nav} name={personal.name} />
          {children}
          <Footer />
          <PointerGlow />
        </Providers>
      </body>
    </html>
  );
}
