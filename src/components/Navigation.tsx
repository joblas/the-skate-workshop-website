'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/features', label: 'FEATURES' },
    { href: '/coaches', label: 'COACHES' },
    { href: 'https://willysworkshop.com/', label: 'SHOP', external: true },
  ]

  return (
    <>
      {/* Minimal top border */}
      <div className="fixed top-0 left-0 right-0 h-px bg-white/10 z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black border-b border-white/10 z-40 h-24">
        <div className="section-container h-full">
          <div className="flex items-center justify-between h-full">
            {/* Professional Logo */}
            <Link href="/" className="flex items-center space-x-4 group hover:opacity-90 transition-opacity duration-200">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/images/logo/icon.png"
                  alt="The Skate Workshop"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full antialiased"
                  priority
                  quality={100}
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold text-white tracking-tight leading-tight antialiased" style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility'
                }}>
                  TheSkateWorkshop App
                </span>
                <span className="text-xs text-white/60 font-medium tracking-wider uppercase antialiased" style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}>
                  Mobile Training
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors text-sm font-heading tracking-wider antialiased"
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Desktop CTA Button */}
              <Link
                href="/download"
                className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red text-white font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-brand-red/25 group overflow-hidden antialiased"
              >
                <span className="relative z-10">JOIN WAITLIST</span>
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-brand-red transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-24 left-0 right-0 bg-black border-b border-white/10 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="section-container py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-lg font-heading tracking-wider antialiased py-2"
                {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              href="/download"
              className="relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-brand-red text-white font-semibold text-sm tracking-wider uppercase rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-brand-red/25 group overflow-hidden antialiased mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="relative z-10">JOIN WAITLIST</span>
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-red focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
    </>
  )
}
