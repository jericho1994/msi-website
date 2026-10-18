import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Heating, Ventilation & Air Conditioning`,
  description:
    "Furnace, boiler, heat pump and air conditioning installation, repair and maintenance for homes and businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. Night Eye, Dark Reader) add
    // attributes to <html> before React loads. Only affects this one tag.
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
