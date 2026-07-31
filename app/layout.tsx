import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://akurilin.github.io/friendship-field-guide";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Friendship Field Guide",
  description: "Four minds. One brilliant little ecosystem. A playful Enneagram field guide for Dan, Alex, Lily, and Tina.",
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  openGraph: {
    title: "The Friendship Field Guide",
    description: "Four minds. One brilliant little ecosystem.",
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "The Friendship Field Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Friendship Field Guide",
    description: "Four minds. One brilliant little ecosystem.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
