import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Features | Premium Skateboarding Coaching Tools',
  description: 'Explore The Skate Workshop features: premium video analysis, live session tracking, 400+ trick database, Skate Warz battles, and professional reporting tools.',
  keywords: 'skateboarding app features, video analysis, trick database, session tracking, progress analytics',
}

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Professional Tools for Elite Skateboarding
            </h1>
            <p className="text-2xl text-gray-400">
              Every feature built with Willy Santos' 30+ years of coaching expertise
            </p>
          </div>
        </div>
      </section>

      {/* Feature 1: Premium Video System */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                PREMIUM VIDEO ANALYSIS
              </div>
              <h2 className="heading-md mb-6">Frame-by-Frame Video Breakdown</h2>
              <p className="text-xl text-gray-400 mb-6">
                Professional video analysis tools used by Olympic coaches. Record, review, and annotate your skating with precision controls that reveal every detail of your technique.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Variable Speed Playback:</strong>
                    <p className="text-gray-400">0.25x to 2x speed control for detailed analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Drawing Annotations:</strong>
                    <p className="text-gray-400">Highlight body position, board angle, and landing technique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Voice-Over Recording:</strong>
                    <p className="text-gray-400">Add audio feedback directly on videos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Frame-by-Frame Scrubbing:</strong>
                    <p className="text-gray-400">Analyze every millisecond of movement</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Video Player Demo<br/>Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Live Session Tracking */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-900 border border-gray-800 rounded-xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Session Dashboard Demo<br/>Coming Soon</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                LIVE SESSION TRACKING
              </div>
              <h2 className="heading-md mb-6">Recover 40% Wasted Time</h2>
              <p className="text-xl text-gray-400 mb-6">
                Real-time session management that eliminates video chaos and administrative overhead. Track every trick attempt during 2-hour coaching sessions with one-tap logging.
              </p>
              
              <div className="bg-brand-red/5 border border-brand-red/20 rounded-xl p-6 mb-6">
                <p className="text-lg font-semibold text-white mb-2">💰 ROI Impact</p>
                <p className="text-gray-300">
                  Coaches recover <strong className="text-brand-red">$126K-195K annually</strong> by eliminating 40% session inefficiency
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">One-Tap Trick Logging:</strong>
                    <p className="text-gray-400">Success/fail buttons for instant progress tracking</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Obstacle Switching:</strong>
                    <p className="text-gray-400">Swipe between 8 obstacle categories instantly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-white">Auto-Save Every 30s:</strong>
                    <p className="text-gray-400">Never lose session data</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: 400+ Trick Database */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
              COMPLETE TRICK LIBRARY
            </div>
            <h2 className="heading-md mb-6">400+ Tricks Across All Stances</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Systematic skill progression from basic ollies to advanced professional combinations. Every trick mapped across Regular, Switch, Fakie, and Nollie stances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 text-lg">🛹 Flatground</h3>
              <p className="text-gray-400 text-sm mb-4">Core tricks on flat surface</p>
              <p className="text-brand-red font-semibold">100+ tricks</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 text-lg">🏗️ Curbs & Ledges</h3>
              <p className="text-gray-400 text-sm mb-4">Grinds and slides</p>
              <p className="text-brand-red font-semibold">80+ tricks</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 text-lg">🎢 Rails</h3>
              <p className="text-gray-400 text-sm mb-4">Technical rail tricks</p>
              <p className="text-brand-red font-semibold">60+ tricks</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 text-lg">🌊 Transitions</h3>
              <p className="text-gray-400 text-sm mb-4">Quarter pipes and ramps</p>
              <p className="text-brand-red font-semibold">70+ tricks</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">4-Stage Mastery System</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-white mb-2">Learning</h4>
                <p className="text-gray-400 text-sm">First attempts, building foundation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-bold text-white mb-2">Practicing</h4>
                <p className="text-gray-400 text-sm">Consistent attempts, improving success rate</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-bold text-white mb-2">Improving</h4>
                <p className="text-gray-400 text-sm">High success rate, refining technique</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-bold text-white mb-2">Mastered</h4>
                <p className="text-gray-400 text-sm">Consistent execution, competition-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Skate Warz Battles */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                COMPETITIVE BATTLES
              </div>
              <h2 className="heading-md mb-6">Skate Warz: Real-Time Competitions</h2>
              <p className="text-xl text-gray-400 mb-6">
                Join live Game of SKATE battles with real-time updates, community voting, and leaderboards. Test your skills against skaters worldwide.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">⚔️</span>
                  <div>
                    <strong className="text-white">Multiple Formats:</strong>
                    <p className="text-gray-400">SKATE, CURB, Best Trick, Combo Battles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">📹</span>
                  <div>
                    <strong className="text-white">Video Proof Required:</strong>
                    <p className="text-gray-400">Upload attempts for community verification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">👥</span>
                  <div>
                    <strong className="text-white">Live Presence Tracking:</strong>
                    <p className="text-gray-400">See who's online and in battles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">🏆</span>
                  <div>
                    <strong className="text-white">Leaderboards & Rankings:</strong>
                    <p className="text-gray-400">Climb rankings with wins</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Battle Arena Demo<br/>Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: Progress Analytics */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">Analytics Dashboard Demo<br/>Coming Soon</p>
            </div>
            <div>
              <div className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-lg mb-4 text-sm font-semibold">
                PROGRESS TRACKING
              </div>
              <h2 className="heading-md mb-6">Visual Skill Tree & Analytics</h2>
              <p className="text-xl text-gray-400 mb-6">
                Beautiful visualizations of your skateboarding journey. Track mastery across all obstacles, monitor success rates, and share progress with sponsors.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">🌳</span>
                  <div>
                    <strong className="text-white">Skill Tree Visualization:</strong>
                    <p className="text-gray-400">See trick dependencies and progression paths</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">📊</span>
                  <div>
                    <strong className="text-white">Success Rate Tracking:</strong>
                    <p className="text-gray-400">Monitor improvement over time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">🎯</span>
                  <div>
                    <strong className="text-white">Obstacle Category Progress:</strong>
                    <p className="text-gray-400">Track mastery across 8 categories</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 text-xl">📈</span>
                  <div>
                    <strong className="text-white">Shareable Progress Cards:</strong>
                    <p className="text-gray-400">Create beautiful summaries for social media</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 6: Professional Reporting */}
      <section className="py-20 bg-brand-red">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-white mb-6">
              Professional Reporting for Stakeholders
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Generate comprehensive progress reports for parents, sponsors, and federations. Professional documentation that justifies premium coaching investments of $200+ per session.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">📄 For Parents</h3>
                <p className="text-white/80">Clear progress summaries showing ROI on coaching investment</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">💼 For Sponsors</h3>
                <p className="text-white/80">Professional reports with performance metrics and goals</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">🏛️ For Federations</h3>
                <p className="text-white/80">Compliance documentation for national team programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">Even More Features</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-white mb-3">Daily Streaks</h3>
              <p className="text-gray-400">Build momentum with daily practice tracking and streak milestones</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="text-xl font-bold text-white mb-3">Achievement Badges</h3>
              <p className="text-gray-400">Unlock badges for trick mastery, competition wins, and practice goals</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Messaging</h3>
              <p className="text-gray-400">Direct communication with coaches for instant feedback</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-3">Team Management</h3>
              <p className="text-gray-400">Track individual athletes within team coaching contexts</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Session Scheduling</h3>
              <p className="text-gray-400">Book and manage coaching sessions with calendar integration</p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-3">Gamification Engine</h3>
              <p className="text-gray-400">XP, levels, and daily challenges keep you motivated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="section-container text-center">
          <h2 className="heading-lg mb-6">Experience Professional Coaching Tools</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Download The Skate Workshop and access the same tools used by Olympic coaches and national teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="btn-primary">
              Download App
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
