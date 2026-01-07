import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import RootLayout from '../app/layout'

// Mock child components to avoid rendering depth
vi.mock('@/components/Navigation', () => ({ default: () => <div data-testid="nav" /> }))
vi.mock('@/components/Footer', () => ({ default: () => <div data-testid="footer" /> }))
vi.mock('@vercel/analytics/next', () => ({ Analytics: () => <div data-testid="analytics" /> }))

// Mock next/font/google
vi.mock('next/font/google', () => ({
  Spline_Sans: () => ({
    variable: '--font-spline',
    className: 'spline-sans-class'
  })
}))

describe('RootLayout', () => {
  it('should apply the Spline Sans font variable', () => {
    // We can't easily render the full html/body structure in JSDOM because JSDOM creates its own.
    // However, we can inspect the returned React element or try to render it.
    // Note: Rendering <html> in a test sometimes causes warnings, but it usually works for assertions.
    
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )

    // Check if the body or html has the variable
    // Since Next.js applies the variable to the <body> or <html> usually via the font object
    const body = container.querySelector('body')
    expect(body?.className).toContain('spline-sans-class') 
    // Or check for the variable style if we pass it that way
  })
})
