import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Skate Workshop',
  description: 'Privacy Policy for The Skate Workshop. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-400">
              Last Updated: October 16, 2025
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
                  The Skate Workshop ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Personal Information</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Register for an account</li>
                  <li>Make a purchase or booking</li>
                  <li>Upload videos or content</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply to join our coach network</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  This information may include: name, email address, phone number, payment information, profile photo, and any other information you choose to provide.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Usage Data</h3>
                <p className="text-gray-400 leading-relaxed">
                  We automatically collect certain information when you use the Service, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Device information (type, operating system, unique device identifiers)</li>
                  <li>Log data (IP address, browser type, pages visited, time spent)</li>
                  <li>Usage statistics (features used, session duration, performance data)</li>
                  <li>Location data (with your permission)</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Video Content</h3>
                <p className="text-gray-400 leading-relaxed">
                  When you upload videos to our Service, we store and process this content to provide coaching features, analytics, and social sharing capabilities. You retain all rights to your video content.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide, maintain, and improve the Service</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative and promotional communications</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                  <li>Personalize your experience and deliver relevant content</li>
                  <li>Facilitate coach-athlete connections</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">With Coaches</h3>
                <p className="text-gray-400 leading-relaxed">
                  When you book coaching sessions, we share necessary information with your coach to facilitate the service, including your name, skill level, and training videos.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Service Providers</h3>
                <p className="text-gray-400 leading-relaxed">
                  We may share your information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Payment processing (Stripe)</li>
                  <li>Cloud storage (Supabase)</li>
                  <li>Analytics providers</li>
                  <li>Email service providers</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Legal Requirements</h3>
                <p className="text-gray-400 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Business Transfers</h3>
                <p className="text-gray-400 leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong className="text-white">Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Data Portability:</strong> Request transfer of your data to another service</li>
                  <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  To exercise these rights, please contact us at privacy@skateworkshop.com.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">International Data Transfers</h2>
                <p className="text-gray-400 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take steps to ensure that your information receives an adequate level of protection.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <p className="text-white mb-2">The Skate Workshop</p>
                  <p className="text-gray-400">Email: privacy@skateworkshop.com</p>
                  <p className="text-gray-400">General Inquiries: contact@skateworkshop.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
