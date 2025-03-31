import { Providers } from "./providers/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import customConfig from "../../project.config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: customConfig.name,
  description: customConfig.description,
};

export default function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialCount = 0
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Providers count = {initialCount}>
        { children}
        </Providers>
      </body>
    </html>
  );
}
