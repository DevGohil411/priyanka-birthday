import type { Metadata } from "next";
import { Playfair_Display, Lato, Caveat } from "next/font/google";
import "./globals.css";
import ParticlesProviderWrapper from "@/components/ui/ParticlesProviderWrapper";
import GlobalMusic from "@/components/ui/GlobalMusic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-lato",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happy Birthday Priyanka ✨",
  description: "A magical birthday surprise made just for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} ${caveat.variable} antialiased`}
      >
        <ParticlesProviderWrapper>
          {/* Global background music — persists across ALL screen changes */}
          <GlobalMusic src="/bg-music.mp3" />
          {children}
        </ParticlesProviderWrapper>
      </body>
    </html>
  );
}
