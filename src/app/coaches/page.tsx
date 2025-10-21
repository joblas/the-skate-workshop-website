'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CoachesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearsExperience: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Supabase
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-display font-heading text-white mb-8">
              APPLICATION <span className="text-brand-red">RECEIVED</span>
            </h1>
            <p className="text-body text-white/70 mb-12">
              We'll review your application and get back to you within 3-5 days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-ghost"
            >
              SUBMIT ANOTHER
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">FOR COACHES</p>

          <h1 className="text-display-xl font-heading text-white mb-12 max-w-6xl">
            JOIN WILLY'S <span className="text-brand-red">NETWORK</span>
          </h1>

          <p className="text-body-lg text-white/70 max-w-2xl mb-8">
            Earn 70% of coaching revenue. Access professional tools. Associate with Olympic-level credibility.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <h2 className="text-h2 font-heading text-white mb-20 text-center">
            WHAT YOU <span className="text-brand-red">GET</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">70% REVENUE</h3>
              <p className="text-body-sm text-white/60">
                Keep most of what you earn. We handle the tech.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">PRO TOOLS</h3>
              <p className="text-body-sm text-white/60">
                Video analysis. Session tracking. Progress reports.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">CREDIBILITY</h3>
              <p className="text-body-sm text-white/60">
                Associate with Willy's Olympic-level reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-spacing-lg">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 font-heading text-white mb-12 text-center">
              APPLY <span className="text-brand-red">NOW</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-heading text-white/80 mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-heading text-white/80 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-heading text-white/80 mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-heading text-white/80 mb-2 uppercase tracking-wide">
                  Years of Coaching Experience
                </label>
                <input
                  type="number"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-heading text-white/80 mb-2 uppercase tracking-wide">
                  Why do you want to join?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-brand-red focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                SUBMIT APPLICATION
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
