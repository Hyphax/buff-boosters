
import React, { useEffect, useState } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-24 px-6 md:px-12">
      {/* Grid Background with Animation */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-buff/10 filter blur-3xl animate-pulse-gentle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-games-valorant/10 filter blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
      
      {/* Main content */}
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <div 
            className={cn(
              "inline-block px-4 py-1 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium",
              isVisible ? "animate-slide-in-bottom" : "opacity-0"
            )}
            style={{ animationDelay: '0.1s' }}
          >
            Game. Earn. Redeem. Repeat.
          </div>
          
          <h1 
            className={cn(
              "text-title-lg md:text-title-xl lg:text-title-2xl font-bold leading-tight mb-6",
              isVisible ? "animate-slide-in-bottom" : "opacity-0"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-balance block mb-2">Level Up Your Gaming</span>
            <span className="buff-gradient-text text-balance">With Real Rewards</span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto text-balance",
              isVisible ? "animate-slide-in-bottom" : "opacity-0"
            )}
            style={{ animationDelay: '0.3s' }}
          >
            Buff turns your gaming time into points you can redeem for gift cards, gaming gear, and more. No interruptions, just rewards.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center mb-10",
              isVisible ? "animate-slide-in-bottom" : "opacity-0"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <a 
              href="#download" 
              className="primary-btn flex items-center justify-center gap-2 text-lg"
            >
              <Download size={20} />
              Download Buff Now
            </a>
            <a 
              href="#features" 
              className="secondary-btn flex items-center justify-center gap-2"
            >
              Learn More
            </a>
          </div>
          
          {/* Stats */}
          <div 
            className={cn(
              "flex flex-wrap justify-center gap-8 md:gap-16",
              isVisible ? "animate-slide-in-bottom" : "opacity-0"
            )}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold buff-gradient-text mb-1">1M+</p>
              <p className="text-sm text-foreground/70">Active Gamers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold buff-gradient-text mb-1">100+</p>
              <p className="text-sm text-foreground/70">Supported Games</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold buff-gradient-text mb-1">$5M+</p>
              <p className="text-sm text-foreground/70">Rewards Redeemed</p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" className="text-foreground/50 hover:text-buff">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
