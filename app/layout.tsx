import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { uncutSans, geistMono } from "./fonts";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fanii.lol"),
  title: "Fanindra Maharana",
  description:
    "Fanindra is an Interaction Designer based in India, specializing in UX Design, UX Research, Web Design and Framer. Open to design collaborations",
  openGraph: {
    title: "Fanindra Maharana",
    url: "https://fanii.lol/",
    images: [{ url: "https://fanii.lol/og.png", alt: "Fanindra Maharana" }],
  },
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'OnAXlotFt_1wXDuWaJRkA_v8ZfNtkFgx_4kWgANvEB0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${uncutSans.variable} ${geistMono.variable} light`}>
      <body className="width-full bg-contrast text-primary antialiased">
        <Navigation />
        <div className="mx-auto max-w-[900px] px-6 pb-24 pt-16 md:px-6 md:pb-24 md:pt-20">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
