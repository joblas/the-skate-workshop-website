'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Supabase
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="heading-lg mb-6">Message Sent!</h1>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for contacting us. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Get in Touch</h1>
            <p className="text-2xl text-gray-400">
              Have questions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">General inquiries</p>
              <a href="mailto:contact@skateworkshop.com" className="text-brand-red hover:text-brand-red-light">
                contact@skateworkshop.com
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Team Inquiries</h3>
              <p className="text-gray-400 mb-4">Federations & teams</p>
              <a href="mailto:teams@skateworkshop.com" className="text-brand-red hover:text-brand-red-light">
                teams@skateworkshop.com
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">Support</h3>
              <p className="text-gray-400 mb-4">Technical help</p>
              <a href="mailto:support@skateworkshop.com" className="text-brand-red hover:text-brand-red-light">
                support@skateworkshop.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-white font-semibold mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  >
                    <option value="general">General Question</option>
                    <option value="coaching">Coaching Session Booking</option>
                    <option value="team">Team/Federation Package</option>
                    <option value="support">Technical Support</option>
                    <option value="press">Press & Media</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How quickly will I hear back?</h3>
                <p className="text-gray-400">
                  We respond to all inquiries within 24 hours during business days. For urgent support issues, please email support@skateworkshop.com directly.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can I schedule a demo?</h3>
                <p className="text-gray-400">
                  Yes! Teams and federations interested in custom packages can request a personalized demo. Select "Team/Federation Package" as your inquiry type.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Do you offer phone support?</h3>
                <p className="text-gray-400">
                  Currently, we provide support via email and in-app chat. Elite tier members receive priority support with 24-hour response times.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How do I report a bug?</h3>
                <p className="text-gray-400">
                  Please email support@skateworkshop.com with details about the issue, including your device type, OS version, and steps to reproduce the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
