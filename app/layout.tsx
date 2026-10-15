import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

/* One variable font does everything: the width axis gives the extra-wide
   headings and the squeeze effect on "Hello". */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
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
  themeColor: "#13120f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
