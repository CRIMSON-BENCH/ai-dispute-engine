import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";

export const metadata: Metadata = {
  title: {
    default: "AI Dispute Engine — AI Demand Letters in 60 Seconds",
    template: "%s | AI Dispute Engine",
  },
  description:
    "Generate professional demand letters, DMCA takedowns, medical appeals, and credit disputes in 60 seconds. First letter free. No lawyer needed.",
  openGraph: {
    title: "AI Dispute Engine — Fight Back and Win",
    description:
      "AI-powered demand letters that cite the right statutes. First letter free.",
    siteName: "AI Dispute Engine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
