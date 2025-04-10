
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "A simple movies app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
