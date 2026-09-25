import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import MobileCTA from "@/components/MobileCTA";
import SiteNav from "@/components/SiteNav";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL, siteJsonLd } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const defaultTitle = `${SITE_NAME} — ${SITE_TAGLINE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: defaultTitle, template: `%s | se.hadi` },
  description: SITE_DESCRIPTION,
  applicationName: "se.hadi",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "se.hadi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F0",
};

// Marks JS as running so scroll-reveal can hide content until it animates in.
// Without JS, content stays visible.
const JS_FLAG = `document.documentElement.classList.add("js")`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body className="min-h-dvh flex flex-col font-sans text-base">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-offwhite"
        >
          Skip to content
        </a>
        <CustomCursor />
        <SiteNav />
        {children}
        <MobileCTA />
        <JsonLd data={siteJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
