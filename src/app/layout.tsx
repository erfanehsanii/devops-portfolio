import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erfan Ehsani | Senior DevOps / SRE Engineer",
  description: "Senior DevOps / SRE engineer: Kubernetes, AWS, Terraform, observability, cloud security, and reliable platform delivery.",
  openGraph: { title: "Erfan Ehsani | Senior DevOps / SRE Engineer", description: "Production Kubernetes, AWS, observability, and cloud security.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
