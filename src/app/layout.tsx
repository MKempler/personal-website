import React from 'react';
import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google"; // Import new fonts
import "./globals.css";

// Configure Orbitron for headings (we'll apply this via a className)
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify weights you might use
  variable: "--font-orbitron", // CSS variable for Orbitron
});

// Configure Share Tech Mono for body text
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400", // Share Tech Mono typically only has a regular weight
  variable: "--font-share-tech-mono", // CSS variable for Share Tech Mono
});

export const metadata: Metadata = {
  title: "Max Kempler - Portfolio", // Updated title
  description: "The futuristic and cyberpunky portfolio of Max Kempler", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${shareTechMono.variable} ${orbitron.variable} font-mono bg-slate-900 text-slate-200`}
      > {/* Applied dark theme base classes */}
        {/* Apply Share Tech Mono as the base monospace font family via Tailwind's font-mono utility */}
        {/* Orbitron can be applied using className="font-orbitron" where needed */}
        {children}
      </body>
    </html>
  );
} 