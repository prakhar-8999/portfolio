import {profile} from "@/utils/profile";
import {SpeedInsights} from "@vercel/speed-insights/next";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description:
    "Prakhar Porwal's Portfolio - B.Tech student passionate about technology, software development, and user-centric design. Explore my projects and connect with me.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white dark:bg-black">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
