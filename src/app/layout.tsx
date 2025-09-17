import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blinks – Join the Waitlist",
  description: "A modern waitlist landing page for Blinks, an AI-native Gen Z news app.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
