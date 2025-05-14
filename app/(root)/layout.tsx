import type { Metadata } from "next";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import Header from "@/components/shared/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My shop",
  description: "A modern store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1 wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
