import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider, NO_FLASH_SCRIPT } from "@/components/ThemeProvider";
import ThemeFX from "@/components/ThemeFX";
import { DEFAULT_THEME } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const accentSerif = EB_Garamond({
  variable: "--font-accent-serif",
  subsets: ["latin"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Hadi Moustafa — Backend Engineer",
  description:
    "Backend engineer building systems that hold under load — public infrastructure, production systems, and AI/LLM tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${accentSerif.variable} h-full antialiased`}
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <ThemeProvider>
          <CustomCursor />
          <ThemeFX />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
