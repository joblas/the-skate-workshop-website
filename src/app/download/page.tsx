import { Metadata } from 'next'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'Join Waitlist | The Skate Workshop',
  description: 'Join the waitlist. Get early access. Train with Willy Santos.',
}

export default function DownloadPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl mx-auto py-20">
          {/* Eyebrow */}
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8 text-center">
            COMING SOON
          </p>

          {/* MASSIVE Headline */}
          <h1 className="text-display-xl font-heading text-white mb-12 text-center">
            JOIN THE <span className="text-brand-primary">WAITLIST</span>
          </h1>

          {/* Minimal Description */}
          <p className="text-body text-white/70 mb-16 text-center max-w-xl mx-auto">
            iOS & Android. Launching soon. Be first to get access.
          </p>

          {/* Waitlist Form */}
          <div id="waitlist">
            <WaitlistForm />
          </div>

          {/* Footer Note */}
          <p className="text-body-sm text-white/40 mt-12 text-center">
            No spam. Just one email when we launch.
          </p>
        </div>
      </div>
    </div>
  )
}
