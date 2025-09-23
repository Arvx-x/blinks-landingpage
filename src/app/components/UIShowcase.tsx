"use client";

export default function UIShowcase() {
  return (
    <section id="ui-showcase" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24 bg-black cv-auto">
      {/* Mac-like window frame */}
      <div className="relative w-full max-w-6xl mx-auto rounded-3xl border border-[#eeece6] bg-neutral-950/60 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.55)] overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#eeece6] bg-[#eeece6]">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <div className="mx-auto text-sm text-white/70 font-medium">Comet</div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10 items-center">
          {/* Center-stage circular video placeholder */}
          <div className="mx-auto lg:mx-0 relative rounded-[4px] overflow-hidden w-full lg:w-[44vw] lg:max-w-[440px] h-[44vw] max-h-[440px] lg:h-auto lg:aspect-square bg-gradient-to-br from-orange-500 via-amber-600 to-purple-700">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="https://framerusercontent.com/assets/CtSYQwWgD3v3HDe3HMRPnHbvGOk.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Right-side typographic stack */}
          <div className="text-center lg:text-left select-none">
            <div className="text-5xl sm:text-6xl md:text-7xl font-medium text-white/40 blur-[1.5px] mb-4">News</div>
            <div className="text-6xl sm:text-7xl md:text-8xl font-medium text-white mb-4">Clulture</div>
            <div className="text-6xl sm:text-7xl md:text-8xl font-medium text-white/80">Debates</div>
          </div>
        </div>
      </div>
    </section>
  );
}


