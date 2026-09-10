import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgodly.com"),
  title: {
    default: "DrGodly | AI-Native Telemedicine Platform",
    template: "%s | DrGodly",
  },
  description:
    "DrGodly is an AI-native telemedicine and clinical decision support platform connecting longitudinal health records, ambient SOAP notes, and real doctors.",
  keywords: [
    "AI healthcare platform",
    "AI telemedicine",
    "AI medical assistant",
    "AI patient intake",
    "AI clinical decision support",
    "AI medical records",
    "AI EMR",
    "AI SOAP notes",
    "AI health assistant",
    "AI medical history",
    "AI healthcare chatbot",
    "telemedicine platform",
    "AI doctor consultation",
    "AI clinical copilot",
  ],
  authors: [{ name: "DrGodly Health Technologies" }],
  creator: "DrGodly Health Technologies",
  publisher: "DrGodly Health Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DrGodly | AI-Native Telemedicine & Clinical Intelligence",
    description:
      "Connecting your health history, AI intelligence, and human doctors. AI does the preparation. Doctors do the care.",
    url: "https://drgodly.com",
    siteName: "DrGodly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DrGodly | AI-Native Telemedicine Platform",
    description:
      "Healthcare that knows your story. AI does the preparation. Doctors do the care.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { MedicalSafetyBanner } from "@/components/layout/MedicalSafetyBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-clinical-50 text-clinical-950`}
      >
        <MedicalSafetyBanner />
        {children}
      </body>
    </html>
  );
}
