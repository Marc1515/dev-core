import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/config/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full h-full" lang="en">
      <body className="w-full h-full">{children}</body>
    </html>
  );
}
