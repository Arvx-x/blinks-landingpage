import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blinks – Join the Waitlist",
  description: "A modern waitlist landing page for Blinks, an AI-native Gen Z news app.",
}

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
