
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
}

export const AnimatedNumber = ({
  value,
  duration = 1000,
  className,
  prefix = '',
  suffix = '',
  formatter = (value) => value.toString()
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset animation when value changes
    countRef.current = 0;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation
      const easedValue = easeOutExpo(percentage);
      countRef.current = Math.floor(easedValue * value);
      
      setCount(countRef.current);
      
      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure we end exactly on the target value
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, duration]);
  
  // Easing function for smoother animation
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  return (
    <span className={cn("inline-block", className)}>
      {prefix}{formatter(count)}{suffix}
    </span>
  );
};
