import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lovydate.fun"),
  title: "Lovydate — A little spark. A real connection.",
  description: "A new way to meet, made for Nepal. Discover Lovydate and join the early access waitlist for meaningful connections.",
  keywords: ["Lovydate", "dating app Nepal", "Nepali dating app", "Kathmandu dating", "Pokhara singles", "Nepal matrimony", "find love Nepal", "Nepali singles"],
  icons: {
    icon: "/assets/favicon_icon.png",
    shortcut: "/assets/favicon_icon.png",
    apple: "/assets/branding_icon.png",
  },
  openGraph: {
    title: "Lovydate — A little spark. A real connection.",
    description: "A new way to meet, made for Nepal. Join the early access waitlist.",
    url: "https://lovydate.fun",
    siteName: "Lovydate Nepal",
    images: [
      {
        url: "/assets/nepali_couple.jpg",
        width: 1200,
        height: 630,
        alt: "Lovydate — A little spark. A real connection.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovydate — A little spark. A real connection.",
    description: "A new way to meet, made for Nepal. Join the early access waitlist.",
    images: ["/assets/nepali_couple.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/assets/favicon_icon.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
