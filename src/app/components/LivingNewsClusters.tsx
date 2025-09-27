"use client";

import Link from "next/link";

export default function LivingNewsClusters() {
  return (
    <div id="living-news-clusters" className="relative overflow-hidden">


      {/* Section: Debates */}
      <section id="debates" className="relative z-10 w-full bg-black text-white py-20 cv-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <h3 className="headline-massive text-3xl sm:text-4xl md:text-5xl">Debates <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">spaces</span></h3>
            <Link href="#" className="text-sm underline text-gray-300">View guidelines</Link>
          </div>
          <p className="text-gray-400 mt-2 mb-0">Focused rooms for structured debate — split views, source-tagged receipts, quick polls, and reputation that rewards clarity.</p>
            <div className="mt-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
					<div className="md:col-span-2">
                <p className="subtitle-text text-gray-400 mt-2">Spaces are focused rooms for high-signal discussion. Short takes, source-tagged receipts, and reputation that rewards clarity over volume.</p>
                <p className="subtitle-text text-gray-400 mt-3">Host moderated sessions, set topics, invite experts, and archive top arguments.</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2.5 rounded-lg bg-[#105ce9] hover:bg-[#0e4fd0] text-white text-xs">Create a space</button>
                  <button className="px-4 py-2.5 rounded-lg border border-[#105ce9] text-gray-200 text-xs">Explore spaces</button>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-xl border border-black/40 bg-black/40 p-4 shadow-[0_0_28px_rgba(16,92,233,0.16)]">
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
            <div key={i} className="rounded-2xl border border-black/40 bg-black/50 backdrop-blur p-5 shadow-[0_0_28px_rgba(16,92,233,0.16)]">
					<h4 className="text-white text-base font-medium">{f.title}</h4>
					<p className="text-gray-400 text-sm mt-2">{f.desc}</p>
                    <div className="mt-4 flex gap-2">
                        <button className="px-3 py-1.5 rounded-lg bg-[#105ce9] hover:bg-[#0e4fd0] text-white text-xs">Learn more</button>
                        <button className="px-3 py-1.5 rounded-lg border border-[#105ce9] text-gray-200 text-xs">See how it works</button>
                    </div>
				</div>
			))}
		  </div>
        </div>
      </section>
    </div>
  );
}


