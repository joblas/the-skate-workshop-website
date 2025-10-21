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
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">How I can help you</p>

          <h1 className="text-display-xl font-heading text-white mb-12 max-w-6xl">
            Professional tools to <span className="text-brand-red">accelerate your progress</span>
          </h1>

          <p className="text-body-lg text-white/70 max-w-2xl">
            I've spent years figuring out what really helps skaters grow. These are the tools and features I'm most excited to share with you.
          </p>
        </div>
      </section>

      {/* Feature 1: VIDEO ANALYSIS */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-display font-heading text-white mb-8">
                Expert <span className="text-brand-red">video analysis</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                Send me your clips and I'll give you helpful, specific feedback to improve your technique. I'll break it down frame by frame, draw on your videos, and send you voice notes with tips that are just for you.
              </p>
              <p className="text-body-sm text-white/50">
                Slow motion playback • Drawing tools • Personal voice notes
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
                Track your <span className="text-brand-red">progress</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                We'll keep track of your progress together! With over 400 tricks to work on, you can log every session and see how much you've improved over time. It's really motivating to look back and see how far you've come.
              </p>
              <p className="text-body-sm text-white/50">
                Easy session logging • Progress tracking • Celebrate your wins
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
                Challenge <span className="text-brand-red">your friends</span>
              </h2>
              <p className="text-body text-white/70 mb-8">
                Play games of SKATE with your friends, share your progress, and cheer each other on! You can challenge your local crew or connect with skaters from around the world. It's all about having fun and supporting each other.
              </p>
              <p className="text-body-sm text-white/50">
                Games of SKATE • Share progress • Support your friends
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
            Plus lots of other <span className="text-brand-red">helpful features</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Chat with Me</h3>
              <p className="text-body-sm text-white/60">
                Message me directly whenever you have questions or need encouragement. I'm here to help!
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Progress Reports</h3>
              <p className="text-body-sm text-white/60">
                Share your progress with parents, sponsors, or just keep track of your own growth journey.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Daily Motivation</h3>
              <p className="text-body-sm text-white/60">
                Fun challenges and goals to keep you excited about skating every day.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">For Coaches Too</h3>
              <p className="text-body-sm text-white/60">
                If you coach multiple skaters, you can track all their progress in one place.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Learning Path</h3>
              <p className="text-body-sm text-white/60">
                Visual guides to show you what tricks to work on next based on what you already know.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Works Anywhere</h3>
              <p className="text-body-sm text-white/60">
                Log your sessions at the park and sync everything when you get home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing-lg">
        <div className="section-container text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">Excited to get started?</p>

          <h2 className="text-display font-heading text-white mb-12 max-w-5xl mx-auto">
            Ready to <span className="text-brand-red">level up</span>?
          </h2>

          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            Join our community
          </Link>
        </div>
      </section>
    </div>
  )
}
