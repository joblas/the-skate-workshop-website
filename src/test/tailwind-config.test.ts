import { describe, it, expect } from 'vitest'
import config from '../../tailwind.config'

describe('Tailwind Config Design Tokens', () => {
  it('should have the correct brand color palette', () => {
    const colors = config.theme?.extend?.colors as any
    expect(colors.brand).toBeDefined()
    expect(colors.brand.primary).toBe('#FC4C02') // Strava Orange
    expect(colors.brand.secondary).toBe('#00D9FF') // Brand Cyan
    // Ensure legacy red is gone
    expect(colors.brand.red).toBeUndefined()
  })

  it('should have the correct surface and background colors', () => {
    const colors = config.theme?.extend?.colors as any
    expect(colors.surface).toBe('#1F2937') // Dark Gray Surface
    expect(colors.background).toBe('#121212') // Softer Dark Background
  })
})
