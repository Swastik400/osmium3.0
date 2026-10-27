import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenAI for Education | AI for students, educators, and institutions",
  description:
    "Explore OpenAI tools and resources for students, educators, schools, universities, and countries using AI to learn, teach, research, and lead.",
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
