"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const UIPreviewSection: React.FC = () => {
  return (
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
  );
};

export default React.memo(UIPreviewSection);


