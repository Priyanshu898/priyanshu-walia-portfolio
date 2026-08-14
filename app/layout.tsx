import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu Walia | Cloud Computing & Data Science",
  description:
    "Portfolio of Priyanshu Walia — BCA graduate focused on cloud computing, infrastructure, Linux, virtualization, networking and practical AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}