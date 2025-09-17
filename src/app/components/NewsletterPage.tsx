"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type NewsletterPageProps = Record<string, never>

const NewsletterPage: React.FC<NewsletterPageProps> = () => {
  const [email, setEmail] = useState('');

  const handleScrollToUIPreview = () => {
    const element = document.getElementById('ui-preview');
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const targetY = window.scrollY + rect.top;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  // Generate fluid, pseudo-random keyframes that drift organically
  const generateFluidKeyframes = (
    steps: number,
    maxX: number,
    maxY: number
  ): { x: number[]; y: number[] } => {
    const x: number[] = [];
    const y: number[] = [];
    let cx = 0;
    let cy = 0;
    for (let i = 0; i < steps; i++) {
      // Small random deltas, then lightly ease toward bounds for fluid motion
      cx += (Math.random() - 0.5) * (maxX * 0.25);
      cy += (Math.random() - 0.5) * (maxY * 0.25);
      // Clamp softly within [-max, max]
      cx = Math.max(-maxX, Math.min(maxX, cx));
      cy = Math.max(-maxY, Math.min(maxY, cy));
      // Add slight smoothing by blending with previous point
      const px = i > 0 ? x[i - 1] : 0;
      const py = i > 0 ? y[i - 1] : 0;
      const smoothedX = px + (cx - px) * 0.6;
      const smoothedY = py + (cy - py) * 0.6;
      x.push(smoothedX);
      y.push(smoothedY);
    }
    // Ensure it loops back near the start for seamless repeat
    x.push(x[0]);
    y.push(y[0]);
    return { x, y };
  };

  const fluidMain = useMemo(() => generateFluidKeyframes(14, 85, 60), []);
  const fluidBlue = useMemo(() => generateFluidKeyframes(16, 65, 45), []);

  // Generate stars with more noticeable smooth movement across the page
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    delay: Math.random() * 4,
    moveX: (Math.random() - 0.5) * 100, // Stronger horizontal drift
    moveY: (Math.random() - 0.5) * 80, // Stronger vertical drift
    duration: 8 + Math.random() * 10, // Slightly faster for more visible motion
  }));

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Space background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black via-gray-900 to-slate-900"></div>
      
      {/* Enhanced deep space gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-radial from-transparent via-gray-900/70 to-black"></div>

      {/* Strong dark vignette all around the page */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-l from-black/70 via-transparent to-black/70"></div>
      
      {/* Corner dark gradients for stronger vignette effect */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 -z-10 pointer-events-none bg-gradient-to-br from-black via-black/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 -z-10 pointer-events-none bg-gradient-to-bl from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 -z-10 pointer-events-none bg-gradient-to-tr from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 -z-10 pointer-events-none bg-gradient-to-tl from-black via-black/50 to-transparent"></div>

      

      {/* Star field background with smooth movement */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              // Twinkling effect
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 0.8, 1],
              // Stronger drift movement
              x: [0, star.moveX, -star.moveX, 0],
              y: [0, star.moveY, -star.moveY, 0],
            }}
            transition={{
              opacity: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              scale: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              x: {
                duration: star.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              },
              y: {
                duration: star.duration * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay * 0.5,
              },
            }}
          />
        ))}
      </div>

      {/* Section 1: Hero / Signup */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pb-24 sm:pb-32">
        {/* Animated gradient orbs behind Section 1 only */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ filter: 'hue-rotate(0deg)' }}
          animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
          transition={{ filter: { duration: 60, repeat: Infinity, ease: 'linear' } }}
        >
          <motion.div
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 60%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: fluidMain.x,
              y: fluidMain.y,
              scale: [1, 1.15, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 36,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
              filter: 'blur(65px)',
            }}
            animate={{
              x: [-5, 70, 10, -75, -20, 65, -5],
              y: [-45, 5, 55, -5, -35, 25, -45],
              scale: [0.8, 1.1, 0.9, 0.8],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 35%, transparent 65%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [0, 60, -25, -65, 15, 55, 0],
              y: [-40, -15, 30, 15, -25, 45, -40],
              scale: [1, 0.7, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(16, 185, 129, 0.3) 30%, transparent 60%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [5, 50, -10, -45, 20, 40, 5],
              y: [-35, 0, 35, -5, -25, 20, -35],
              scale: [0.9, 1.4, 0.6, 0.9],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          />

          {/* Additional central gradient orbs for more atmospheric effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-12"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 75%)',
              filter: 'blur(75px)',
            }}
            animate={{
              x: [0, 65, -15, -60, 10, 55, 0],
              y: [-65, -5, 50, 5, -40, 35, -65],
              scale: [1.2, 0.8, 1.5, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-18"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 80%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: [0, 75, -20, -70, 15, 70, 0],
              y: [-55, 0, 55, -10, -35, 25, -55],
              scale: [0.7, 1.3, 0.9, 0.7],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          />

          {/* Additional hues: yellow/amber */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, rgba(250, 204, 21, 0.18) 40%, transparent 75%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: fluidMain.x.map((v) => v * 0.7 + 5),
              y: fluidMain.y.map((v) => v * 0.6 - 5),
              scale: [1.05, 0.95, 1.15, 1.0, 1.05],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Additional hues: warm orange */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full opacity-16"
            style={{
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.38) 0%, rgba(249, 115, 22, 0.16) 45%, transparent 75%)',
              filter: 'blur(65px)',
            }}
            animate={{
              x: [0, 50, -10, -50, 15, 35, 0],
              y: [-50, -10, 35, 10, -25, 30, -50],
              scale: [0.9, 1.25, 0.8, 0.9],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 7,
            }}
          />

          {/* Additional hues: pink/magenta */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full opacity-18"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.42) 0%, rgba(236, 72, 153, 0.18) 40%, transparent 70%)',
              filter: 'blur(72px)',
            }}
            animate={{
              x: [0, 60, -15, -60, 20, 50, 0],
              y: [-50, -5, 45, 0, -35, 25, -50],
              scale: [1.1, 0.85, 1.3, 1.1],
            }}
            transition={{
              duration: 27,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 9,
            }}
          />

          {/* Additional hues: deep violet */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-14"
            style={{
              background: 'radial-gradient(circle, rgba(109, 40, 217, 0.40) 0%, rgba(109, 40, 217, 0.16) 35%, transparent 70%)',
              filter: 'blur(66px)',
            }}
            animate={{
              x: [0, 55, -10, -55, 15, 40, 0],
              y: [-35, -5, 30, 5, -25, 20, -35],
              scale: [0.85, 1.2, 0.9, 0.85],
            }}
            transition={{
              duration: 29,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 11,
            }}
          />

          {/* Additional bluish orb for extra prominence */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-24 mix-blend-screen"
            style={{
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.5) 0%, rgba(37, 99, 235, 0.2) 40%, transparent 75%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: fluidBlue.x,
              y: fluidBlue.y,
              scale: [1.0, 1.12, 0.96, 1.04, 1.0],
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
        </motion.div>
        {/* CTA above headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <button
            onClick={handleScrollToUIPreview}
            className="inline-flex items-center gap-2 bg-gray-800/60 hover:bg-gray-800/80 backdrop-blur-sm border border-gray-600/40 rounded-full px-4 py-2 text-gray-200 badge-text text-sm transition-colors"
          >
            Checkout the UI
          </button>
        </motion.div>

        {/* Main headline - Typography updated to match user spec */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mb-4"
        >
          <h1 className="headline-massive text-gray-100 text-center">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Join Blinks Now
            </span>
          </h1>
        </motion.div>

        {/* Subtitle - smaller text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-6 text-center"
        >
          <p className="subtitle-text text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Discover stories, join the pulse of debates,<br />
            and follow creators through newsletters<br />
            and magazines.
          </p>
        </motion.div>

        {/* Email signup form - smaller horizontal layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-0 w-full max-w-sm"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-1 bg-gray-900/70 backdrop-blur-sm border border-gray-600/60 rounded-l-lg px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500/80 transition-all duration-300 text-xs font-normal"
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
          />
          <button 
            className="bg-gray-200 hover:bg-white text-black font-medium px-4 py-2.5 rounded-r-lg transition-all duration-300 text-xs whitespace-nowrap"
            style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Get Notified
          </button>
        </motion.div>
      </section>
      {/* Planet for Section 1 only */}
      <section aria-hidden className="relative">
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 300"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
            style={{ height: '300px' }}
          >
            <defs>
              <filter id="outerAtmosphereGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="20" result="blur"/>
              </filter>
              <filter id="horizonLineGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="8" result="blur"/>
              </filter>
            </defs>
            <path
              d="M-50,300 Q360,150 720,140 Q1080,150 1490,300"
              stroke="rgba(200, 220, 255, 0.3)"
              strokeWidth="40"
              fill="none"
              filter="url(#outerAtmosphereGlow)"
            />
            <path
              d="M-50,300 Q360,150 720,140 Q1080,150 1490,300"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="15"
              fill="none"
              filter="url(#horizonLineGlow)"
            />
            <path
              d="M0,300 Q360,150 720,140 Q1080,150 1440,300 L1440,300 L0,300 Z"
              fill="#000000"
            />
          </svg>
        </div>
      </section>

      {/* Section 2: App UI Preview (same ambience and background) */}
      <section id="ui-preview" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Top vignette to smooth transition into section 2 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 sm:h-56 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Sneak peek at the app
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Two quick mockups to visualize the UI. Replace these with real screenshots later.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] aspect-[9/19.5]">
              <div className="absolute inset-x-[6%] inset-y-[10%] rounded-[1.15rem] overflow-hidden z-0 bg-black">
                <Image src="/img1.jpeg" alt="App UI 1" fill className="object-contain" priority fetchPriority="high" loading="eager" />
              </div>
              <Image src="/iphone-img.png" alt="Phone frame" fill className="object-contain z-10 pointer-events-none scale-[1.99] translate-x-[-5.8px]" priority fetchPriority="high" loading="eager" />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-base font-medium">Creator Feed</h3>
              <p className="text-gray-400 text-sm mt-1">
                Browse trending posts and follow your favorite creators in a clean layout.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] aspect-[9/19.5]">
              <div className="absolute inset-x-[6%] inset-y-[10%] rounded-[1.15rem] overflow-hidden z-0 bg-black">
                <Image src="/img2.jpeg" alt="App UI 2" fill className="object-contain" priority fetchPriority="high" loading="eager" />
              </div>
              <Image src="/iphone-img.png" alt="Phone frame" fill className="object-contain z-10 pointer-events-none scale-[1.99] translate-x-[-5.8px]" priority fetchPriority="high" loading="eager" />
            </div>
            <div className="mt-4">
              <h3 className="text-white text-base font-medium">Topics & Magazines</h3>
              <p className="text-gray-400 text-sm mt-1">
                Discover curated newsletters and magazines tailored to your interests.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      

      

      {/* Enhanced central radial vignette for dramatic effect */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-black/20 to-black/60 pointer-events-none"></div>
      
      {/* Additional dark overlay for stronger vignette */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
};

export default NewsletterPage;
