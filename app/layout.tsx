import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Whisper } from "next/font/google"
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const useBokor = Whisper({
  weight: "400",
  variable: "--font-wisper"
})

export const metadata: Metadata = {
  title: "Welcome",
  description: "Anas Nasuha has been created",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${useBokor.variable} antialiased`}>
        <h1 className="text-3xl"> Coming from main layout</h1>
        {children}
      </body>
    </html>
  );
}
