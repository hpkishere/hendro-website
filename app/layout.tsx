import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hendro's Website",
  description:
    "Full-stack Software Engineer based in Singapore with 4 years of experience ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter mx-auto max-w-[768px] px-6 py-[48px] antialiased lg:px-0 lg:py-[96px]`}
      >
        {children}
      </body>
    </html>
  );
}
