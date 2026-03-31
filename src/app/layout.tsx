import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bhanu Parmar - Senior UX Designer",
  description:
    "Senior UX and Interaction Designer with 7+ years at IBM and Fortune 100 companies. IBM Entrepreneur Award & Bronze Stevie Award recipient. AI-Native. Systems Thinker. Toronto.",
  keywords: [
    "senior UX designer",
    "interaction designer",
    "product designer",
    "AI design workflow",
    "design systems",
    "WCAG accessibility",
    "Figma",
    "IBM",
    "Toronto",
  ],
  authors: [{ name: "Bhanu Parmar" }],
  openGraph: {
    title: "Bhanu Parmar - Senior UX Designer",
    description:
      "Senior UX Designer. 7+ years. IBM Entrepreneur Award. AI-Native. Toronto.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanu Parmar - Senior UX Designer",
    description: "Senior UX Designer. AI-Native. Systems Thinker. Toronto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
