import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";

export const revalidate=3600

export const metadata: Metadata = {
  title: "image gallery",
  description: "gallery where u can find diffrent images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <NavBar/>
        <main className="max-w-6xl mx-auto ">
        {children}
        </main>
      </body>
    </html>
  );
}
