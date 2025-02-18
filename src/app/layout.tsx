import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond, Caveat_Brush } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "700"],
});

const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ice Cream",
  description: "I started craving some ice cream, so I made a site about it.",
  icons: {
    icon: "/favicon.jpeg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${caveatBrush.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
