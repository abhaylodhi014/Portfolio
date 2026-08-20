import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Abhay Lodhi — Computer Science @ IIT Indore | Full-Stack & Competitive Programmer",
  description:
    "Official portfolio of Abhay Lodhi. B.Tech Computer Science student at IIT Indore, LeetCode Knight (2055), Codeforces Expert (1604), Silver Medalist @ IITISoC '25, and Full-Stack Systems Developer.",
  keywords: [
    "Abhay Lodhi",
    "Abhay Lodhi IIT Indore",
    "Abhay Lodhi Portfolio",
    "IIT Indore Computer Science",
    "Full-Stack Developer",
    "Competitive Programmer",
    "LeetCode Knight",
    "Codeforces Expert",
    "MediCall WebRTC",
    "Drishti CPS Foundation Intern",
  ],
  authors: [{ name: "Abhay Lodhi", url: "https://github.com/abhaylodhi014" }],
  openGraph: {
    title: "Abhay Lodhi — CS @ IIT Indore | Developer Portfolio",
    description:
      "B.Tech Computer Science Engineering student at IIT Indore. Building real-time WebRTC media platforms, AI vision OCR engines, and distributed database systems.",
    type: "website",
    locale: "en_US",
    siteName: "Abhay Lodhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Lodhi — Developer Portfolio",
    description:
      "B.Tech Computer Science student at IIT Indore | LeetCode Knight (2055) & Codeforces Expert (1604)",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
