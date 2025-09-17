"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FluidBlobProps = {
  width: number;
  height: number;
  opacity: number;
  gradientFrom: string;
  gradientTo: string;
  blur: number;
  animateX?: number[];
  animateY?: number[];
  scale?: number[];
  duration: number;
  delay?: number;
  shouldAnimate: boolean;
};

function FluidBlob({ width, height, opacity, gradientFrom, gradientTo, blur, animateX, animateY, scale, duration, delay = 0, shouldAnimate }: FluidBlobProps) {
  const id = React.useMemo(() => `fluidblob_${Math.random().toString(36).slice(2)}`, []);
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ opacity, willChange: "transform, filter" }}
      animate={shouldAnimate ? { x: animateX, y: animateY, scale } : undefined}
      transition={shouldAnimate ? { duration, repeat: Infinity, ease: "easeInOut", delay } : undefined}
    >
      <defs>
        <linearGradient id={`${id}_grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
        <filter id={`${id}_f`} x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006" numOctaves="2" seed="2" result="turb">
            <animate attributeName="baseFrequency" values="0.006;0.012;0.008;0.014;0.006" dur={`${Math.max(12, duration - 6)}s`} repeatCount="indefinite" />
            <animate attributeName="seed" values="2;5;8;11;2" dur={`${Math.max(18, duration)}s`} repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="60" xChannelSelector="R" yChannelSelector="G">
            <animate attributeName="scale" values="40;80;55;70;40" dur={`${Math.max(16, duration - 2)}s`} repeatCount="indefinite" />
          </feDisplacementMap>
          <feGaussianBlur stdDeviation={blur} />
        </filter>
      </defs>
      <g filter={`url(#${id}_f)`}>
        <rect x="0" y="0" width={width} height={height} rx={width * 0.3} ry={height * 0.35} fill={`url(#${id}_grad)`} />
      </g>
    </motion.svg>
  );
}

type AnimatedBackgroundProps = {
  className?: string;
};

export default function AnimatedBackground({ className }: AnimatedBackgroundProps) {
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

  const [starCount, setStarCount] = useState<number>(80);

  useEffect(() => {
    setStarCount(80);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: starCount }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.8 + Math.random() * 2.2,
        opacity: Math.random() * 0.5 + 0.4,
        delay: Math.random() * 4,
        moveX: (Math.random() - 0.5) * 100,
        moveY: (Math.random() - 0.5) * 80,
        duration: 8 + Math.random() * 10,
      })),
    [starCount]
  );

  return (
    <div className={className ?? "absolute inset-0 pointer-events-none z-0"} style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}>
      {/* Star field background */}
      <div className="absolute inset-0 pointer-events-none" style={{ willChange: "transform, opacity" }}>
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
              willChange: "transform, opacity",
            }}
            animate={shouldAnimate ? {
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 0.8, 1],
              x: [0, star.moveX, -star.moveX, 0],
              y: [0, star.moveY, -star.moveY, 0],
            } : undefined}
            transition={shouldAnimate ? {
              opacity: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              scale: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              x: { duration: star.duration, repeat: Infinity, ease: "easeInOut", delay: star.delay },
              y: { duration: star.duration * 1.2, repeat: Infinity, ease: "easeInOut", delay: star.delay * 0.5 },
            } : undefined}
          />
        ))}
      </div>

      {/* Multi-orb gradient ambience (circular orbs) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ filter: "hue-rotate(0deg)", willChange: "transform, filter", transform: "translateZ(0)" }}
        animate={shouldAnimate ? { filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] } : undefined}
        transition={shouldAnimate ? { filter: { duration: 60, repeat: Infinity, ease: "linear" } } : undefined}
      >
        <motion.div
          className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full opacity-36"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 30%, transparent 60%)",
            filter: "blur(60px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: fluidMain.x, y: fluidMain.y, scale: [1, 1.15, 0.95, 1.05, 1] } : undefined}
          transition={shouldAnimate ? { duration: 36, repeat: Infinity, ease: "easeInOut" } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.2) 40%, transparent 70%)",
            filter: "blur(65px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [-5, 70, 10, -75, -20, 65, -5], y: [-45, 5, 55, -5, -35, 25, -45], scale: [0.8, 1.1, 0.9, 0.8] } : undefined}
          transition={shouldAnimate ? { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[470px] h-[470px] rounded-full opacity-24"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 35%, transparent 65%)",
            filter: "blur(50px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [0, 60, -25, -65, 15, 55, 0], y: [-40, -15, 30, 15, -25, 45, -40], scale: [1, 0.7, 1.3, 1] } : undefined}
          transition={shouldAnimate ? { duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(16, 185, 129, 0.3) 30%, transparent 60%)",
            filter: "blur(60px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [5, 50, -10, -45, 20, 40, 5], y: [-35, 0, 35, -5, -25, 20, -35], scale: [0.9, 1.4, 0.6, 0.9] } : undefined}
          transition={shouldAnimate ? { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-12"
          style={{
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 75%)",
            filter: "blur(75px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [0, 65, -15, -60, 10, 55, 0], y: [-65, -5, 50, 5, -40, 35, -65], scale: [1.2, 0.8, 1.5, 1.2] } : undefined}
          transition={shouldAnimate ? { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.1) 45%, transparent 80%)",
            filter: "blur(70px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [0, 75, -20, -70, 15, 70, 0], y: [-55, 0, 55, -10, -35, 25, -55], scale: [0.7, 1.3, 0.9, 0.7] } : undefined}
          transition={shouldAnimate ? { duration: 32, repeat: Infinity, ease: "easeInOut", delay: 10 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(250, 204, 21, 0.35) 0%, rgba(250, 204, 21, 0.14) 40%, transparent 75%)",
            filter: "blur(70px)",
            willChange: "transform, filter",
          }}
          animate={{
            ...(shouldAnimate ? {
              x: fluidMain.x.map((value) => value * 0.7 + 5),
              y: fluidMain.y.map((value) => value * 0.6 - 5),
              scale: [1.05, 0.95, 1.15, 1.0, 1.05],
            } : {}),
          }}
          transition={shouldAnimate ? { duration: 34, repeat: Infinity, ease: "easeInOut", delay: 3 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full opacity-16"
          style={{
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.28) 0%, rgba(249, 115, 22, 0.12) 45%, transparent 75%)",
            filter: "blur(65px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [0, 50, -10, -50, 15, 35, 0], y: [-50, -10, 35, 10, -25, 30, -50], scale: [0.9, 1.25, 0.8, 0.9] } : undefined}
          transition={shouldAnimate ? { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 7 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full opacity-18"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.32) 0%, rgba(236, 72, 153, 0.14) 40%, transparent 70%)",
            filter: "blur(72px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: [0, 60, -15, -60, 20, 50, 0], y: [-50, -5, 45, 0, -35, 25, -50], scale: [1.1, 0.85, 1.3, 1.1] } : undefined}
          transition={shouldAnimate ? { duration: 31, repeat: Infinity, ease: "easeInOut", delay: 9 } : undefined}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full opacity-24"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(37, 99, 235, 0.18) 40%, transparent 75%)",
            filter: "blur(70px)",
            willChange: "transform, filter",
          }}
          animate={shouldAnimate ? { x: fluidBlue.x, y: fluidBlue.y, scale: [1.0, 1.12, 0.96, 1.04, 1.0] } : undefined}
          transition={shouldAnimate ? { duration: 36, repeat: Infinity, ease: "easeInOut", delay: 1.5 } : undefined}
        />
      </motion.div>
    </div>
  );
}


