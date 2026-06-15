import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buyer Confidence Webinar Deck",
  description: "Private presenter deck for the First-Time Home Buyer webinar."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
