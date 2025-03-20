import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabeel-e-Rahat",
  description: "Lifting Each Other - Join our mission to create lasting change through compassion and community support.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/app/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/app/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/app/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/app/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/app/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
