import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | The Skate Workshop',
  description: 'Terms of Service for The Skate Workshop. Read our terms and conditions for using our platform.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-xl mb-6">Terms of Service</h1>
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
                <h2 className="text-3xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and The Skate Workshop, operated by Joe's Tech Solutions LLC ("Company," "we," "us," or "our"), concerning your access to and use of the The Skate Workshop mobile application and website (collectively, the "Service").
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">User Accounts</h2>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Account Creation</h3>
                <p className="text-gray-400 leading-relaxed">
                  To use certain features of the Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Account Termination</h3>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in conduct that we determine, in our sole discretion, is harmful to the Service or other users.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Subscription Plans and Payment</h2>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Subscription Tiers</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We offer multiple subscription tiers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Basic Training: $9.99/month</li>
                  <li>Pro Coaching: $19.99/month</li>
                  <li>Elite 1-on-1 Access: $49.99/month</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Billing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Subscription fees are billed in advance on a monthly basis. You authorize us to charge your payment method on a recurring basis. All fees are non-refundable except as required by law or as expressly stated in these Terms.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Cancellation</h3>
                <p className="text-gray-400 leading-relaxed">
                  You may cancel your subscription at any time from your account settings. Cancellation will take effect at the end of your current billing period. You will continue to have access to your subscription benefits until the end of the paid period.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Coaching Sessions</h3>
                <p className="text-gray-400 leading-relaxed">
                  1-on-1 coaching sessions are separate from subscriptions and are charged per session. Session fees are subject to our cancellation policy: cancellations made less than 24 hours before a scheduled session may forfeit the session fee.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">User Content</h2>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Your Content</h3>
                <p className="text-gray-400 leading-relaxed">
                  You retain all ownership rights to content you upload to the Service, including videos, photos, and text ("Your Content"). By uploading Your Content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display Your Content solely for the purpose of providing and improving the Service.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Content Standards</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You agree not to upload content that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Violates any law or regulation</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains hate speech, harassment, or bullying</li>
                  <li>Includes personal information of others without consent</li>
                  <li>Contains malware or malicious code</li>
                  <li>Promotes illegal activities</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Content Moderation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to remove any content that violates these Terms or is otherwise objectionable, without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Coach Network</h2>
                
                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Coach Requirements</h3>
                <p className="text-gray-400 leading-relaxed">
                  Coaches must meet our qualification requirements and pass our verification process. Coaches are independent contractors, not employees of The Skate Workshop.
                </p>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Revenue Sharing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Coaching session revenue is split as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Coach: 70%</li>
                  <li>Willy's Workshop Brand: 15%</li>
                  <li>Platform Fee: 15%</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-3 mt-6">Coach Conduct</h3>
                <p className="text-gray-400 leading-relaxed">
                  Coaches must maintain professional conduct, provide quality service, and comply with all applicable laws and regulations. Failure to do so may result in removal from the coach network.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-gray-400 leading-relaxed">
                  The Service and its original content (excluding Your Content), features, and functionality are owned by The Skate Workshop and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  You may not copy, modify, distribute, sell, or lease any part of the Service without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Prohibited Activities</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>Use the Service for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to any part of the Service</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Impersonate any person or entity</li>
                  <li>Collect user information without consent</li>
                  <li>Transmit viruses or harmful code</li>
                  <li>Engage in any activity that could damage our reputation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
                <p className="text-gray-400 leading-relaxed">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  We do not warrant that the Service will be uninterrupted, error-free, or secure. We do not warrant the results that may be obtained from use of the Service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-400 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SKATE WORKSHOP AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Indemnification</h2>
                <p className="text-gray-400 leading-relaxed">
                  You agree to indemnify and hold harmless The Skate Workshop and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-gray-400 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Dispute Resolution</h2>
                <p className="text-gray-400 leading-relaxed">
                  Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on the Service and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Severability</h2>
                <p className="text-gray-400 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <p className="text-white mb-2">The Skate Workshop</p>
                  <p className="text-gray-400">Operated by: Joe's Tech Solutions LLC</p>
                  <p className="text-gray-400 mt-2">Email: legal@skateworkshop.com</p>
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
