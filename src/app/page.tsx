import Link from 'next/link'
import FeatureCard from '@/components/FeatureCard'
import StatsSection from '@/components/StatsSection'

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-red to-brand-red-dark py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
              <p className="text-white font-semibold text-sm">
                🏆 Commission Skateboard France • 30+ Years Experience
              </p>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Elite Skateboarding Coaching from an Olympic Legend
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Train with <span className="font-bold">Willy Santos</span>, the coach behind Olympians, X-Games medalists, and professional street skaters. Experience the only platform with Olympic-level validation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/download" className="btn-primary bg-black hover:bg-gray-900 w-full sm:w-auto">
                Join Waitlist
              </Link>
              <Link href="/about" className="btn-secondary border-white hover:bg-white/10 w-full sm:w-auto">
                Meet Willy Santos
              </Link>
            </div>

            <p className="mt-6 text-white/70 text-sm">
              Coming Soon to iOS and Android • Join the Waitlist
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why The Skate Workshop */}
      <section className="py-20 bg-gray-900/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">
              The Only Platform Built by an Olympic-Level Coach
            </h2>
            <p className="text-xl text-gray-400">
              Unlike generic coaching apps, The Skate Workshop is purpose-built for elite skateboarding with Willy Santos' 30+ years of expertise baked into every feature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎥"
              title="Premium Video System"
              description="0.25x-2x speed playback, frame-by-frame analysis, drawing annotations, and voice-over recording. Professional tools for professional results."
            />
            <FeatureCard
              icon="📊"
              title="Live Session Tracking"
              description="One-tap trick logging during 2-hour sessions. Recover 40% time waste ($126K-195K annually) with real-time progress tracking."
            />
            <FeatureCard
              icon="🎯"
              title="400+ Trick Database"
              description="Complete trick library with all stances (Regular, Switch, Fakie, Nollie) across 8 obstacle categories. Systematic skill progression."
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Everything You Need to Master Skateboarding</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From live coaching sessions to battle competitions, The Skate Workshop provides the complete toolkit for elite skateboarding development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="⚔️"
              title="Skate Warz Battles"
              description="Real-time Game of SKATE battles with community voting, live trick attempts, and leaderboards."
            />
            <FeatureCard
              icon="📈"
              title="Progress Analytics"
              description="4-stage mastery system (Learning → Mastered) with visual skill trees and success rate tracking."
            />
            <FeatureCard
              icon="🎓"
              title="Professional Reporting"
              description="Generate progress reports for sponsors, parents, and federations. Support $200+ coaching rates."
            />
            <FeatureCard
              icon="👥"
              title="Team Management"
              description="Individual athlete tracking within team contexts. Perfect for national team and federation coaching."
            />
            <FeatureCard
              icon="🏅"
              title="Gamification Engine"
              description="XP, daily streaks, achievements, and daily challenges. Stay motivated between coaching sessions."
            />
            <FeatureCard
              icon="💬"
              title="Coach Communication"
              description="Real-time messaging with instant feedback. Maintain momentum between $200+ coaching sessions."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="btn-primary">
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Willy's Ecosystem */}
      <section className="py-20 bg-black">
        <div className="section-container">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-6">More Than Just an App</h2>
            <p className="text-xl text-gray-400">
              The Skate Workshop is part of Willy's complete skateboarding ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-all">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="font-bold text-white mb-2">Willy's Workshop</h3>
              <p className="text-gray-400 text-sm mb-3">15K+ Community</p>
              <p className="text-gray-400 text-sm">Coaching tips, community, and 30+ years of expertise</p>
              <a href="https://www.instagram.com/willysworkshop/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light text-sm mt-3 inline-block">
                @willysworkshop →
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-all">
              <div className="text-4xl mb-3">⚔️</div>
              <h3 className="font-bold text-white mb-2">Skate Warz</h3>
              <p className="text-gray-400 text-sm mb-3">Season 3 Live</p>
              <p className="text-gray-400 text-sm">Epic battles featuring pro skaters with Willy as commentator</p>
              <a href="https://www.instagram.com/skate_warz/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light text-sm mt-3 inline-block">
                @skate_warz →
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-all">
              <div className="text-4xl mb-3">🏙️</div>
              <h3 className="font-bold text-white mb-2">Couch Curbs</h3>
              <p className="text-gray-400 text-sm mb-3">DIY Culture</p>
              <p className="text-gray-400 text-sm">Obstacle building and street spot innovation</p>
              <a href="https://www.instagram.com/couchcurbs/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light text-sm mt-3 inline-block">
                @couchcurbs →
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-all">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-white mb-2">Kain Tayo Day</h3>
              <p className="text-gray-400 text-sm mb-3">Community & Culture</p>
              <p className="text-gray-400 text-sm">Filipino heritage and bringing people together</p>
              <a href="https://www.instagram.com/kaintayoday/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light text-sm mt-3 inline-block">
                @kaintayoday →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Willy's Credentials */}
      <section className="py-20 bg-brand-red">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-8">
              Trained by One of the Greatest of All Time
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Willy Santos brings 30+ years of elite coaching experience, including his work with Commission Skateboard France. He's trained Olympic athletes, X-Games medalists, and professional street skaters—and now his expertise is available to you through The Skate Workshop.
            </p>
            <Link href="/about" className="btn-primary bg-black hover:bg-gray-900">
              Learn About Willy's Legacy
            </Link>
          </div>
        </div>
      </section>

      {/* Coach Network CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center border border-gray-700">
            <h2 className="heading-md mb-4">Join Willy's Coaching Network</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Earn 70% of coaching session revenue while accessing professional tools and associating with Olympic-level coaching credentials.
            </p>
            <Link href="/coaches" className="btn-primary">
              Apply as a Coach
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="section-container text-center">
          <h2 className="heading-lg mb-6">Ready to Train with the Best?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the waitlist for The Skate Workshop and be among the first to experience elite skateboarding coaching from Willy Santos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download#waitlist" className="btn-primary">
              Join Waitlist
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
