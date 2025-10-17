import { Metadata } from 'next'
import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata: Metadata = {
  title: 'Download The Skate Workshop App | iOS & Android',
  description: 'Download The Skate Workshop on iOS and Android. Elite skateboarding coaching from Olympic legend Willy Santos, available on your phone.',
  keywords: 'download skateboarding app, iOS skate app, Android skate app, skateboarding coaching download',
}

export default function DownloadPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-red to-brand-red-dark">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-white font-bold text-sm">
                🚀 LAUNCHING SOON ON iOS & ANDROID
              </p>
            </div>
            <h1 className="heading-xl text-white mb-6">The Skate Workshop App</h1>
            <p className="text-2xl text-white/90 mb-4">
              Elite skateboarding coaching from Willy Santos. Join the waitlist for early access.
            </p>
            <a href="#waitlist" className="btn-primary bg-black hover:bg-gray-900 inline-block mt-4">
              Join Waitlist →
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon - Waitlist */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Coming Soon Badge */}
            <div className="text-center mb-12">
              <div className="inline-block bg-brand-red/20 border border-brand-red rounded-full px-6 py-2 mb-6">
                <p className="text-brand-red font-bold text-sm">🚀 COMING SOON TO APP STORES</p>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Be the First to Download
              </h2>
              <p className="text-xl text-gray-400">
                Join the waitlist and get notified the moment we launch on iOS and Android
              </p>
            </div>

            {/* Platform Cards - Coming Soon */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* iOS */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                <div className="text-6xl mb-4"></div>
                <h2 className="text-2xl font-bold text-white mb-2">iOS App</h2>
                <p className="text-gray-400 mb-4">Apple App Store</p>
                <div className="text-sm text-gray-500">
                  <p>✓ iPhone & iPad</p>
                  <p>✓ iOS 14.0+</p>
                </div>
              </div>

              {/* Android */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full">
                  Coming Soon
                </div>
                <div className="text-6xl mb-4"></div>
                <h2 className="text-2xl font-bold text-white mb-2">Android App</h2>
                <p className="text-gray-400 mb-4">Google Play Store</p>
                <div className="text-sm text-gray-500">
                  <p>✓ All Android Devices</p>
                  <p>✓ Android 10.0+</p>
                </div>
              </div>
            </div>

            {/* Premium Waitlist Form */}
            <div id="waitlist">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* App Features Quick Preview */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center mb-12">What You'll Get</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Video Tools</h3>
                <p className="text-gray-400">
                  Frame-by-frame analysis, slow-motion playback, and professional annotations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Progress Tracking</h3>
                <p className="text-gray-400">
                  Track 400+ tricks across 8 obstacle categories with 4-stage mastery system
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚔️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Skate Warz Battles</h3>
                <p className="text-gray-400">
                  Compete in real-time Game of SKATE battles with skaters worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">System Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                  iOS
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>iOS 14.0 or later</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>iPhone 8 or newer recommended</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>200 MB free storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>Camera access for video recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>Internet connection required</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Android
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>Android 10.0 or later</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>4GB RAM minimum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>200 MB free storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>Camera access for video recording</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">•</span>
                    <span>Internet connection required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Get Started in Minutes</h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Download & Install</h3>
                  <p className="text-gray-400">
                    Get the app from the App Store or Google Play. Installation takes less than a minute.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Create Your Account</h3>
                  <p className="text-gray-400">
                    Sign up with your email or use Google/Apple sign-in for instant access.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Set Your Goals</h3>
                  <p className="text-gray-400">
                    Tell us your skill level and which tricks you want to learn. We'll personalize your experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Start Training</h3>
                  <p className="text-gray-400">
                    Record your first video, track your progress, or jump into a Skate Warz battle!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Need Help?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our support team is here to help you get started
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Support
              </Link>
              <Link href="/features" className="btn-secondary">
                View All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-red">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to Train with the Best?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the waitlist and be among the first to experience elite skateboarding coaching from Willy Santos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist" className="btn-primary bg-black hover:bg-gray-900">
                Join Waitlist
              </a>
              <Link href="/about" className="btn-primary bg-black hover:bg-gray-900">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
