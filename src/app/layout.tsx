import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import { appConfig } from "@/config/app-config";
import "./globals.css";
import { HomeButton } from "@/components/ui/home-button";
import { Header } from "@/components/header";

const AppFont = Inter({
  subsets: ["latin"],
});

const { name, description } = appConfig;

export const metadata: Metadata = {
  title: name,
  description: description,
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${AppFont.className} antialiased bg-slate-50 select-none pt-[112px] sm:pt-[68px]`}
      >
        <Header />
        {children}
        <HomeButton />
      </body>
    </html>
  );
}
