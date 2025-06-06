'use client';

import { cn } from '@/app/_utils/cn';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  speed?: number;
  gap?: number;
  reverse?: boolean;
  speedOnHover?: number;
}

export function InfiniteSlider({
  children,
  direction = 'horizontal',
  speed = 50,
  gap = 16,
  reverse = false,
  speedOnHover,
  className,
  ...props
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const [contentRef, { width: contentWidth, height: contentHeight }] = useMeasure();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (!contentWidth || !contentHeight || !width || !height) return;

    const contentSize = direction === 'horizontal' ? contentWidth : contentHeight;
    const boundsSize = direction === 'horizontal' ? width : height;

    if (contentSize < boundsSize) return;

    const target = direction === 'horizontal' ? x : y;
    const size = direction === 'horizontal' ? contentWidth : contentHeight;

    const controls = animate(target, -size, {
      ease: 'linear',
      duration: size / (hovered && speedOnHover ? speedOnHover : speed),
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return () => {
      const currentValue = target.get();
      controls.stop();
      
      // Immediately start a new animation from the current position
      animate(target, -size, {
        ease: 'linear',
        duration: (size + currentValue) / (hovered && speedOnHover ? speedOnHover : speed),
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    };
  }, [contentWidth, width, height, contentHeight, direction, x, y, speed, speedOnHover, hovered]);

  useEffect(() => {
    if (!contentWidth || !contentHeight || !width || !height) return;

    const target = direction === 'horizontal' ? x : y;
    const size = direction === 'horizontal' ? contentWidth : contentHeight;
    const currentValue = target.get();

    const controls = animate(target, -size, {
      ease: 'linear',
      duration: (size + currentValue) / (hovered && speedOnHover ? speedOnHover : speed),
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [contentWidth, contentHeight, width, height, direction, x, y, speed, speedOnHover, hovered]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <motion.div
        ref={contentRef}
        style={{
          x: direction === 'horizontal' ? x : 0,
          y: direction === 'vertical' ? y : 0,
          gap,
          display: 'flex',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          transform: reverse ? 'scaleX(-1)' : undefined,
        }}
        className="flex-nowrap"
      >
        {children}
        {children}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
    </div>
  );
} 