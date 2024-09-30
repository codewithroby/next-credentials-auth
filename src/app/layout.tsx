import { type Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const AppFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next 14 Credentials Auth",
  description:
    "Next 14 Auth is a Next.js starter template with credentials authentication built using NextAuth v5, Drizzle ORM, PostgreSQL, TypeScript, Zod and Resend.",
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
