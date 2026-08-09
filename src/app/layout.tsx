import type { Metadata } from "next";
import "./globals.css";
import {
  PanelProvider,
  PanelPushContainer,
} from "@/components/PanelProvider";

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
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-black antialiased">
        <PanelProvider>
          <PanelPushContainer>{children}</PanelPushContainer>
        </PanelProvider>
      </body>
    </html>
  );
}
