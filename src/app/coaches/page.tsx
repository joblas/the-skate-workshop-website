'use client'

import { useState } from 'react'

export default function CoachesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    yearsExperience: '',
    certifications: '',
    specializations: '',
    portfolioUrl: '',
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
            <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="heading-lg mb-6">Application Received!</h1>
            <p className="text-xl text-gray-400 mb-8">
              Thank you for your interest in joining Willy's Workshop coach network. We'll review your application and get back to you within 3-5 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-red to-brand-red-dark">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Join Willy's Workshop Coach Network
            </h1>
            <p className="text-2xl text-white/90">
              Earn 70% of coaching revenue while accessing professional tools and Olympic-level credibility
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="heading-md text-center mb-12">Why Join Our Network?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">70% Revenue Share</h3>
              <p className="text-gray-400">
                Keep 70% of all coaching session fees. We handle payments, bookings, and platform—you focus on coaching.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">Olympic Credibility</h3>
              <p className="text-gray-400">
                Associate with Willy Santos' brand and Commission Skateboard France. Elevate your coaching reputation.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Tools</h3>
              <p className="text-gray-400">
                Access premium video analysis, session tracking, and reporting tools that support $200+ hourly rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Breakdown */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Revenue Split Breakdown</h2>
            
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Your Earnings</h3>
                    <p className="text-gray-400">Direct deposit via Stripe Connect</p>
                  </div>
                  <div className="text-4xl font-bold text-brand-red">70%</div>
                </div>

                <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Willy's Workshop Brand</h3>
                    <p className="text-gray-400">Brand association & credibility</p>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">15%</div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Platform Fee</h3>
                    <p className="text-gray-400">Payment processing, booking, tools</p>
                  </div>
                  <div className="text-2xl font-bold text-gray-400">15%</div>
                </div>
              </div>

              <div className="mt-8 bg-brand-red/10 border border-brand-red/30 rounded-xl p-6">
                <p className="text-center text-gray-300">
                  <strong className="text-white">Example:</strong> For a $200/hour session, you earn $140, Willy's Workshop gets $30, platform keeps $30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Coach Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Required</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span className="text-gray-300">5+ years coaching skateboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span className="text-gray-300">Professional skateboarding experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span className="text-gray-300">Video portfolio of coaching work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span className="text-gray-300">Clean background check</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">✓</span>
                    <span className="text-gray-300">References from athletes or organizations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Preferred</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">+</span>
                    <span className="text-gray-300">Coaching certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">+</span>
                    <span className="text-gray-300">Competition coaching experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">+</span>
                    <span className="text-gray-300">Team or national program experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">+</span>
                    <span className="text-gray-300">Social media presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-3">+</span>
                    <span className="text-gray-300">Specialty areas (street, vert, etc.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center mb-12">Apply to Join</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="yearsExperience" className="block text-white font-semibold mb-2">
                    Years Coaching Experience *
                  </label>
                  <input
                    type="number"
                    id="yearsExperience"
                    name="yearsExperience"
                    required
                    min="1"
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="certifications" className="block text-white font-semibold mb-2">
                  Certifications (optional)
                </label>
                <input
                  type="text"
                  id="certifications"
                  name="certifications"
                  placeholder="e.g., USA Skateboarding Coach Level 1, First Aid/CPR"
                  value={formData.certifications}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="specializations" className="block text-white font-semibold mb-2">
                  Specializations *
                </label>
                <input
                  type="text"
                  id="specializations"
                  name="specializations"
                  required
                  placeholder="e.g., Street, Vert, Beginner Development"
                  value={formData.specializations}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="portfolioUrl" className="block text-white font-semibold mb-2">
                  Video Portfolio URL *
                </label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  required
                  placeholder="https://youtube.com/..."
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Link to YouTube, Instagram, or website showcasing your coaching
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Tell Us About Your Coaching *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Share your coaching philosophy, notable athletes you've trained, and why you want to join Willy's Workshop..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-brand-red focus:outline-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>

              <p className="text-sm text-gray-400 text-center">
                We review applications within 3-5 business days. If approved, we'll schedule a video interview.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
