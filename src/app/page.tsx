import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      {/* Premium Hero Section */}
      <HeroSection />

      {/* WHO THIS IS FOR */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">FOR THE COMMITTED</p>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display font-heading text-white mb-8">
                TRAINING THAT <span className="text-brand-red">ACTUALLY WORKS.</span>
              </h2>
              <p className="text-body text-white/70 max-w-xl mb-6">
                Get coached by Willy Santos, the same coach who trained Olympic athletes. Video breakdowns, trick tracking, and real feedback.
              </p>
              <p className="text-body text-white/70 max-w-xl">
                Learn from someone who's been there. Let's get you skating better.
              </p>
            </div>
            <div className="relative h-[500px] bg-gray-900/30 rounded-2xl overflow-hidden">
              {/* Placeholder for skate image */}
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                <span className="text-9xl">🎥</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET - Clean 3-Column Grid */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <h2 className="text-h2 font-heading text-white mb-20 text-center">
            WHAT YOU <span className="text-brand-red">GET</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Video Analysis */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">VIDEO ANALYSIS</h3>
              <p className="text-body-sm text-white/60">
                Send clips. Get feedback from a real Olympic coach. Not just likes and comments.
              </p>
            </div>

            {/* Track Progress */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">TRACK PROGRESS</h3>
              <p className="text-body-sm text-white/60">
                400+ tricks. Log every session. See yourself actually getting better.
              </p>
            </div>

            {/* Battle Friends */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">BATTLE FRIENDS</h3>
              <p className="text-body-sm text-white/60">
                Game of SKATE. Leaderboards. Prove you're the best in your crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS WILLY - Full Screen Impact */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">WHO'S COACHING YOU</p>

          <div className="max-w-4xl">
            <h2 className="text-display-lg font-heading text-white mb-12">
              COACHED <span className="text-brand-red">OLYMPIANS.</span><br/>
              NOW COACHING <span className="text-brand-red">YOU.</span>
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mb-8">
              Willy Santos. 30+ years. Commission Skateboard France. Trained Olympic athletes and X-Games medalists.
            </p>
            <Link href="/about" className="text-brand-red hover:text-brand-red-light text-lg font-heading uppercase tracking-wide">
              MEET WILLY →
            </Link>
          </div>
        </div>
      </section>

      {/* BIG CTA - Centered */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">READY?</p>

          <h2 className="text-display font-heading text-white mb-12 max-w-5xl mx-auto">
            JOIN THE <span className="text-brand-red">WORKSHOP</span>
          </h2>

          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            JOIN WAITLIST
          </Link>
        </div>
      </section>
    </div>
  )
}
