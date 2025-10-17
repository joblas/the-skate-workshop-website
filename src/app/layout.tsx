import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://theskateworkshop.app'),
  title: 'The Skate Workshop | Elite Skateboarding Coaching from a Coach of Olympians',
  description: 'Train with Willy Santos, working with Commission Skateboard France with 30+ years of experience. Elite skateboarding coaching platform featuring premium video analysis, live session tracking, and 400+ trick database.',
  keywords: 'skateboarding coaching, elite skate training, Olympic skateboard coach, Willy Santos, professional skateboarding, skate lessons',
  authors: [{ name: 'The Skate Workshop' }],
  icons: {
    icon: [
      { url: '/images/logo/tsw-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/tsw-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logo/tsw-logo.png',
    apple: { url: '/images/logo/tsw-logo.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'The Skate Workshop | Elite Skateboarding Coaching',
    description: 'Train with Willy Santos, coach of Olympic athletes. Premium skateboarding coaching platform with video analysis, progress tracking, and expert guidance.',
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
    title: 'The Skate Workshop | Elite Skateboarding Coaching',
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
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
