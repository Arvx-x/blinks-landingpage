"use client";

import Image from "next/image";
import Link from "next/link";

export default function LivingNewsClusters() {
  return (
    <div id="living-news-clusters" className="relative overflow-hidden">

      {/* Section: Clusters explainer (feature card with image) */}
      <section id="clusters" className="relative z-10 w-full bg-black text-white py-20 cv-auto">
			<div className="max-w-6xl mx-auto px-6">
				<h3 className="headline-massive text-gray-100 text-3xl sm:text-4xl md:text-5xl mb-6">News Clusters</h3>
			<div className="relative rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0_0_48px_rgba(255,255,255,0.12)] overflow-hidden">
				<div className="pointer-events-none absolute -inset-12 rounded-[36px] blur-3xl bg-gradient-radial from-cyan-400/10 via-emerald-400/10 to-transparent" />
				<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
						<h3 className="headline-massive text-2xl sm:text-3xl md:text-4xl">How <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">clusters</span> live</h3>
						<p className="subtitle-text text-gray-400 mt-3">Clusters evolve as new facts arrive. They stitch timelines, sources, and perspectives so you can follow the living story.</p>
						<ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                  <li>• Timelines auto-update as new facts land</li>
                  <li>• Source-weighted summaries keep receipts</li>
                  <li>• Public pulse to see real-time reactions</li>
                  <li>• Share as cards, embeds, or notifications</li>
                </ul>
						{/* Feature chips and CTAs */}
						<div className="mt-5 flex flex-wrap gap-2">
							<span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Receipts inside</span>
							<span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Shareable cards</span>
							<span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Topic splits</span>
						</div>
						<div className="mt-5 flex gap-3">
							<button className="px-4 py-2.5 rounded-lg bg-gray-200 text-black text-xs">View a sample</button>
							<button className="px-4 py-2.5 rounded-lg border border-white/15 text-gray-200 text-xs">Follow updates</button>
						</div>
              </div>
					<div className="md:col-span-1">
						<div className="relative rounded-xl border border-white/10 bg-black/40 p-4 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
							{/* Cosmic orbit element behind image */}
							<svg viewBox="0 0 144 144" className="absolute -top-4 -left-6 w-40 h-40 opacity-60" aria-hidden>
								<defs>
									<radialGradient id="cg" cx="50%" cy="50%" r="50%">
										<stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
										<stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
									</radialGradient>
								</defs>
								<ellipse cx="72" cy="72" rx="54" ry="22" fill="none" stroke="#fff" strokeOpacity="0.2" />
								<circle cx="98" cy="64" r="4" fill="#fff" fillOpacity="0.8" />
								<circle cx="72" cy="72" r="40" fill="url(#cg)" />
							</svg>
							<Image src="/window.svg" alt="Clusters feature placeholder" width={800} height={800} className="relative z-10 w-full h-40 md:h-full object-cover rounded-lg" />
						</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Debates */}
      <section id="debates" className="relative z-10 w-full bg-black text-white py-20 cv-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="headline-massive text-3xl sm:text-4xl md:text-5xl">Debates</h3>
            <Link href="#" className="text-sm underline text-gray-300">View guidelines</Link>
          </div>
          <div className="mt-8 relative rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur p-6 shadow-[0_0_48px_rgba(255,255,255,0.12)] overflow-hidden">
            <div className="pointer-events-none absolute -inset-10 rounded-[32px] blur-3xl bg-gradient-radial from-cyan-400/10 via-emerald-400/10 to-transparent" />
				<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
					<div className="md:col-span-2">
						<h4 className="text-2xl sm:text-3xl font-medium">Debate <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Spaces</span></h4>
                <p className="subtitle-text text-gray-400 mt-2">Spaces are focused rooms for high-signal discussion. Short takes, source-tagged receipts, and reputation that rewards clarity over volume.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Real-time threads</span>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Source-tagged</span>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Reputation</span>
                  <span className="px-3 py-1.5 rounded-full text-xs bg-white/10 border border-white/15">Moderation</span>
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="px-4 py-2.5 rounded-lg bg-gray-200 text-black text-xs">Create a space</button>
                  <button className="px-4 py-2.5 rounded-lg border border-white/15 text-gray-200 text-xs">Explore spaces</button>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
                  <svg viewBox="0 0 144 144" className="w-full h-40 md:h-48" aria-hidden>
                    <defs>
                      <radialGradient id="g" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="72" cy="72" r="44" fill="url(#g)" />
                    <circle cx="104" cy="52" r="5" fill="#fff" fillOpacity="0.9" />
                    <circle cx="44" cy="96" r="3" fill="#fff" fillOpacity="0.6" />
                    <path d="M28 72c28-26 60-26 88 0" stroke="#fff" strokeOpacity="0.2" strokeWidth="2" fill="none" />
                    <path d="M40 72c20-18 44-18 64 0" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" fill="none" />
                    <path d="M52 72c12-10 28-10 40 0" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Is AI regulation slowing innovation?", "Do news cycles distort reality?", "Should creators own their feeds?"].map((q, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur p-5 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
                <h4 className="text-white text-base font-medium">{q}</h4>
                <p className="text-gray-400 text-sm mt-2">Add a 200-character take with sources. Earn reputation for signal, not volume.</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-gray-200 text-black text-xs">Post a take</button>
                  <button className="px-3 py-1.5 rounded-lg border border-white/15 text-gray-200 text-xs">See sources</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


