"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), { ssr: false });
const UIPreviewSection = dynamic(() => import('./UIPreviewSection'), { ssr: false });

type NewsletterPageProps = Record<string, never>

const NewsletterPage: React.FC<NewsletterPageProps> = () => {
  const [email, setEmail] = useState('');
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  const handleScrollToUIPreview = () => {
    const element = document.getElementById('ui-preview');
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const targetY = window.scrollY + rect.top;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Space background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black via-gray-900 to-slate-900 will-change-transform"></div>
      
      {/* Enhanced deep space gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-radial from-transparent via-gray-900/70 to-black will-change-transform"></div>
      {/* Animated background will be mounted within the hero section for proper layering */}

      {/* Section 1: Hero / Signup */}
      <section id="waitlist" className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-24 sm:pb-32">
        {/* Fluid blobs background, scoped to hero */}
        <AnimatedBackground className="absolute inset-0 z-[1] pointer-events-none" />
        {/* CTA above headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 relative z-10"
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
          className="mb-4 relative z-10"
        >
          <h1 className="headline-massive text-gray-100 text-center">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Join <span className="animated-gradient-text bg-clip-text text-transparent">Blinks</span> Now
            </span>
          </h1>
        </motion.div>

        {/* Subtitle - smaller text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-6 text-center relative z-10"
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
          className="flex items-center gap-0 w-full max-w-sm relative z-10"
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
        {/* Planet backdrop inside Section 1 only */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 overflow-hidden z-[2]">
          <svg
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            className="w-full h-full"
            aria-hidden
          >
            <defs>
              <filter id="outerAtmosphereGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="24" result="blur" />
              </filter>
              <filter id="horizonLineGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
              </filter>
            </defs>
            {/* Opaque fill inside planet boundary below the stroke */}
            <path
              d="M0,300 Q360,150 720,140 Q1080,150 1440,300 L1440,300 L0,300 Z"
              fill="#000000"
            />
            <path
              d="M-50,300 Q360,150 720,140 Q1080,150 1490,300"
              stroke="rgba(120, 180, 255, 0.25)"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#outerAtmosphereGlow)"
            />
            <path
              d="M-50,300 Q360,150 720,140 Q1080,150 1490,300"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#horizonLineGlow)"
            />
          </svg>
        </div>
        {/* Bottom side vignettes to fade planet light at edges */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-20 sm:h-28 w-1/3 z-10"
          style={{
            background:
              'radial-gradient(circle at 0% 100%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.6) 60%, transparent 75%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-20 sm:h-28 w-1/3 z-10"
          style={{
            background:
              'radial-gradient(circle at 100% 100%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.6) 60%, transparent 75%)',
          }}
        />
        <style jsx>{`
          .animated-gradient-text {
            background: linear-gradient(90deg, #34d399, #3b82f6, #34d399);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            animation: blinkGradient 6s ease-in-out infinite;
          }
          @keyframes blinkGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>

      {/* Section 2: What is Blinks (cosmos-themed intro) */}
      <section id="what-is-blinks" className="relative z-10 w-full bg-black text-white">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90" />
        </div>

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            New • Introduction
          </span>
          <h2 className="headline-massive text-gray-100 mt-6">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              What is <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Blinks</span>?
            </span>
          </h2>
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

        {/* Feature cards */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Living News Clusters', desc: 'Stories expand into live clusters with AI summaries, timelines, and multi-source perspectives.' }, { title: 'AI Summaries & Context', desc: 'Snackable summaries with "Why it matters" and "What’s next." Ask AI follow-ups for deeper dives.' }, { title: 'Public Pulse', desc: 'See real-time reactions from X, Reddit, Instagram—memes, debates, and cultural moments tied to each story.' }].map((f) => (
              <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">A new way to follow the world</h3>
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
        </div>

        {/* Static subtle stars */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 100} cy={Math.random() * 100} r={Math.random() * 0.6 + 0.2} fill="white" />
            ))}
          </svg>
        </div>

        <style jsx>{`
          .animate-spin-slow { animation: spin 18s linear infinite; }
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
      </section>

      {/* Section 3: App UI Preview split and lazy loaded */}
      <UIPreviewSection />

      

      

      

      
    </div>
  );
};

export default NewsletterPage;
