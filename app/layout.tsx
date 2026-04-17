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
  title: {
    default: "Nail Studio | Profesyonel Tırnak Tasarımı",
    template: "%s | Nail Studio",
  },

  description:
    "Profesyonel nail art, kalıcı oje, protez tırnak ve bakım hizmetleri. Hemen randevu al, güzelliğini tamamla.",

  keywords: [
    "nail salon",
    "tırnak tasarımı",
    "protez tırnak",
    "kalıcı oje",
    "manikür",
    "pedikür",
    "nail art",
    "tırnak salonu İstanbul",
    "yakınımda nail salon",
    "tırnak bakımı",
  ],

  authors: [{ name: "Nail Studio" }],
  creator: "Nail Studio",

  verification: {
    google: "zyKEFn3r_X7lkwwRl073cA0Nq-FBI7F_wtSSlNc9Ag8",
  },

  openGraph: {
    title: "Nail Studio | Tırnak Tasarımı",
    description:
      "Kalıcı oje, protez tırnak ve nail art hizmetleriyle fark yarat.",
    url: "https://www.beyzanails.com.tr", // BURAYI KENDİ DOMAINİNLE DEĞİŞTİR
    siteName: "Nail Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail Studio",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nail Studio",
    description: "Profesyonel tırnak tasarımı ve bakım hizmetleri",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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