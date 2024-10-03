import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { appConfig } from "@/lib/config";
import "./globals.css";
import { Navbar } from "@/components/navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AppFont.className} antialiased bg-slate-50`}>
        <header className="flex justify-center px-2 py-4">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
