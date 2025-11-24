'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/navbar'
import Footer from '@/components/footer'
import StairTransition from '@/components/stair-transition'
import PageTransition from '@/components/page-transition'
import { ThemeProvider } from '@/components/theme-provider'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}