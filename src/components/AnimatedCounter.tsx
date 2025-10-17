'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

/**
 * AnimatedCounter component that counts from 0 to target value when scrolled into view
 * Uses requestAnimationFrame for smooth 60fps animation
 * Respects prefers-reduced-motion settings
 */
export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Only animate once when in view
    if (!isInView || hasAnimated) return

    setHasAnimated(true)

    // If reduced motion is preferred, show final value immediately
    if (shouldReduceMotion) {
      setValue(target)
      return
    }

    const startTime = performance.now()
    let animationFrameId: number

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = easeOut * target

      setValue(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setValue(target) // Ensure we end exactly at target
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup function to cancel animation if component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, hasAnimated, target, duration, shouldReduceMotion])

  // Format the number
  const formattedValue = value.toFixed(decimals)

  return (
    <span
      ref={ref}
      aria-label={`${prefix}${target}${suffix}`}
      className="tabular-nums"
    >
      {prefix}{formattedValue}{suffix}
    </span>
  )
}
