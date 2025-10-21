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
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">For fellow coaches</p>

          <h1 className="text-display-xl font-heading text-white mb-12 max-w-6xl">
            Join our <span className="text-brand-red">coaching network</span>
          </h1>

          <p className="text-body-lg text-white/70 max-w-2xl mb-8">
            I'm looking for passionate coaches who share my love for helping skaters grow. Together, we can create something special - a place where every skater feels supported and encouraged to reach their potential.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <h2 className="text-h2 font-heading text-white mb-20 text-center">
            What we can <span className="text-brand-red">build together</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Fair Partnership</h3>
              <p className="text-body-sm text-white/60">
                You keep 70% of what you earn because your coaching is the heart of what we do. I'll handle the technology so you can focus on what you love.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Great Tools</h3>
              <p className="text-body-sm text-white/60">
                I've spent years developing tools that actually help - video analysis, progress tracking, and reporting features that make coaching easier and more effective.
              </p>
            </div>

            <div className="border-l-2 border-brand-red pl-6">
              <h3 className="text-h4 font-heading text-white mb-3">Supportive Network</h3>
              <p className="text-body-sm text-white/60">
                Join a community of coaches who genuinely care about helping skaters. We'll support each other and share what works.
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
              I'd love to <span className="text-brand-red">hear from you</span>
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
                Send my application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
