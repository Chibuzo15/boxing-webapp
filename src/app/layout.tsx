import Header from "@/components/Header/index";
import Footer from "@/components/Footer";

import { addClassNames } from "@/utils/functions";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boxing News, Interviews, Results and Videos - Boxing site",
  description: "Boxing News, Interviews, Results and Videos - Boxing site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        'bg-white min-h-screen flex flex-col justify-between'
      }>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
