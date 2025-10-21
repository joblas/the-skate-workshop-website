import type { Metadata } from 'next'
import { Anek_Tamil, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

// Premium Font System
const anekTamil = Anek_Tamil({
  subsets: ['latin'],
  variable: '--font-anek-tamil',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://theskateworkshop.app'),
  title: 'The Skate Workshop | Professional Skateboarding Coaching from a Coach of Olympians',
  description: 'Train with Willy Santos, working with Commission Skateboard France with 30+ years of experience. Professional skateboarding coaching platform featuring video analysis, live session tracking, and 400+ trick database.',
  keywords: 'skateboarding coaching, elite skate training, Olympic skateboard coach, Willy Santos, professional skateboarding, skate lessons',
  authors: [{ name: 'The Skate Workshop' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'The Skate Workshop | Professional Skateboarding Coaching',
    description: 'Train with Willy Santos, coach of Olympic athletes. Professional skateboarding coaching platform with video analysis, progress tracking, and expert guidance.',
    url: 'https://theskateworkshop.app',
    siteName: 'The Skate Workshop',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Skate Workshop Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Skate Workshop | Professional Skateboarding Coaching',
    description: 'Train with Willy Santos, coach of Olympic athletes',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anekTamil.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="overflow-x-hidden">
        <Navigation />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
