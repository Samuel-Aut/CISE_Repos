import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css"; // Ensure this imports your Playfair Display font
import BootstrapClient from "@/components/BoostrapClient";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> {/* No className needed here if globals.css is correctly applied */}
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
