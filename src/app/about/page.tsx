import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Willy Santos | Commission Skateboard France & Olympic Legend',
  description: 'Meet Willy Santos, elite skateboarding coach with 30+ years of experience. Works with Commission Skateboard France and has trained Olympians, X-Games medalists, and professional street skaters.',
  keywords: 'Willy Santos, skateboarding coach, Commission Skateboard France, Olympic coach, elite skateboard training',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-red to-brand-red-dark py-20 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-xl text-white mb-6">
              Meet Willy Santos
            </h1>
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/images/coach-willy.jpg"
                alt="Willy Santos - Elite Skateboarding Coach"
                fill
                className="rounded-full object-cover border-4 border-white shadow-2xl"
                priority
              />
            </div>
            <p className="text-2xl text-white/90 mb-8">
              Commission Skateboard France • 30+ Years Elite Experience • Olympic-Level Training
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md mb-8">One of the Greatest of All Time</h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Willy Santos stands as one of skateboarding's most respected coaches, bringing over <strong className="text-white">30 years of elite coaching experience</strong> to The Skate Workshop. Through his work with <strong className="text-white">Commission Skateboard France</strong>, Willy has proven his ability to develop world-class talent at the highest levels of competition.
              </p>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Elite Coaching Credentials</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="text-brand-red text-3xl mb-3">🏆</div>
                  <h4 className="font-bold text-white mb-2">Olympic Athletes</h4>
                  <p className="text-gray-400">Trained multiple Olympians competing at the highest level of international skateboarding</p>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="text-brand-red text-3xl mb-3">🥇</div>
                  <h4 className="font-bold text-white mb-2">X-Games Medalists</h4>
                  <p className="text-gray-400">Developed X-Games medalists who dominate international competitions</p>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="text-brand-red text-3xl mb-3">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2">Commission Skateboard France</h4>
                  <p className="text-gray-400">Works with Commission Skateboard France, the official French skateboarding federation</p>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="text-brand-red text-3xl mb-3">⭐</div>
                  <h4 className="font-bold text-white mb-2">Professional Skaters</h4>
                  <p className="text-gray-400">Mentored numerous professional street skaters throughout his career</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Notable Students</h3>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Willy's coaching expertise has shaped some of skateboarding's most recognized names. These elite athletes trust The Skate Workshop platform for their training and progression:
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <a
                  href="https://www.instagram.com/lucie_schoonheere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/lucie-schoonheere.jpg"
                      alt="Lucie Schoonheere"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇧🇪</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Lucie Schoonheere</h4>
                  <p className="text-gray-400 text-sm text-center">Belgian Olympic skateboarder competing at the highest international level</p>
                </a>

                <a
                  href="https://www.instagram.com/vincentmilou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/vincent-milou.jpg"
                      alt="Vincent Milou"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Vincent Milou</h4>
                  <p className="text-gray-400 text-sm text-center">Former Willy's Workshop team member and close friend, pro street skater</p>
                </a>

                <a
                  href="https://www.instagram.com/brycewettstein/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/bryce-wettstein.jpg"
                      alt="Bryce Wettstein"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇺🇸</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Bryce Wettstein</h4>
                  <p className="text-gray-400 text-sm text-center">X-Games medalist and Olympic athlete representing USA</p>
                </a>

                <a
                  href="https://www.instagram.com/mazelparis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/mazel-paris.jpg"
                      alt="Mazel Paris"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇵🇭</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Mazel Paris</h4>
                  <p className="text-gray-400 text-sm text-center">Filipino skateboarding talent pushing street skating boundaries</p>
                </a>

                <a
                  href="https://www.instagram.com/t.ichiro04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/ichiro-tanabe.jpg"
                      alt="Ichiro Tanabe"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇯🇵</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Ichiro Tanabe</h4>
                  <p className="text-gray-400 text-sm text-center">Japanese professional skater with technical street expertise</p>
                </a>

                <a
                  href="https://www.instagram.com/sakura_yosozumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/sakura-yosozumi.jpg"
                      alt="Sakura Yosozumi"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🥇</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Sakura Yosozumi</h4>
                  <p className="text-gray-400 text-sm text-center">Tokyo 2020 Olympic gold medalist, park skateboarding champion</p>
                </a>

                <a
                  href="https://www.instagram.com/joseph_garbaccio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/joseph-garbaccio.jpg"
                      alt="Joseph Garbaccio"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Joseph Garbaccio</h4>
                  <p className="text-gray-400 text-sm text-center">Commission Skateboard France team member, competitive street skater</p>
                </a>

                <a
                  href="https://www.instagram.com/nanacondaskate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/nana-conda.jpg"
                      alt="Nana Conda"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Nana Conda</h4>
                  <p className="text-gray-400 text-sm text-center">Commission Skateboard France team member, rising street talent</p>
                </a>

                <a
                  href="https://www.instagram.com/noe_montagard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/noe-montagard.jpg"
                      alt="Noé Montagard"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Noé Montagard</h4>
                  <p className="text-gray-400 text-sm text-center">Commission Skateboard France team member, technical street skater</p>
                </a>

                <a
                  href="https://www.instagram.com/tom.martin.13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-brand-red/50 transition-colors group"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src="/images/athletes/tom-martin.jpg"
                      alt="Tom Martin"
                      fill
                      className="rounded-full object-cover border-2 border-brand-red"
                    />
                  </div>
                  <div className="text-brand-red text-xl mb-2 text-center">🇫🇷</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-brand-red transition-colors text-center">Tom Martin</h4>
                  <p className="text-gray-400 text-sm text-center">Commission Skateboard France team member, competitive skater</p>
                </a>
              </div>

              <div className="bg-brand-red/10 border border-brand-red/30 rounded-xl p-6 my-8">
                <p className="text-gray-300 italic text-center">
                  These world-class athletes use The Skate Workshop platform to track their sessions, analyze their progression, and maintain their competitive edge.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Coaching Philosophy</h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Willy's coaching approach combines <strong className="text-white">systematic skill progression</strong> with <strong className="text-white">personalized feedback</strong> tailored to each athlete's unique style and goals. His methodology emphasizes:
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">→</span>
                  <span className="text-gray-300"><strong className="text-white">Technical Foundation:</strong> Building proper form and technique from the ground up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">→</span>
                  <span className="text-gray-300"><strong className="text-white">Progressive Difficulty:</strong> Structured advancement through 400+ tricks across all stances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">→</span>
                  <span className="text-gray-300"><strong className="text-white">Session Efficiency:</strong> Maximizing productive training time to recover 40% wasted effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">→</span>
                  <span className="text-white font-bold mr-3">→</span>
                  <span className="text-gray-300"><strong className="text-white">Mental Preparation:</strong> Developing competition mindset and resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">→</span>
                  <span className="text-gray-300"><strong className="text-white">Professional Documentation:</strong> Detailed progress tracking for athletes, sponsors, and federations</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Why Athletes Choose Willy</h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Athletes training with Willy benefit from <strong className="text-white">proven methodologies</strong> developed over three decades at the highest levels of competitive skateboarding. His experience coaching national team athletes and Olympians provides insights that generic coaching platforms simply cannot offer.
              </p>

              <div className="bg-brand-red/10 border border-brand-red/30 rounded-xl p-8 my-8">
                <p className="text-xl text-gray-200 italic">
                  "Willy's approach to coaching is unlike anything else in skateboarding. His ability to break down complex tricks into manageable progressions, combined with his Olympic-level expertise, has transformed how elite athletes train."
                </p>
                <p className="text-gray-400 mt-4">— The Skate Workshop Team</p>
              </div>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">The Skate Workshop Mission</h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                By founding The Skate Workshop with Joe's Tech Solutions LLC, Willy has made his elite coaching methodology accessible to skateboarders worldwide. The platform captures his 30 years of expertise in a digital format that provides:
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">✓</span>
                  <span className="text-gray-300">Systematic trick progression from basic to professional level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">✓</span>
                  <span className="text-gray-300">Live session tracking tools used with Commission Skateboard France</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">✓</span>
                  <span className="text-gray-300">Premium video analysis with frame-by-frame review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">✓</span>
                  <span className="text-gray-300">Professional reporting that justifies premium coaching investments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red font-bold mr-3">✓</span>
                  <span className="text-gray-300">Direct access to Willy's coaching network for Elite members</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-12 mb-6">Willy's Complete Ecosystem</h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Beyond The Skate Workshop app, Willy has built a comprehensive skateboarding ecosystem spanning multiple platforms and communities:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2 flex items-center">
                    <span className="text-brand-red mr-2">🛠️</span>
                    Willy's Workshop
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    <a href="https://www.instagram.com/willysworkshop/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light">@willysworkshop</a>
                  </p>
                  <p className="text-gray-400">
                    The main hub for skateboarding coaching, tips, and community. Over 15K followers learning from Willy's 30+ years of experience.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2 flex items-center">
                    <span className="text-brand-red mr-2">⚔️</span>
                    Skate Warz
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    <a href="https://www.instagram.com/skate_warz/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light">@skate_warz</a> • <a href="https://www.youtube.com/watch?v=EwTazTf_Jls" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light">YouTube</a>
                  </p>
                  <p className="text-gray-400">
                    Epic Game of SKATE battles featuring pro skaters. Season 3 "Vert Warz" showcases legends like Andy Macdonald with Willy as commentator.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2 flex items-center">
                    <span className="text-brand-red mr-2">🏙️</span>
                    Couch Curbs
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    <a href="https://www.instagram.com/couchcurbs/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light">@couchcurbs</a>
                  </p>
                  <p className="text-gray-400">
                    DIY skateboarding culture, obstacle building, and street spot innovation. Bringing the skatepark to your neighborhood.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2 flex items-center">
                    <span className="text-brand-red mr-2">🍽️</span>
                    Kain Tayo Day
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    <a href="https://www.instagram.com/kaintayoday/" target="_blank" rel="noopener" className="text-brand-red hover:text-brand-red-light">@kaintayoday</a>
                  </p>
                  <p className="text-gray-400">
                    Filipino heritage and community connection. "Kain Tayo" (Let's Eat) celebrates culture, lifestyle, and bringing people together.
                  </p>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed mt-6">
                This multi-platform approach reflects Willy's belief that skateboarding is more than just tricks—it's a lifestyle, a community, and a way of bringing people together across generations and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-900/30">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-12">Three Decades of Excellence</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-red">30+</span>
                  <p className="text-sm text-gray-400">Years</p>
                </div>
                <div className="flex-1 border-l-2 border-brand-red pl-6 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Elite Coaching Experience</h3>
                  <p className="text-gray-400">Over three decades developing skateboarding talent from beginners to Olympic athletes</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-red">Present</span>
                  <p className="text-sm text-gray-400">2020s</p>
                </div>
                <div className="flex-1 border-l-2 border-brand-red pl-6 pb-8">
                  <h3 className="text-xl font-bold text-white mb-2">Commission Skateboard France</h3>
                  <p className="text-gray-400">Coaching with Commission Skateboard France, supporting French skateboarding development including Olympic preparation</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-red">2025</span>
                  <p className="text-sm text-gray-400">Launch</p>
                </div>
                <div className="flex-1 border-l-2 border-brand-red pl-6">
                  <h3 className="text-xl font-bold text-white mb-2">The Skate Workshop Founded</h3>
                  <p className="text-gray-400">Partnered with Joe's Tech Solutions LLC to bring Olympic-level coaching to skateboarders worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">Train with an Olympic Legend</h2>
            <p className="text-xl text-gray-400 mb-8">
              Download The Skate Workshop and experience the coaching methodology that has developed Olympians, X-Games medalists, and professional skaters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/download" className="btn-primary">
                Download App Now
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
