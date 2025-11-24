'use client'

import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/navbar'
import Footer from '@/components/footer'
import StairTransition from '@/components/stair-transition'
import PageTransition from '@/components/page-transition'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`} suppressHydrationWarning>
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