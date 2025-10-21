'use client'

import Link from 'next/link'
import Image from 'next/image'
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

  return (
    <section className="relative bg-black py-23 md:py-32 lg:py-40 overflow-hidden min-h-screen flex items-center border-b border-white/10">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://theresandiego.com/wp-content/uploads/Willy-Santos-5.jpg"
          alt="Willy Santos skateboarding"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="section-container relative z-10" id="main-content">
        <div className="max-w-7xl mx-auto">
          {/* Small eyebrow */}
          <motion.p
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="text-white/60 uppercase tracking-widest text-sm mb-8 font-heading antialiased"
          >
            COACHED BY AN OLYMPIAN TRAINER
          </motion.p>

          {/* MASSIVE headline with color accent */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-display-xl font-heading text-white mb-12 max-w-6xl antialiased"
          >
            SKATE HARD. <span className="text-brand-red">LEVEL UP.</span>
          </motion.h1>

          {/* Minimal subtitle */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-body-lg text-white/80 mb-14 max-w-2xl font-body antialiased"
          >
            Train with Willy Santos, coach of Olympic athletes. Learn the techniques that actually work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-5 items-start"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/download"
                className="btn-primary text-lg px-12 py-5"
              >
                JOIN WAITLIST
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="btn-ghost text-lg px-12 py-5"
              >
                MEET WILLY
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
