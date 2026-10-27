import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osmium AI | AI-Powered Education for Every Institution",
  description:
    "Osmium AI helps educational organisations deliver personalised learning, intelligent assessments, and AI-driven academic experiences at scale.",
  icons: {
    icon: "/osmium-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
