"use client"

import Link from "next/link"

export default function WhatIsBlinks() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background; removed gradient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
      </div>

      {/* Hero */}
      <section className="relative z-10 w-full bg-black text-white">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-black" />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-6 text-center">
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            New • Introduction
          </span>
          <h1 className="headline-massive text-gray-100 mt-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              What is <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Blinks</span>?
            </span>
          </h1>
          <p className="subtitle-text text-gray-400 max-w-2xl mx-auto mt-4">
            Blinks is an AI-native, direct-to-consumer Culture app. It blends the speed of short-form news updates with the depth of living, evolving story clusters—built to be shared.
          </p>

          {/* Subtle animated ring */}
          <div className="relative mt-8 flex justify-center">
            <div className="w-28 h-28 rounded-full border border-emerald-400/30 animate-spin-slow" />
            <div className="pointer-events-none absolute inset-0 w-28 h-28 rounded-full border border-blue-400/20" />
          </div>

          <div className="mt-8">
            <Link href="/#waitlist" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="relative max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ title: 'Living News Clusters', desc: 'Stories expand into live clusters with AI summaries, timelines, and multi-source perspectives.' }, { title: 'AI Summaries & Context', desc: 'Snackable summaries with "Why it matters" and "What’s next." Ask AI follow-ups for deeper dives.' }, { title: 'Public Pulse', desc: 'See real-time reactions from X, Reddit, Instagram—memes, debates, and cultural moments tied to each story.' }].map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors duration-200">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual placeholder */}
      <section className="relative max-w-6xl mx-auto px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">A new way to follow the world</h2>
            <p className="text-gray-400 leading-relaxed">
              Follow evolving stories with living clusters, AI context, and community pulse. Then lean back with Blinks Digest — a weekly magazine of top clusters and debates.
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
              <div className="absolute inset-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Subtle stars layer (static) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          {Array.from({ length: 35 }).map((_, i) => (
            <circle key={i} cx={Math.random() * 100} cy={Math.random() * 100} r={Math.random() * 0.6 + 0.2} fill="white" />
          ))}
        </svg>
      </div>
    </main>
  )
}


