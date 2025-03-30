import { Providers } from "./providers/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiago's Portfolio",
  description: "This is my personal portfolio, feel free to take a look!",
};

export default function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialCount = 0
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Providers count = {initialCount}>
        { children}
        </Providers>
      </body>
    </html>
  );
}
