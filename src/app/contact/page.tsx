'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, Mail, User, FileText, MessageSquare, Tag } from 'lucide-react'
import confetti from 'canvas-confetti'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  inquiryType: z.enum(['general', 'coaching', 'team', 'support', 'press', 'partnership']),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      inquiryType: 'general',
    },
  })

  // Trigger confetti animation
  const fireConfetti = () => {
    const count = 100
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#E84545', '#FF5555', '#FFFFFF'],
    }

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to send message')
      }

      // Success!
      setIsSuccess(true)
      fireConfetti()
      reset()
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
              <a href="mailto:contact@theskateworkshop.app" className="text-brand-red hover:text-brand-red-light">
                contact@theskateworkshop.app
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-2">Team Inquiries</h3>
              <p className="text-gray-400 mb-4">Federations & teams</p>
              <a href="mailto:teams@theskateworkshop.app" className="text-brand-red hover:text-brand-red-light">
                teams@theskateworkshop.app
              </a>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-white mb-2">Support</h3>
              <p className="text-gray-400 mb-4">Technical help</p>
              <a href="mailto:support@theskateworkshop.app" className="text-brand-red hover:text-brand-red-light">
                support@theskateworkshop.app
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Send Us a Message</h2>
            <p className="text-gray-400 mb-8 text-center">Fill out the form below and we'll get back to you within 24 hours</p>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                // Success State
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-gradient-to-br from-brand-red to-brand-red-dark rounded-2xl p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-12 h-12 text-brand-red" />
                  </motion.div>
                  <h3 className="text-3xl font-heading text-white mb-4">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSuccess(false)}
                    className="bg-white text-brand-red font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                // Form State
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-800"
                >
                  <div className="space-y-6">
                    {/* Name and Email - Two Column Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <User className="w-5 h-5" />
                          </div>
                          <input
                            {...register('name')}
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className={`w-full pl-12 pr-4 py-4 bg-black/40 border rounded-lg text-white placeholder-gray-500
                              transition-all duration-200 focus:outline-none focus:ring-2
                              ${errors.name
                                ? 'border-red-500 focus:ring-red-500/50'
                                : 'border-gray-700 focus:ring-brand-red focus:border-brand-red'
                              }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-400 text-sm mt-2"
                            >
                              {errors.name.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Mail className="w-5 h-5" />
                          </div>
                          <input
                            {...register('email')}
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className={`w-full pl-12 pr-4 py-4 bg-black/40 border rounded-lg text-white placeholder-gray-500
                              transition-all duration-200 focus:outline-none focus:ring-2
                              ${errors.email
                                ? 'border-red-500 focus:ring-red-500/50'
                                : 'border-gray-700 focus:ring-brand-red focus:border-brand-red'
                              }`}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-400 text-sm mt-2"
                            >
                              {errors.email.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                        Inquiry Type *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <Tag className="w-5 h-5" />
                        </div>
                        <select
                          {...register('inquiryType')}
                          id="inquiryType"
                          className={`w-full pl-12 pr-4 py-4 bg-black/40 border rounded-lg text-white
                            transition-all duration-200 focus:outline-none focus:ring-2
                            ${errors.inquiryType
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-gray-700 focus:ring-brand-red focus:border-brand-red'
                            }`}
                        >
                          <option value="general">General Question</option>
                          <option value="coaching">Coaching Session Booking</option>
                          <option value="team">Team/Federation Package</option>
                          <option value="support">Technical Support</option>
                          <option value="press">Press & Media</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>
                      <AnimatePresence>
                        {errors.inquiryType && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.inquiryType.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                          <FileText className="w-5 h-5" />
                        </div>
                        <input
                          {...register('subject')}
                          id="subject"
                          type="text"
                          placeholder="Brief subject of your message"
                          className={`w-full pl-12 pr-4 py-4 bg-black/40 border rounded-lg text-white placeholder-gray-500
                            transition-all duration-200 focus:outline-none focus:ring-2
                            ${errors.subject
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-gray-700 focus:ring-brand-red focus:border-brand-red'
                            }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.subject.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-gray-500">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <textarea
                          {...register('message')}
                          id="message"
                          rows={6}
                          placeholder="Tell us how we can help you..."
                          className={`w-full pl-12 pr-4 py-4 bg-black/40 border rounded-lg text-white placeholder-gray-500
                            transition-all duration-200 focus:outline-none focus:ring-2 resize-none
                            ${errors.message
                              ? 'border-red-500 focus:ring-red-500/50'
                              : 'border-gray-700 focus:ring-brand-red focus:border-brand-red'
                            }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-2"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm"
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full font-semibold px-8 py-4 rounded-lg transition-all duration-200
                        flex items-center justify-center gap-2
                        ${isSubmitting || !isValid
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-brand-red hover:bg-brand-red-dark text-white shadow-lg hover:shadow-glow'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
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
                  We respond to all inquiries within 24 hours during business days. For urgent support issues, please email support@theskateworkshop.app directly.
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
                  Please email support@theskateworkshop.app with details about the issue, including your device type, OS version, and steps to reproduce the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
