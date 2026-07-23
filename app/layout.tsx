import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digie Store — Solusi Digital untuk Bisnis Modern",
  description:
    "Produk digital, bot otomatis, panel hosting, dan website siap pakai untuk membantu bisnis tumbuh lebih cepat.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Digie Store",
    description: "Solusi digital untuk bisnis, komunitas, dan kreator.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
