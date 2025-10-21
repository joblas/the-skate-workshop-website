import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features | The Skate Workshop',
  description: 'Video analysis. Trick tracking. Battles. Built for skaters.',
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">WHAT'S INSIDE</p>

          <h1 className="text-display-xl font-heading text-white mb-12 max-w-6xl">
            TOOLS THAT <span className="text-brand-red">WORK.</span>
          </h1>

          <p className="text-body-lg text-white/70 max-w-2xl">
            Built by an Olympic coach who knows what actually helps skaters improve.
          </p>
        </div>
      </section>

      {/* Feature 1: VIDEO ANALYSIS */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display font-heading text-white mb-8">
                VIDEO <span className="text-brand-red">ANALYSIS</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                Send your clips. Get feedback from Willy or his coach network. Frame-by-frame breakdown. Drawing tools. Voice notes.
              </p>
              <p className="text-body-sm text-white/50">
                0.25x-2x playback speed • Drawing annotations • Audio feedback
              </p>
            </div>

            <div className="relative h-[400px] bg-gray-900/30 rounded-2xl flex items-center justify-center">
              <span className="text-white/20 text-6xl">🎥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: TRACK PROGRESS */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative h-[400px] bg-gray-900/30 rounded-2xl flex items-center justify-center">
              <span className="text-white/20 text-6xl">📊</span>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-display font-heading text-white mb-8">
                TRACK <span className="text-brand-red">EVERYTHING</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                400+ tricks. Every stance. Every obstacle. Log every session. See your progress over weeks and months.
              </p>
              <p className="text-body-sm text-white/50">
                One-tap logging • 4-stage mastery system • Session analytics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: BATTLE MODE */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display font-heading text-white mb-8">
                BATTLE <span className="text-brand-red">FRIENDS</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                Game of SKATE. Leaderboards. Vote on attempts. Compete with your crew or skaters worldwide.
              </p>
              <p className="text-body-sm text-white/50">
                Live battles • Community voting • Leaderboards
              </p>
            </div>

            <div className="relative h-[400px] bg-gray-900/30 rounded-2xl flex items-center justify-center">
              <span className="text-white/20 text-6xl">⚔️</span>
            </div>
          </div>
        </div>
      </section>

      {/* ALL FEATURES GRID */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <h2 className="text-h2 font-heading text-white mb-20 text-center">
            AND <span className="text-brand-red">MORE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">COACH CHAT</h3>
              <p className="text-body-sm text-white/60">
                Direct messaging with your coach. Get the help you need.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">PROGRESS REPORTS</h3>
              <p className="text-body-sm text-white/60">
                Professional reports for sponsors and parents.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">DAILY CHALLENGES</h3>
              <p className="text-body-sm text-white/60">
                XP, streaks, achievements. Stay motivated.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">TEAM MGMT</h3>
              <p className="text-body-sm text-white/60">
                Track multiple athletes. Perfect for coaches.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">SKILL TREES</h3>
              <p className="text-body-sm text-white/60">
                Visual progression. See what to learn next.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">OFFLINE MODE</h3>
              <p className="text-body-sm text-white/60">
                Log sessions at the park. Sync when home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-lg">
        <div className="section-container text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">READY?</p>

          <h2 className="text-display font-heading text-white mb-12 max-w-5xl mx-auto">
            START <span className="text-brand-red">TRAINING</span>
          </h2>

          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            JOIN WAITLIST
          </Link>
        </div>
      </section>
    </div>
  )
}
