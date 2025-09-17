import Link from "next/link"
import Image from "next/image"

export default function WhatIsBlinksPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients to match cosmos theme, lightweight only */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute -top-32 -left-24 w-[42rem] h-[42rem] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, rgba(147,51,234,0.55) 0%, rgba(59,130,246,0.25) 45%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -right-24 w-[38rem] h-[38rem] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, rgba(34,197,94,0.45) 0%, rgba(16,185,129,0.2) 40%, transparent 70%)" }} />
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            New • Introduction
          </span>
          <h1 className="headline-massive text-gray-100">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              What is <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Blinks</span>?
            </span>
          </h1>
          <p className="subtitle-text text-gray-400 max-w-2xl">
            Blinks are interactive blockchain links. They turn any surface into a place where users can mint, tip, subscribe, or trade—in a blink.
          </p>

          {/* Subtle animated ring */}
          <div className="relative mt-6">
            <div className="w-28 h-28 rounded-full border border-purple-400/30 animate-spin" style={{ animationDuration: "18s" }} />
            <div className="pointer-events-none absolute inset-0 rounded-full border border-blue-400/20" />
          </div>

          <div className="mt-6">
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Instant Actions",
              desc: "Trigger on-chain actions directly from a link—no wallet popups hidden in tabs.",
            },
            {
              title: "Frictionless UX",
              desc: "Embeddable anywhere: socials, emails, blogs. Bring crypto UX to your users.",
            },
            {
              title: "Composable",
              desc: "Stack payments, identity, and NFTs into a single, sharable experience.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/40 transition-colors duration-200">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual placeholder */}
      <section className="relative max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">A new surface for on-chain experiences</h2>
            <p className="text-gray-400 leading-relaxed">
              Share a Blink and let users complete actions instantly. From tipping creators to minting collectibles—
              Blinks streamline everything into one beautiful, portable interaction.
            </p>
            <div className="mt-6">
              <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Get early access
              </Link>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[16/10] rounded-2xl border border-gray-800 bg-gray-900/60 overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-gray-800/60" />
                ))}
              </div>
              <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle stars layer (static) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {Array.from({ length: 70 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 100} cy={Math.random() * 100} r={Math.random() * 0.6 + 0.2} fill="white" />
          ))}
        </svg>
      </div>

      
    </main>
  )
}


