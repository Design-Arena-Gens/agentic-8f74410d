import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trendly – Fashion Forward Marketplace",
  description:
    "Trendly is a bold, visual-first fashion marketplace experience for mobile shoppers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
