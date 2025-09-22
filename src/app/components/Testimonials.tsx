"use client";

import Image from "next/image";

const testimonials = [
  {
    quote: "Blinks turned passive scrolling into signal. I’m actually informed in minutes.",
    author: "Aisha N.",
    role: "Student & Creator",
    avatar: "/next.svg",
    colorFrom: "from-emerald-400/40",
    colorTo: "to-cyan-400/30",
  },
  {
    quote: "Debates are clean and high-signal. The best takes bubble up fast.",
    author: "Marco V.",
    role: "Journalism Fellow",
    avatar: "/vercel.svg",
    colorFrom: "from-violet-400/40",
    colorTo: "to-fuchsia-400/30",
  },
  {
    quote: "As a creator, paid issues + free blinks is the perfect mix.",
    author: "Riya K.",
    role: "Indie Writer",
    avatar: "/next.svg",
    colorFrom: "from-blue-400/40",
    colorTo: "to-emerald-400/30",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-10 w-full bg-black text-white py-24 cv-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            Voices • What people say
          </span>
          <h3 className="headline-massive text-gray-100 mt-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl">Trusted by curious minds</span>
          </h3>
          <p className="subtitle-text text-gray-400 mt-3 max-w-2xl mx-auto">From students to writers to news junkies, Blinks helps you track living stories without the overwhelm.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-neutral-950/70 backdrop-blur p-6 shadow-[0_0_48px_rgba(255,255,255,0.12)] overflow-hidden">
              <div className={`pointer-events-none absolute -inset-4 rounded-full blur-3xl bg-gradient-radial ${t.colorFrom} ${t.colorTo}`} />
              <div className="relative z-10">
                {/* Planet/cosmic header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/20">
                    <Image src={t.avatar} alt={t.author} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.author}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
                {/* Quote with orbit-like decoration */}
                <div className="relative p-4 rounded-xl border border-white/10 bg-black/40">
                  <svg className="absolute -top-3 -right-3 h-12 w-12 opacity-70" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="30" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="18" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                    <circle cx="76" cy="50" r="3" fill="white" fillOpacity="0.7" />
                  </svg>
                  <p className="text-gray-200 text-sm leading-relaxed">“{t.quote}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


