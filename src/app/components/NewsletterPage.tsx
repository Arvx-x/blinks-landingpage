"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface NewsletterPageProps {}

const NewsletterPage: React.FC<NewsletterPageProps> = () => {
  const [email, setEmail] = useState('');

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Space background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-slate-900"></div>
      
      {/* Enhanced deep space gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/70 to-black"></div>

      {/* Strong dark vignette all around the page */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-transparent to-black/70"></div>
      
      {/* Corner dark gradients for stronger vignette effect */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-black via-black/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-black via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black via-black/50 to-transparent"></div>

      

      {/* Star field background with smooth movement */}
      <div className="absolute inset-0">
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
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 60%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [-50, 50, -30, -50],
              y: [-40, 20, -60, -40],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-20 w-[520px] h-[520px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)',
              filter: 'blur(65px)',
            }}
            animate={{
              x: [20, -80, 60, 20],
              y: [0, -50, 40, 0],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-32 w-[470px] h-[470px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 35%, transparent 65%)',
              filter: 'blur(50px)',
            }}
            animate={{
              x: [-32, 40, -70, -32],
              y: [0, -30, 50, 0],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-16 w-[420px] h-[420px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(16, 185, 129, 0.3) 30%, transparent 60%)',
              filter: 'blur(60px)',
            }}
            animate={{
              x: [-16, -60, 80, -16],
              y: [0, 40, -30, 0],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-12 w-[450px] h-[450px] rounded-full opacity-12"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 75%)',
              filter: 'blur(75px)',
            }}
            animate={{
              x: [12, 90, -60, 12],
              y: [0, -70, 80, 0],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-40 w-[500px] h-[500px] rounded-full opacity-18"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 80%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: [40, -70, 100, 40],
              y: [0, 60, -40, 0],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-10 translate-y-16 w-[520px] h-[520px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(250, 204, 21, 0.45) 0%, rgba(250, 204, 21, 0.18) 40%, transparent 75%)',
              filter: 'blur(70px)',
            }}
            animate={{
              x: [-10, 60, -80, -10],
              y: [16, -40, 30, 16],
              scale: [1.05, 0.85, 1.2, 1.05],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />

          {/* Additional hues: warm orange */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-8 -translate-y-24 w-[440px] h-[440px] rounded-full opacity-16"
            style={{
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.38) 0%, rgba(249, 115, 22, 0.16) 45%, transparent 75%)',
              filter: 'blur(65px)',
            }}
            animate={{
              x: [8, -50, 70, 8],
              y: [-24, 30, -35, -24],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-44 translate-y-6 w-[460px] h-[460px] rounded-full opacity-18"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.42) 0%, rgba(236, 72, 153, 0.18) 40%, transparent 70%)',
              filter: 'blur(72px)',
            }}
            animate={{
              x: [-44, 30, -60, -44],
              y: [6, -40, 45, 6],
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-x-56 translate-y-8 w-[420px] h-[420px] rounded-full opacity-14"
            style={{
              background: 'radial-gradient(circle, rgba(109, 40, 217, 0.40) 0%, rgba(109, 40, 217, 0.16) 35%, transparent 70%)',
              filter: 'blur(66px)',
            }}
            animate={{
              x: [56, -40, 90, 56],
              y: [8, 50, -30, 8],
              scale: [0.85, 1.2, 0.9, 0.85],
            }}
            transition={{
              duration: 29,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 11,
            }}
          />
        </div>
        {/* Top badge - smaller size */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 rounded-full px-3 py-1.5 text-gray-300 badge-text text-xs">
            <span>Waitlister</span>
            <Star size={12} className="text-gray-300" />
            <span>Framer Template</span>
          </div>
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
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
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
                <Image src="/img1.jpeg" alt="App UI 1" fill className="object-contain" />
              </div>
              <Image src="/iphone-img.png" alt="Phone frame" fill className="object-contain z-10 pointer-events-none scale-[1.99] translate-x-[-5.8px]" />
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
                <Image src="/img2.jpeg" alt="App UI 2" fill className="object-contain" />
              </div>
              <Image src="/iphone-img.png" alt="Phone frame" fill className="object-contain z-10 pointer-events-none scale-[1.99] translate-x-[-5.8px]" />
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

      {/* Bottom "Made in Framer" badge - smaller */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-6 right-6 z-20"
      >
        <div className="inline-flex items-center gap-2 bg-gray-900/60 backdrop-blur-sm border border-gray-600/40 rounded-full px-3 py-1.5 text-gray-300 badge-text text-xs">
          <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-purple-600 rounded-sm"></div>
          <span>Made in Framer</span>
        </div>
      </motion.div>

      

      {/* Enhanced central radial vignette for dramatic effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60 pointer-events-none"></div>
      
      {/* Additional dark overlay for stronger vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
};

export default NewsletterPage;
