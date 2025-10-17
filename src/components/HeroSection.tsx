'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Award } from 'lucide-react'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      }
    }
  }

  // Word animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut'
      }
    }
  }

  // Badge animation
  const badgeVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut'
      }
    }
  }

  // Subtitle animation
  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.6,
        duration: shouldReduceMotion ? 0 : 0.5
      }
    }
  }

  // Button container animation
  const buttonContainerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.8,
        duration: shouldReduceMotion ? 0 : 0.5
      }
    }
  }

  // Split headline into words
  const headline = "Elite Skateboarding Coaching from a Coach of Olympians"
  const words = headline.split(' ')

  return (
    <section className="relative bg-gradient-to-b from-brand-red to-brand-red-dark py-20 md:py-32 lg:py-40 overflow-hidden min-h-screen flex items-center">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="section-container relative z-10" id="main-content">
        <div className="max-w-5xl mx-auto text-center">
          {/* Glassmorphic credential badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <Award className="w-5 h-5 text-white" />
            <p className="text-white font-semibold text-sm md:text-base">
              Commission Skateboard France • 30+ Years Experience
            </p>
          </motion.div>

          {/* Staggered headline animation */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle with fade-in */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Train with <span className="font-bold">Willy Santos</span>, the coach behind Olympians,
            X-Games medalists, and professional street skaters. Experience the only platform with
            Olympic-level validation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/download"
                className="w-full sm:w-auto inline-block bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Join Waitlist
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-block border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
              >
                Meet Willy Santos
              </Link>
            </motion.div>
          </motion.div>

          {/* Coming soon text */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-sm md:text-base"
          >
            Coming Soon to iOS and Android • Join the Waitlist
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="flex flex-col items-center gap-2 text-white/70"
            >
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
