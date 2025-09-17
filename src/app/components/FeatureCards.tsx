"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Code2, Palette } from 'lucide-react';

type FeatureCardsProps = Record<string, never>

const FeatureCards: React.FC<FeatureCardsProps> = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Build and deploy blinks in seconds, not hours. Our optimized platform ensures maximum performance.',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Enterprise-grade security with built-in protection against common vulnerabilities and attacks.',
    },
    {
      icon: Code2,
      title: 'Developer Friendly',
      description: 'Simple APIs, comprehensive docs, and SDKs for all major programming languages.',
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Design your blinks exactly how you want with our flexible theming and styling options.',
    },
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Blinks?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create powerful, interactive blockchain experiences that users love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
