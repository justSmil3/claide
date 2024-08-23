import type { Metadata } from "next";
import Navigation from "./components/navigation"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "CLAIDE",
  description: "created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secundary`}>
	    <Navigation /> 
	    {children}
	  </body>
    </html>
  );
}
