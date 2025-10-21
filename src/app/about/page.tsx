import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Willy Santos | Olympic Coach',
  description: 'Meet Willy Santos. 30+ years. Commission Skateboard France. Coached Olympians.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - Minimal */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">ABOUT WILLY</p>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-display-xl font-heading text-white mb-12">
                COACHED <span className="text-brand-red">OLYMPIANS</span>
              </h1>
              <p className="text-body-lg text-white/80 mb-8 max-w-xl">
                Hey, I'm Willy Santos. I've been coaching for over 30 years, working with Commission Skateboard France, X-Games medalists, and Olympic competitors.
              </p>
              <p className="text-body text-white/60 max-w-xl">
                I love helping skaters at every level find their flow and push their limits. Let's work together.
              </p>
            </div>

            <div className="relative h-[600px] bg-gray-900/30 rounded-2xl overflow-hidden">
              <Image
                src="/images/coach-willy.jpg"
                alt="Willy Santos"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHO HE'S COACHED */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <h2 className="text-h2 font-heading text-white mb-20 text-center">
            WHO HE'S <span className="text-brand-red">COACHED</span>
          </h2>

          {/* Notable Athletes - Clean Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Lucie Schoonheere", flag: "🇧🇪", img: "/images/athletes/lucie-schoonheere.jpg", ig: "lucie_schoonheere" },
              { name: "Vincent Milou", flag: "🇫🇷", img: "/images/athletes/vincent-milou.jpg", ig: "vincentmilou" },
              { name: "Bryce Wettstein", flag: "🇺🇸", img: "/images/athletes/bryce-wettstein.jpg", ig: "brycewettstein" },
              { name: "Sakura Yosozumi", flag: "🥇", img: "/images/athletes/sakura-yosozumi.jpg", ig: "sakura_yosozumi" },
              { name: "Joseph Garbaccio", flag: "🇫🇷", img: "/images/athletes/joseph-garbaccio.jpg", ig: "joseph_garbaccio" },
              { name: "Mazel Paris", flag: "🇵🇭", img: "/images/athletes/mazel-paris.jpg", ig: "mazelparis" },
              { name: "Ichiro Tanabe", flag: "🇯🇵", img: "/images/athletes/ichiro-tanabe.jpg", ig: "t.ichiro04" },
              { name: "Nana Conda", flag: "🇫🇷", img: "/images/athletes/nana-conda.jpg", ig: "nanacondaskate" },
              { name: "Noé Montagard", flag: "🇫🇷", img: "/images/athletes/noe-montagard.jpg", ig: "noe_montagard" },
              { name: "Tom Martin", flag: "🇫🇷", img: "/images/athletes/tom-martin.jpg", ig: "tom.martin.13" },
            ].map((athlete) => (
              <a
                key={athlete.name}
                href={`https://www.instagram.com/${athlete.ig}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-square mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={athlete.img}
                    alt={athlete.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg mb-1">{athlete.flag}</p>
                  <p className="text-sm text-white/80 font-heading group-hover:text-brand-red transition-colors">
                    {athlete.name.toUpperCase()}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-body-sm text-white/50 text-center mt-16 max-w-2xl mx-auto">
            Olympic athletes. X-Games medalists. Commission Skateboard France team. They all train with Willy.
          </p>
        </div>
      </section>

      {/* WHAT HE BELIEVES */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">COACHING PHILOSOPHY</p>

          <div className="max-w-4xl">
            <h2 className="text-display-lg font-heading text-white mb-12">
              BUILD THE <span className="text-brand-red">FOUNDATION.</span><br/>
              MASTER THE <span className="text-brand-red">BASICS.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="border-l-2 border-brand-red pl-6">
                <h3 className="text-h4 font-heading text-white mb-3">TECHNIQUE FIRST</h3>
                <p className="text-body-sm text-white/60">
                  Get the basics right and everything else follows.
                </p>
              </div>

              <div className="border-l-2 border-brand-red pl-6">
                <h3 className="text-h4 font-heading text-white mb-3">SYSTEMATIC GROWTH</h3>
                <p className="text-body-sm text-white/60">
                  We'll work through 400+ tricks together, step by step.
                </p>
              </div>

              <div className="border-l-2 border-brand-red pl-6">
                <h3 className="text-h4 font-heading text-white mb-3">REAL FEEDBACK</h3>
                <p className="text-body-sm text-white/60">
                  Personal video analysis tailored just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WILLY'S WORKSHOP */}
      <section className="section-spacing-lg border-b border-white/10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/60 uppercase tracking-widest text-sm mb-8">ALSO FROM WILLY</p>
            
            <h2 className="text-display-lg font-heading text-white mb-8">
              CUSTOM <span className="text-brand-red">SKATEBOARDS</span>
            </h2>
            
            <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
              When I'm not coaching, I'm crafting custom skateboards. Check out my workshop where I build boards for skaters who want something truly unique.
            </p>
            
            <Link 
              href="https://willysworkshop.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-12 py-4 inline-block"
            >
              VISIT WILLY'S WORKSHOP
            </Link>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="section-spacing-lg">
        <div className="section-container text-center">
          <p className="text-white/60 uppercase tracking-widest text-sm mb-8">READY TO LEVEL UP?</p>

          <h2 className="text-display font-heading text-white mb-12 max-w-5xl mx-auto">
            TRAIN WITH <span className="text-brand-red">WILLY</span>
          </h2>

          <Link href="/download" className="btn-primary text-lg px-16 py-6 inline-block">
            JOIN WAITLIST
          </Link>
        </div>
      </section>
    </div>
  )
}
