import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
const logoDrenImage = "../../public/logodren.png";

export const metadata: Metadata = {
  title: "Aldren Bagual",
  description: "My personal site to showcase my developer work and blogs.",
  openGraph: {
    title: "Aldren Bagual",
    description:
      "My personal site showcasing my developer work experience and blogs",
    url: "https://aldrenbagual.vercel.app/",
    siteName: "Aldren Bagual Portfolio",
    images: [
      {
        url: logoDrenImage,
        width: 1200,
        height: 630,
        alt: "My Awesome Next.js App Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
