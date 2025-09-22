"use client";

import Image from "next/image";

export default function CreatorsSection() {
  return (
    <section id="creators" className="relative z-10 w-full bg-black text-white py-24 cv-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            Creators • Newsletter + Articles
          </span>
          <h3 className="headline-massive text-gray-100 mt-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              Blinks for <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Creators</span>
            </span>
          </h3>
          <p className="subtitle-text text-gray-400 mt-4">
            Publish short-form blinks and long-form articles. Earn from memberships, tips, and paid issues—while readers subscribe for signal.
          </p>
          <ul className="mt-6 space-y-2 text-gray-300 text-sm">
            <li>• Paid and free tiers with instant previews</li>
            <li>• Smart recommendations to grow your audience</li>
            <li>• Exportable email list. Your audience, your rules</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2.5 rounded-lg bg-gray-200 text-black text-xs">Start publishing</button>
            <button className="px-4 py-2.5 rounded-lg border border-white/15 text-gray-200 text-xs">Subscribe to a demo</button>
          </div>
        </div>
        <div className="relative">
		<div className="rounded-2xl border border-[#eeece6] bg-black/50 backdrop-blur p-4 shadow-[0_0_48px_rgba(255,255,255,0.12)]">
            <Image src="/iphone-img.png" alt="Creator earnings and subscriptions" width={800} height={800} className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}


