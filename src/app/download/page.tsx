import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get the App | The Skate Workshop',
  description:
    'Download The Skate Workshop for iOS and Android. Train with Willy Santos — clip uploads, frame-by-frame feedback, and 400+ tricks to master.',
}

const APP_STORE_URL = 'https://apps.apple.com/app/id6755618537'
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.theskateworkshop.v3'

export default function DownloadPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl mx-auto py-20">
          {/* Eyebrow */}
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8 text-center">
            AVAILABLE NOW
          </p>

          {/* MASSIVE Headline */}
          <h1 className="text-display-xl font-heading text-white mb-12 text-center">
            GET THE <span className="text-brand-primary">APP</span>
          </h1>

          {/* Minimal Description */}
          <p className="text-body text-white/70 mb-16 text-center max-w-xl mx-auto">
            Real coaching from Willy Santos, in your pocket. Send clips, get
            frame-by-frame feedback with voice notes, and track your progress
            across 400+ tricks.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              aria-label="Download on the App Store"
            >
              Download for iPhone
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white text-white text-lg px-12 py-5 rounded-full inline-flex items-center gap-3 transition-colors w-full sm:w-auto justify-center font-heading tracking-wide"
              aria-label="Get it on Google Play"
            >
              Download for Android
            </a>
          </div>

          {/* Pricing pointer */}
          <p className="text-body-sm text-white/40 text-center">
            Plans from $9.99/month.{' '}
            <Link
              href="/pricing"
              className="text-brand-primary hover:text-brand-primary/80"
            >
              See pricing →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
