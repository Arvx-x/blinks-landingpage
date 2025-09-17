"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const generateFluidKeyframes = (
    steps: number,
    maxX: number,
    maxY: number
  ): { x: number[]; y: number[] } => {
    const x: number[] = [];
    const y: number[] = [];
    let currentX = 0;
    let currentY = 0;
    for (let i = 0; i < steps; i++) {
      currentX += (Math.random() - 0.5) * (maxX * 0.25);
      currentY += (Math.random() - 0.5) * (maxY * 0.25);
      currentX = Math.max(-maxX, Math.min(maxX, currentX));
      currentY = Math.max(-maxY, Math.min(maxY, currentY));
      const previousX = i > 0 ? x[i - 1] : 0;
      const previousY = i > 0 ? y[i - 1] : 0;
      const smoothedX = previousX + (currentX - previousX) * 0.6;
      const smoothedY = previousY + (currentY - previousY) * 0.6;
      x.push(smoothedX);
      y.push(smoothedY);
    }
    x.push(x[0]);
    y.push(y[0]);
    return { x, y };
  };

  const fluidMain = useMemo(() => generateFluidKeyframes(14, 85, 60), []);
  const fluidBlue = useMemo(() => generateFluidKeyframes(16, 65, 45), []);

  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 4,
        moveX: (Math.random() - 0.5) * 100,
        moveY: (Math.random() - 0.5) * 80,
        duration: 8 + Math.random() * 10,
      })),
    []
  );

  if (!shouldAnimate) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Star field background */}
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
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 0.8, 1],
              x: [0, star.moveX, -star.moveX, 0],
              y: [0, star.moveY, -star.moveY, 0],
            }}
            transition={{
              opacity: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              scale: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              x: { duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              y: { duration: star.duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: star.delay * 0.5 },
            }}
          />
        ))}
      </div>

      {/* Multi-orb gradient ambience */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ filter: "hue-rotate(0deg)" }}
        animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
        transition={{ filter: { duration: 60, repeat: Infinity, ease: "linear" } }}
      >
        <motion.div
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{ x: fluidMain.x, y: fluidMain.y, scale: [1, 1.15, 0.95, 1.05, 1] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)",
            filter: "blur(65px)",
          }}
          animate={{ x: [-5, 70, 10, -75, -20, 65, -5], y: [-45, 5, 55, -5, -35, 25, -45], scale: [0.8, 1.1, 0.9, 0.8] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 35%, transparent 65%)",
            filter: "blur(50px)",
          }}
          animate={{ x: [0, 60, -25, -65, 15, 55, 0], y: [-40, -15, 30, 15, -25, 45, -40], scale: [1, 0.7, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(16, 185, 129, 0.3) 30%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [5, 50, -10, -45, 20, 40, 5], y: [-35, 0, 35, -5, -25, 20, -35], scale: [0.9, 1.4, 0.6, 0.9] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-12"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 75%)",
            filter: "blur(75px)",
          }}
          animate={{ x: [0, 65, -15, -60, 10, 55, 0], y: [-65, -5, 50, 5, -40, 35, -65], scale: [1.2, 0.8, 1.5, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.1) 45%, transparent 80%)",
            filter: "blur(70px)",
          }}
          animate={{ x: [0, 75, -20, -70, 15, 70, 0], y: [-55, 0, 55, -10, -35, 25, -55], scale: [0.7, 1.3, 0.9, 0.7] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(250, 204, 21, 0.35) 0%, rgba(250, 204, 21, 0.14) 40%, transparent 75%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: fluidMain.x.map((value) => value * 0.7 + 5),
            y: fluidMain.y.map((value) => value * 0.6 - 5),
            scale: [1.05, 0.95, 1.15, 1.0, 1.05],
          }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full opacity-16"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, rgba(249, 115, 22, 0.12) 45%, transparent 75%)",
            filter: "blur(65px)",
          }}
          animate={{ x: [0, 50, -10, -50, 15, 35, 0], y: [-50, -10, 35, 10, -25, 30, -50], scale: [0.9, 1.25, 0.8, 0.9] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.32) 0%, rgba(236, 72, 153, 0.14) 40%, transparent 70%)",
            filter: "blur(72px)",
          }}
          animate={{ x: [0, 60, -15, -60, 20, 50, 0], y: [-50, -5, 45, 0, -35, 25, -50], scale: [1.1, 0.85, 1.3, 1.1] }}
          transition={{ duration: 31, repeat: Infinity, ease: "easeInOut", delay: 9 }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-24 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0.18) 40%, transparent 75%)",
            filter: "blur(70px)",
          }}
          animate={{ x: fluidBlue.x, y: fluidBlue.y, scale: [1.0, 1.12, 0.96, 1.04, 1.0] }}
          transition={{ duration: 36, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </div>
  );
}


