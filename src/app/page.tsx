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
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">For everyone who loves skating</p>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display font-heading text-white mb-8">
                Coaching that <span className="text-brand-red">actually helps</span>
              </h2>
              <p className="text-body text-white/70 max-w-xl">
                Whether you're just starting out or looking to nail that next trick, I'm here to help. We'll work together with video breakdowns, progress tracking, and personal feedback. I've been skating and coaching for over 30 years, and I genuinely love helping people get better at this amazing sport.
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
            What you'll <span className="text-brand-red">get</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Video Analysis */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">Personal Feedback</h3>
              <p className="text-body-sm text-white/60">
                Send me your clips and I'll give you helpful feedback to improve your technique. Real coaching, not just social media likes.
              </p>
            </div>

            {/* Track Progress */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">Track Your Growth</h3>
              <p className="text-body-sm text-white/60">
                We'll keep track of your progress together. 400+ tricks to work on, and you'll be amazed how much you improve over time.
              </p>
            </div>

            {/* Battle Friends */}
            <div className="border-l-2 border-brand-red pl-8">
              <h3 className="text-h4 font-heading text-white mb-4">Have Fun with Friends</h3>
              <p className="text-body-sm text-white/60">
                Play games of SKATE with your crew, share your progress, and celebrate each other's wins. Skating is more fun together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS WILLY - Full Screen Impact */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">A little about me</p>

          <div className="max-w-4xl">
            <h2 className="text-display-lg font-heading text-white mb-12">
              30+ years of experience <span className="text-brand-red">helping skaters grow</span>
            </h2>
            <p className="text-body-lg text-white/70 max-w-2xl mb-8">
              I'm Willy Santos, and I've been incredibly fortunate to work with some amazing skaters over the past 30+ years, including Olympic athletes. But honestly, what I love most is helping everyday skaters discover the joy of progression.
            </p>
            <Link href="/about" className="text-brand-red hover:text-brand-red-light text-lg font-heading tracking-wide">
              Get to know me better →
            </Link>
          </div>
        </div>
      </section>

      {/* BIG CTA - Centered */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">Ready to start?</p>

          <h2 className="text-display font-heading text-white mb-12 max-w-5xl mx-auto">
            Ready to <span className="text-brand-red">level up</span>?
          </h2>

          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            Join the Community
          </Link>
        </div>
      </section>
    </div>
  )
}
