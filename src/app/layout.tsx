import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-vintage-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-vintage-sans",
});

export const metadata: Metadata = {
  title: "Krunshe | Pure Freeze-Dried Fruit",
  description: "Minimalist, vintage, and pure. Krunshe offers freeze-dried fruit with no preservatives. Just nature at its best.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        <div className="paper-overlay" />
        {children}
      </body>
    </html>
  );
}
