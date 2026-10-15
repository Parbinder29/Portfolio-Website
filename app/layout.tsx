import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-website-mu-nine-43.vercel.app"),
  title: "Parbinder Singh · AI, IoT & Web",
  description:
    "Portfolio of Parbinder Singh, B.Tech CSE at Central University of Jammu: multi-sensor fusion, a patented smart irrigation system, waste classification, hackathon wins and NCC.",
  openGraph: {
    title: "Parbinder Singh · AI, IoT & Web",
    description: "Multi-sensor fusion, a patented smart irrigation system and deep-learning waste classification.",
    images: ["/portrait.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
