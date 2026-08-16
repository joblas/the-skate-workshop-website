import { Metadata } from 'next'
import Link from 'next/link'

// Pre-launch stub. The real pricing page is preserved at
// ./page.launch.tsx.hold — restore it (git mv back) at public launch,
// after Joe signs off the final tiers. Do not surface pricing before then.
export const metadata: Metadata = {
  title: 'Pricing | The Skate Workshop',
  description:
    'The Skate Workshop is in private beta. Pricing will be announced at launch — join the waitlist to be first to know.',
  robots: { index: false, follow: false },
}

export default function PricingPage() {
  return (
    <div className="pt-20 min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="max-w-3xl mx-auto py-20 text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">
            PRIVATE BETA
          </p>
          <h1 className="text-display-xl font-heading text-white mb-12">
            PRICING AT <span className="text-brand-primary">LAUNCH</span>
          </h1>
          <p className="text-body text-white/70 mb-16 max-w-xl mx-auto">
            We&apos;re training with Willy and his athletes right now. Plans and
            pricing will be announced when the app launches publicly.
          </p>
          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </div>
  )
}
