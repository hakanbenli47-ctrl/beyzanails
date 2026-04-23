import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 🔥 KRİTİK (canonical sistemi)
  metadataBase: new URL("https://www.beyzanails.com.tr"),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Beyza Nails Nail Studio",
    template: "%s | Beyza Nails",
  },

  description:
    "Beyza Nails nail studio. Protez tırnak, kalıcı oje ve nail art hizmetleri. Profesyonel ve hijyenik uygulamalarla bakımlı tırnaklara sahip olun.",

  keywords: [
    "beyza nails",
    "nail studio",
    "protez tırnak",
    "kalıcı oje",
    "nail art",
    "tırnak tasarımı",
    "manikür",
    "pedikür",
    "tırnak bakımı",
  ],

  authors: [{ name: "Beyza Nails" }],
  creator: "Beyza Nails",

  verification: {
    google: "zyKEFn3r_X7lkwwRl073cA0Nq-FBI7F_wtSSlNc9Ag8",
  },

  openGraph: {
    title: "Beyza Nails Nail Studio",
    description:
      "Protez tırnak, kalıcı oje ve nail art hizmetleri. Beyza Nails ile profesyonel bakım deneyimi.",
    url: "https://www.beyzanails.com.tr/",
    siteName: "Beyza Nails",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beyza Nails",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beyza Nails Nail Studio",
    description:
      "Profesyonel protez tırnak, kalıcı oje ve nail art hizmetleri.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}