'use client'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/navbar'
import Footer from '@/components/footer'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Student Association',
//   description: 'Welcome to the Student Association - Building community through events, initiatives, and leadership.',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`dark font-sans antialiased`}>
        <Header />
        <AnimatePresence mode="wait">
          <div key={pathname}>
            {children}
          </div>
        </AnimatePresence>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
