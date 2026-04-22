import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import TabBar from "./components/TabBar";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Max Sicherman",
  description: "Otherwise known as Sich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="w-full max-w-[620px] ml-16 px-8">
          <TabBar />
          <main className="flex-1 py-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
