import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Full Stack Developer`,
  description:
    "Full Stack Developer with 5+ years of experience in React, Node.js, and the MERN stack. View my projects, experience, and skills.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "Mishan Savaliya",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | Full Stack Developer`,
    description:
      "Full Stack Developer with 5+ years of experience in React, Node.js, and the MERN stack.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Full Stack Developer`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Full Stack Developer`,
    description:
      "Full Stack Developer with 5+ years of experience in React, Node.js, and the MERN stack.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
