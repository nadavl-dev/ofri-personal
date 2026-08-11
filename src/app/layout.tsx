import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  PanelProvider,
  PanelPushContainer,
} from "@/components/PanelProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ofri Azriel",
  description: "Portfolio of Ofri Azriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="min-h-full bg-white font-sans text-black antialiased">
        <PanelProvider>
          <PanelPushContainer>{children}</PanelPushContainer>
        </PanelProvider>
      </body>
    </html>
  );
}
