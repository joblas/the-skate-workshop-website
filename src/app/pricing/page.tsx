import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | The Skate Workshop Subscription Plans',
  description: 'Choose your plan: Basic Training ($9.99/month), Pro Coaching ($19.99/month), or Elite 1-on-1 Access ($49.99/month). Professional skateboarding coaching for every level.',
  keywords: 'skateboarding coaching pricing, coaching subscription, skate lessons cost',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Choose Your Coaching Plan
            </h1>
            <p className="text-2xl text-gray-400">
              From self-paced learning to 1-on-1 coaching with Olympic-level experts
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Training */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-2xl p-8 hover:border-brand-red/50 transition-all">
              <div className="text-sm font-semibold text-gray-400 mb-2">BASIC TRAINING</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$9.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-8">
                Perfect for skaters who want access to professional training content
              </p>
              
              <Link href="/download" className="btn-secondary w-full block text-center mb-8">
                Get Started
              </Link>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">400+ trick database access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Video recording & playback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Progress tracking (4-stage system)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Daily challenges & streaks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Skate Warz battle participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Community features</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-3">✗</span>
                  <span>Coach feedback</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <span className="mr-3">✗</span>
                  <span>1-on-1 coaching sessions</span>
                </li>
              </ul>
            </div>

            {/* Pro Coaching - Most Popular */}
            <div className="bg-gradient-to-b from-brand-red to-brand-red-dark border-2 border-brand-red rounded-2xl p-8 transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4 py-1 rounded-full text-sm font-bold text-brand-red border border-brand-red">
                MOST POPULAR
              </div>
              
              <div className="text-sm font-semibold text-white/80 mb-2">PRO COACHING</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$19.99</span>
                <span className="text-white/80">/month</span>
              </div>
              <p className="text-white/90 mb-8">
                Serious athletes who want professional coaching feedback and analysis
              </p>
              
              <Link href="/download" className="btn-primary bg-black hover:bg-gray-900 w-full block text-center mb-8">
                Get Started
              </Link>
              
              <div className="text-sm font-semibold text-white/70 mb-4 uppercase">Everything in Basic, plus:</div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Video annotation tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Coach video reviews (async)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Detailed progress analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Professional reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white">Advanced video controls (0.25x-2x speed)</span>
                </li>
                <li className="flex items-start text-white/50">
                  <span className="mr-3">✗</span>
                  <span>1-on-1 live coaching</span>
                </li>
              </ul>
            </div>

            {/* Elite 1-on-1 Access */}
            <div className="bg-gray-900/50 border-2 border-gray-800 rounded-2xl p-8 hover:border-brand-red/50 transition-all">
              <div className="text-sm font-semibold text-gray-400 mb-2">ELITE 1-ON-1 ACCESS</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$49.99</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400 mb-8">
                Competitive athletes seeking direct coaching from Willy's network
              </p>
              
              <Link href="/download" className="btn-primary w-full block text-center mb-8">
                Get Started
              </Link>
              
              <div className="text-sm font-semibold text-gray-400 mb-4 uppercase">Everything in Pro, plus:</div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Direct access to Willy's coach network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Book 1-on-1 live coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Personalized training plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Priority booking & scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Competition preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">Sponsor-ready progress reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3">✓</span>
                  <span className="text-gray-300">VIP support (24hr response)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Note */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-gray-400">
              💡 <strong className="text-white">Coaching sessions</strong> are separate from subscriptions and start at $200/hour. Elite members get priority booking.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Sessions */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">1-on-1 Coaching Sessions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">1-Hour Session</h3>
                <div className="text-4xl font-bold text-brand-red mb-6">$200</div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Live 1-on-1 coaching
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Real-time feedback
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Session recording
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Follow-up notes
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">2-Hour Session</h3>
                <div className="text-4xl font-bold text-brand-red mb-6">$400</div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Extended coaching time
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Comprehensive analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Multiple trick focus
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Detailed progress report
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-brand-red/10 border border-brand-red/30 rounded-xl p-6 text-center">
              <p className="text-gray-300">
                <strong className="text-white">Revenue Split:</strong> Coaches earn 70% • Willy's Workshop brand 15% • Platform 15%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Federation Packages */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-6">Team & Federation Packages</h2>
            <p className="text-xl text-gray-400 text-center mb-12">
              Custom solutions for skateboarding teams, schools, and national federations
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Team Coaching</h3>
                <div className="text-3xl font-bold text-brand-red mb-4">$2,500 - $5,000</div>
                <p className="text-gray-400 mb-6">per month</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    10-20 athlete accounts
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Team management dashboard
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Group session tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Dedicated coach support
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Custom branding
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Federation Contract</h3>
                <div className="text-3xl font-bold text-brand-red mb-4">$15,000 - $35,000</div>
                <p className="text-gray-400 mb-6">per month</p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Unlimited athlete accounts
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    National team integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Custom feature development
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    White-label options
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">•</span>
                    Priority support & training
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/contact" className="btn-primary">
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-400">
                  Yes! All subscriptions are month-to-month with no long-term commitment. Cancel anytime from your account settings.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Do I need Elite tier to book coaching sessions?</h3>
                <p className="text-gray-400">
                  No. Anyone can book 1-on-1 coaching sessions, but Elite members get priority scheduling and don't pay the booking platform fee.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Is there a free trial?</h3>
                <p className="text-gray-400">
                  We offer a limited free tier that includes basic features. Upgrade to Basic Training or Pro Coaching anytime to access premium features.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Which coaches are in the network?</h3>
                <p className="text-gray-400">
                  Our network includes coaches vetted by Willy Santos, including coaches from Commission Skateboard France and professional skaters with 5+ years coaching experience.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can I switch plans?</h3>
                <p className="text-gray-400">
                  Yes! Upgrade or downgrade anytime. Changes take effect at the start of your next billing cycle.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-400">
                  We accept all major credit cards, debit cards, and digital wallets through our secure Stripe payment processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="section-container text-center">
          <h2 className="heading-lg mb-6">Start Training with the Best</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Download The Skate Workshop and choose the plan that's right for your skateboarding journey.
          </p>
          <Link href="/download" className="btn-primary">
            Download App & Choose Plan
          </Link>
        </div>
      </section>
    </div>
  )
}
