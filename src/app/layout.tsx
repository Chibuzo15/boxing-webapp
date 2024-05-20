import Header from "@/components/Header/index";
import Footer from "@/components/Footer";

import { addClassNames } from "@/utils/functions";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const robotoFont = Roboto({
  subsets: ['latin'], // Specify character subsets (optional)
  weight: ['400', '500', '700'], // Include different weights if needed
});

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
        addClassNames(
          'bg-white min-h-screen flex flex-col justify-between items-center',
          robotoFont.className,
          //
          'mt-[60px] sm:mt-[120px]'
        )
      }>
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
