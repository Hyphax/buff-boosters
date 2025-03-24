
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const BlurredCard = ({ 
  children, 
  className,
  hoverEffect = false,
  ...props 
}: BlurredCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6",
        hoverEffect && "card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
