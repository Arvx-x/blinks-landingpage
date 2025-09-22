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
			<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_260px] gap-10 items-start">
								<div>
									<div className="rounded-2xl border border-[#eeece6] bg-black/40 p-5">
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
					{/* Feature details grid */}
					<div className="mt-6 rounded-xl border border-[#eeece6] bg-black/40 p-4">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{/* Snackable → Cluster */}
							<div className="rounded-lg bg-black/30 p-4">
								<div className="flex items-start gap-3">
									<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500/70 to-blue-500/70" />
									<div>
										<div className="text-white text-sm font-medium">Snackable cards → Living clusters</div>
										<p className="text-gray-400 text-xs mt-1">Tap a card to expand into a living cluster.</p>
									</div>
								</div>
							</div>

							{/* Ask AI */}
							<div className="rounded-lg bg-black/30 p-4">
								<div className="flex items-start gap-3">
										<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500/70 to-blue-500/70" />
									<div>
										<div className="text-white text-sm font-medium">Ask AI</div>
										<p className="text-gray-400 text-xs mt-1">Ask follow-ups grounded in receipts.</p>
									</div>
								</div>
							</div>

							{/* Timeline */}
							<div className="rounded-lg bg-black/30 p-4">
								<div className="flex items-start gap-3">
										<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500/70 to-blue-500/70" />
									<div>
										<div className="text-white text-sm font-medium">Timeline of news</div>
										<p className="text-gray-400 text-xs mt-1">Auto-updating timeline of key facts.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
						<div className="mt-5 flex gap-3">
							<button className="px-4 py-2.5 rounded-lg bg-gray-200 text-black text-xs">View a sample</button>
							<button className="px-4 py-2.5 rounded-lg border border-white/15 text-gray-200 text-xs">Follow updates</button>
						</div>
						</div>
					</div>
					<div className="relative">
						<div className="rounded-2xl border border-[#eeece6] bg-black/50 backdrop-blur p-4 shadow-[0_0_48px_rgba(255,255,255,0.12)] w-full max-w-[200px] sm:max-w-[220px] md:max-w-[260px] mx-auto md:ml-auto md:mr-0 self-start">
							<Image src="/img1.jpeg" alt="News app snapshot" width={800} height={800} className="w-full h-auto rounded-xl" />
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
			<div className="mt-8 relative rounded-2xl border border-[#eeece6] bg-neutral-950/70 backdrop-blur p-6 shadow-[0_0_48px_rgba(255,255,255,0.12)] overflow-hidden">
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
				<div className="rounded-xl border border-[#eeece6] bg-black/40 p-4 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
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
			{[
				{ title: "Threaded discussions", desc: "Replies nest into clean threads so context stays intact and noise collapses." },
				{ title: "For/Against spaces", desc: "Split rooms for opposing takes. Compare arguments side‑by‑side with receipts." },
				{ title: "Polling & consensus", desc: "Run quick polls, highlight expert votes, and track how sentiment shifts over time." }
			].map((f, i) => (
				<div key={i} className="rounded-2xl border border-[#eeece6] bg-black/50 backdrop-blur p-5 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
					<h4 className="text-white text-base font-medium">{f.title}</h4>
					<p className="text-gray-400 text-sm mt-2">{f.desc}</p>
					<div className="mt-4 flex gap-2">
						<button className="px-3 py-1.5 rounded-lg bg-gray-200 text-black text-xs">Learn more</button>
						<button className="px-3 py-1.5 rounded-lg border border-white/15 text-gray-200 text-xs">See how it works</button>
					</div>
				</div>
			))}
		  </div>
        </div>
      </section>
    </div>
  );
}


