import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Organic Security Fabric",
  description:
    "A living cybersecurity system designed to help organizations apply, monitor, and verify protections without getting buried in static checklists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
