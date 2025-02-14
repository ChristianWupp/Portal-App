import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import React from 'react'
import { BottomNav } from "@/components/bottom-nav"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white antialiased`}>
        <div className="max-w-md mx-auto min-h-screen flex flex-col">
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  )
}
