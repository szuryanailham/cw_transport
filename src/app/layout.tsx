import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update the metadata for SEO
export const metadata: Metadata = {
  title: "Cahaya Waskitha Jogja | Rental Mobil",
  description: "Jasa rental mobil terpercaya di Yogyakarta, menyediakan berbagai pilihan mobil untuk perjalanan Anda.",
  keywords: "rental mobil, Yogyakarta, sewa mobil, transportasi, perjalanan",
  robots: "index, follow",
  metadataBase: new URL("https://www.cahayawaskithajogja.com"), // Set the base URL
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.cahayawaskithajogja.com",
    siteName: "Cahaya Waskitha Jogja",
    title: "Cahaya Waskitha Jogja | Rental Mobil",
    description: "Jasa rental mobil terpercaya di Yogyakarta, menyediakan berbagai pilihan mobil untuk perjalanan Anda.",
    images: "/images/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahaya Waskitha Jogja | Rental Mobil",
    description: "Jasa rental mobil terpercaya di Yogyakarta, menyediakan berbagai pilihan mobil untuk perjalanan Anda.",
    images: "/images/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon here */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Add OpenGraph meta tag for better sharing */}
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="p-2 py-3 md:p-5">
          <div className="w-full max-w-6xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
