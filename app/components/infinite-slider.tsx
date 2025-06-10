'use client';

import { cn } from '@/app/_utils/cn';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  gap?: number;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  speed = 50,
  gap = 16,
  reverse = false,
  className,
  ...props
}: InfiniteSliderProps) {
  const [ref, { width }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();

  const x = useMotionValue(0);

  useEffect(() => {
    if (!contentWidth || !width) return;
    if (contentWidth < width) return;

    let controls: any;
    const startAnimation = (fromX = 0) => {
      controls?.stop();
      controls = animate(x, -contentWidth, {
        ease: 'linear',
        duration: (contentWidth + fromX) / speed,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onComplete: () => {
          // Ensure smooth transition at the end of each loop
          x.set(0);
          startAnimation(0);
        },
      });
    };

    startAnimation();

    return () => {
      controls?.stop();
    };
  }, [contentWidth, width, x, speed]);

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <motion.div
        ref={contentRef}
        style={{
          x,
          gap,
          display: 'flex',
          flexDirection: 'row',
          transform: reverse ? 'scaleX(-1)' : undefined,
        }}
        className="flex-nowrap"
      >
        {children}
        {children}
      </motion.div>
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[150px]" 
        style={{
          background: 'linear-gradient(to right, var(--background) 0%, transparent 100%)',
        }}
      />
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[150px]" 
        style={{
          background: 'linear-gradient(to left, var(--background) 0%, transparent 100%)',
        }}
      />
    </div>
  );
} 