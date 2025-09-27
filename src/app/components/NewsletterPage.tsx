"use client";

import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import UIShowcase from './UIShowcase';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import GooeyNav from './GooeyNav';
import Image from 'next/image';
 

import LivingNewsClusters from './LivingNewsClusters';
import CreatorsSection from './CreatorsSection';
import Testimonials from './Testimonials';
import Footer from './Footer';
import LightRays from './LightRays';

type NewsletterPageProps = Record<string, never>

const NewsletterPage: React.FC<NewsletterPageProps> = () => {
  const [email, setEmail] = useState('');
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-[1000]">
        <div className="mx-auto px-4 py-2 flex justify-center">
          <div className="inline-flex items-center justify-center rounded-2xl bg-black/70 backdrop-blur border border-white/10 shadow-lg px-3 py-2">
            <GooeyNav
              items={[
                { label: 'Home', href: '#waitlist' },
                { label: 'About', href: '#what-is-blinks' },
                { label: 'Contact', href: '#' },
              ]}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </div>
      </header>
      {/* Space background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black via-gray-900 to-slate-900 will-change-transform"></div>
      
      {/* Enhanced deep space gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-radial from-transparent via-gray-900/70 to-black will-change-transform"></div>
      {/* Animated background will be mounted within the hero section for proper layering */}

      {/* Section 1: Hero / Signup */}
      <section id="waitlist" className="relative min-h-[calc(100vh-88px)] flex flex-col items-center justify-center px-6 pb-24 sm:pb-32 pt-20 sm:pt-28 md:pt-32">
        {/* Fluid blobs background, scoped to hero */}
        <AnimatedBackground className="absolute inset-0 z-[1] pointer-events-none" />
        {/* Solid black backdrop behind text and rays; stars (z-[1]) render above this */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-black" />
        {/* Light rays emerging from planet edge */}
        <div className="absolute inset-0 z-[2] pointer-events-none mix-blend-screen">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        {/* Decorative logo in corner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-6 left-6 z-10 pointer-events-none"
          aria-hidden
        >
          <Image src="/blinks-logo.svg" alt="" width={64} height={64} className="opacity-90" />
        </motion.div>

        {/* CTA above headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 relative z-10"
        >
          <button
            onClick={() => {
              const element = document.getElementById('ui-preview')
              if (!element) return
              const rect = element.getBoundingClientRect()
              const targetY = window.scrollY + rect.top
              window.scrollTo({ top: targetY, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm badge-text text-white/90 bg-gradient-to-b from-[#105ce9]/30 via-[#105ce9]/15 to-[#105ce9]/10 hover:from-[#105ce9]/40 hover:via-[#105ce9]/20 hover:to-[#105ce9]/15 backdrop-blur-md border border-white/20 ring-1 ring-inset ring-white/10 shadow-[0_8px_30px_rgba(16,92,233,0.25)] transition-colors"
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
              Join <span className="animated-gradient-text bg-clip-text text-transparent">blinks</span> Now
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

        {/* Playful image placeholders row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="relative z-10 mb-6 grid grid-cols-3 gap-3 w-full max-w-md"
        >
          <div className="rounded-xl border border-black/10 bg-white overflow-hidden rotate-[-2deg] shadow-sm">
            <Image src="/img1.jpeg" alt="Placeholder 1" width={160} height={120} className="w-full h-[90px] object-cover" />
          </div>
          <div className="rounded-xl border border-black/10 bg-white overflow-hidden rotate-[3deg] shadow-sm">
            <Image src="/blinks-logo.svg" alt="Blinks logo" width={160} height={120} className="w-full h-[90px] object-cover" />
          </div>
          <div className="rounded-xl border border-black/10 bg-white overflow-hidden rotate-[1deg] shadow-sm">
            <Image src="/img2.jpeg" alt="Placeholder 3" width={160} height={120} className="w-full h-[90px] object-cover" />
          </div>
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
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 overflow-hidden z-[2]" style={{ bottom: '-5%' }}>
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
              stroke="none"
              fill="none"
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
      <section id="what-is-blinks" className="relative z-10 w-full bg-black text-white cv-auto">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-black" />

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-4 text-center">
          <span className="inline-flex items-center gap-2 bg-gray-800/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300 text-xs badge-text">
            New • Introduction
          </span>
          <h2 className="headline-massive text-gray-100 mt-10">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              What is <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">blinks</span>?
            </span>
          </h2>
          <p className="subtitle-text text-gray-400 max-w-2xl mx-auto mt-5">
            Blinks is an AI-native, direct-to-consumer Culture app. It blends the speed of short-form news updates with the depth of living, evolving story clusters—built to be shared.
          </p>

        </div>
      </section>

      {/* Section 3: App UI Preview split and lazy loaded */}
      <UIShowcase />
      <LivingNewsClusters />
      <CreatorsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default NewsletterPage;
