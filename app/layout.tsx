import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://akurilin.github.io/mandelbro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mandelbro",
  description: "Four minds. One brilliant little ecosystem. A playful Enneagram field guide for the Mandelbro crew.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "Mandelbro",
    description: "Four minds. One brilliant little ecosystem.",
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Mandelbro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandelbro",
    description: "Four minds. One brilliant little ecosystem.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
