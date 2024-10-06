import type { Viewport, Metadata } from "next";
import { Inter } from "next/font/google";
import { appConfig } from "@/lib/config";
import "./globals.css";

const AppFont = Inter({
  subsets: ["latin"],
});

const { name, description, metaImage } = appConfig;

export const metadata: Metadata = {
  title: name,
  description: description,
  openGraph: {
    images: metaImage,
  },
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
      <body className={`${AppFont.className} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
