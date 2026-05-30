import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Melville Podiatry | Expert Foot Care Across Perth South",
    template: "%s | Melville Podiatry",
  },
  description:
    "Douglas Veitch, experienced podiatrist serving Lakelands, Halls Head and Armadale. General podiatry, orthotics, heel pain, diabetic foot care and more.",
  keywords: [
    "podiatrist",
    "podiatry",
    "Perth",
    "Lakelands",
    "Halls Head",
    "Armadale",
    "foot care",
    "orthotics",
    "heel pain",
    "diabetic foot care",
  ],
  openGraph: {
    title: "Melville Podiatry | Expert Foot Care Across Perth South",
    description:
      "Expert podiatry care from Douglas Veitch across three convenient Perth South locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
