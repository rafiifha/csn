import type { Metadata } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Perdagangan & Jasa`,
    template: `%s | ${company.name}`,
  },
  description: company.tagline,
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
