import type { Metadata } from "next";
import "./globals.css";

// Your project metadata
export const metadata: Metadata = {
  title: "Sai Infra Group — Portfolio",
  description: "High-rise construction portfolio, workforce, equipment, and financials.",
  openGraph: {
    title: "Sai Infra Group — Portfolio",
    description: "High-rise construction portfolio, workforce, equipment, and financials.",
    url: "https://example.com",
    siteName: "Sai Infra Group",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
