import { Metadata } from 'next'

// Written from what the app actually does — supabase/schema-baseline.sql
// in the-skate-workshop-v3 and its app/(auth), app/(athlete), app/(coach)
// route groups. No Stripe integration exists in that codebase: this page
// does not claim payment data is collected, because none is.

export const metadata: Metadata = {
  title: 'Privacy Policy | The Skate Workshop',
  description: 'Privacy Policy for The Skate Workshop app and website.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-400">
              Last Updated: September 17, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  The Skate Workshop is built and operated by Joe's Tech Solutions LLC ("we," "our," or "us"). This Privacy Policy explains what the app and this website collect, why, and how you can have it deleted. It's written from what the app's code actually does — if you find it describing something the app doesn't do, tell us and we'll fix it.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Account information</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Creating an account requires an email address, handled by our authentication provider (Supabase Auth). You choose a display name and a role — athlete or coach. Coaches are identified in the app by a coach code; athletes optionally enter one to link to a specific coach.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Training content and messages</h3>
                <p className="text-gray-400 leading-relaxed">
                  When you upload a video or photo for coaching review, or send a text or voice message to your matched coach or athlete, we store it to deliver that feature. You retain ownership of everything you upload or send.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Crash and bug reports</h3>
                <p className="text-gray-400 leading-relaxed">
                  The app uses Sentry to capture crash reports and errors so we can fix bugs, and has an in-app feedback tool for reporting problems directly. Both can include device information and the app state at the time of the error.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">What we do not collect</h3>
                <p className="text-gray-400 leading-relaxed">
                  We do not process payments or collect payment information anywhere in the app — there is no billing system built into it. We do not run advertising and do not sell or share your information with advertisers.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use it to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Run your account and connect athletes with the coach they've chosen</li>
                  <li>Store and deliver the training videos and messages you send within a coach–athlete pairing</li>
                  <li>Diagnose and fix bugs and crashes</li>
                  <li>Respond when you contact support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Who Sees Your Information</h2>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Your matched coach or athlete</h3>
                <p className="text-gray-400 leading-relaxed">
                  Training videos, messages, and progress data are visible to the coach or athlete you're paired with — that pairing is the core of the app. They are not visible to other coaches or athletes on the platform.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Service providers</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use third parties to run the app, and they process data on our behalf, not for their own purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Supabase — database, file storage, and authentication</li>
                  <li>Sentry — crash and error reporting</li>
                  <li>Expo / EAS — app builds, over-the-air updates, and push notifications</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Legal requirements</h3>
                <p className="text-gray-400 leading-relaxed">
                  We may disclose information if required by law or a valid request from a public authority.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  Data is stored in Supabase with row-level security scoping each user's access to their own account and coach–athlete pairing. No method of transmission or storage is 100% secure, and we can't guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Email <a href="mailto:privacy@theskateworkshop.app" className="text-brand-primary hover:underline">privacy@theskateworkshop.app</a> to ask what we hold about you, request a copy, ask for a correction, or ask for deletion. If you're in California, the UK, or the EU, these are rights you have in law; we'll do it either way.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-400 leading-relaxed">
                  Many athletes on this platform are minors, using the app through a coach they already train with. We do not knowingly collect personal information from a child under 13 without a parent or guardian's consent. If you're a parent or guardian and believe your child under 13 has an account without your consent, email <a href="mailto:privacy@theskateworkshop.app" className="text-brand-primary hover:underline">privacy@theskateworkshop.app</a> and we will delete it. The app does not currently verify age at signup, so a parent or guardian who sets up or allows a minor's account is responsible for that decision, consistent with our <a href="/terms" className="text-brand-primary hover:underline">Terms of Service</a>.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We keep your account data while your account is active. If you ask us to delete your account, we remove your personal information and content within a reasonable time, except where we're required to keep something by law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  If what we collect changes, this page changes with it, and the "Last Updated" date changes too.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <p className="text-white mb-2">The Skate Workshop</p>
                  <p className="text-gray-400">Operated by: Joe's Tech Solutions LLC</p>
                  <p className="text-gray-400 mt-2">Privacy: <a href="mailto:privacy@theskateworkshop.app" className="text-brand-primary hover:underline">privacy@theskateworkshop.app</a></p>
                  <p className="text-gray-400">Support: <a href="mailto:support@theskateworkshop.app" className="text-brand-primary hover:underline">support@theskateworkshop.app</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
