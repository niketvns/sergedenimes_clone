import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./styles/globals.scss";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serge DeNimes | Men's Silver Jewellery | Silver Rings & Necklaces",
  description:
    "Serge DeNimes offers men's silver jewellery available in silver & gold ranging across Rings, Necklaces, Earrings & Bracelets. The jewellery compliments the modern man with a style that is street with a British Heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
