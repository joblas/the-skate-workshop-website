import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src="/images/logo/icon.png"
                  alt="The Skate Workshop App Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full antialiased"
                  quality={100}
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading text-white antialiased" style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility'
                }}>The Skate Workshop App</span>
                <span className="text-sm text-white/60 font-body antialiased" style={{
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}>Mobile Training App</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-body">
              Mobile skateboarding coaching app from Olympic-level coach Willy Santos
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-heading text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* Coaches */}
          <div>
            <h3 className="font-heading text-white mb-4">For Coaches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/coaches" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Willy Santos
                </Link>
              </li>
              <li>
                <Link 
                  href="https://willysworkshop.com/" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Willy's Skateboard Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-4 text-center">Follow Willy's Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/willysworkshop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors text-sm"
              >
                🛠️ Willy's Workshop
              </a>
              <a
                href="https://www.instagram.com/skate_warz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors text-sm"
              >
                ⚔️ Skate Warz
              </a>
              <a
                href="https://www.instagram.com/couchcurbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors text-sm"
              >
                🏙️ Couch Curbs
              </a>
              <a
                href="https://www.instagram.com/kaintayoday/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors text-sm"
              >
                🍽️ Kain Tayo Day
              </a>
              <a
                href="https://www.instagram.com/commission_skateboard_france/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-red transition-colors text-sm"
              >
                🇫🇷 Commission Skateboard France
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The Skate Workshop App. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Powered by Joe's Tech Solutions LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
