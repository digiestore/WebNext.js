import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digie Store — Bot, Hosting, Website & Automation",
  description: "Solusi digital untuk bot WhatsApp, bot Telegram, panel Pterodactyl, website custom, dan automation.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Digie Store",
    description: "Solusi digital yang dibuat lebih mudah.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
