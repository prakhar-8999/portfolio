import {profile} from "@/utils/profile";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: profile.name,
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  );
}
