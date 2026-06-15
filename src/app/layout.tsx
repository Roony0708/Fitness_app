import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REDSTONE FITNESS | Transform Your Body. Transform Your Life.",
  description:
    "Join REDSTONE FITNESS and achieve your fitness goals with premium equipment, cardio training, and expert guidance. Limited offer: Gym membership at ₹600/month.",
  keywords: [
    "fitness",
    "gym",
    "Lucknow",
    "REDSTONE FITNESS",
    "membership",
    "cardio",
    "weight training",
  ],
  openGraph: {
    title: "REDSTONE FITNESS | Transform Your Body. Transform Your Life.",
    description:
      "Join REDSTONE FITNESS and achieve your fitness goals with premium equipment and expert guidance.",
    type: "website",
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
      className={`${anton.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
