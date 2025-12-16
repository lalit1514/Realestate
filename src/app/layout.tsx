import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riddhi Siddhi Apartment | Premium Living in Akola",
  description: "Experience luxury living at Riddhi Siddhi Apartment in Akola. Premium residential apartments with world-class amenities, modern architecture, and strategic location for your dream home.",
  keywords: "Riddhi Siddhi Apartment, luxury apartments Akola, premium residential, real estate Akola, property in Akola",
  openGraph: {
    title: "Riddhi Siddhi Apartment | Premium Living in Akola",
    description: "Experience luxury living at Riddhi Siddhi Apartment. Premium apartments with world-class amenities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#fefdfb] text-[#1a1a1a]`}
      >
        {children}
      </body>
    </html>
  );
}
