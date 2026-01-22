import type React from "react"
import type { Metadata } from "next"
import "leaflet/dist/leaflet.css";

import "../styles/globals.css"
import AIChatbot from "@/components/ai-chatbot"
import UserGuard from "@/components/user-guard";

export const metadata: Metadata = {
  title: "Pulse Bank - Save Lives with AI-Powered Blood Donation",
  description:
    "Connect blood donors with recipients through AI-powered matching. Find compatible donors near you instantly.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <UserGuard />
        {children}
        <AIChatbot />
      </body>
    </html>
  )
}


