'use client'

import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  highlighted?: boolean
}

export default function FeatureCard({ icon, title, description, highlighted = false }: FeatureCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  // Handle mouse move for 3D tilt effect (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Calculate rotation (max 10 degrees)
    const rotateXValue = (mouseY / (rect.height / 2)) * -10
    const rotateYValue = (mouseX / (rect.width / 2)) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: shouldReduceMotion ? 0 : -8,
      }}
      style={{
        transform: shouldReduceMotion
          ? 'none'
          : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
      }}
      className={`
        relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6
        transition-all duration-300 cursor-pointer
        ${highlighted
          ? 'border-2 border-brand-red/50 shadow-glow'
          : 'border border-gray-800 hover:border-brand-red/50'
        }
        ${isHovered && !shouldReduceMotion ? 'shadow-2xl' : 'shadow-lg'}
      `}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-brand-red/0 to-brand-red/5 opacity-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : ''
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with animation */}
        <motion.div
          animate={{
            scale: isHovered && !shouldReduceMotion ? 1.1 : 1,
            rotate: isHovered && !shouldReduceMotion ? 5 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20
          }}
          className="text-5xl mb-4"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Highlight indicator */}
      {highlighted && (
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-brand-red/20 text-brand-red border border-brand-red/30">
            Featured
          </span>
        </div>
      )}
    </motion.div>
  )
}
