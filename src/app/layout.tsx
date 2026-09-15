import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erfan Ehsani | DevOps & Cloud Engineer",
  description: "DevOps, cloud infrastructure, Kubernetes, and observability portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
