
import React, { useEffect, useRef } from 'react';
import { BlurredCard } from './ui/BlurredCard';
import { cn } from '@/lib/utils';

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
            
            // Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get the Buff app from our website or your device's app store and create your account in seconds.",
      color: "from-buff/20 to-transparent",
    },
    {
      number: "02",
      title: "Play Your Games",
      description: "Launch your favorite supported games and play just like you normally would. No changes needed.",
      color: "from-games-valorant/20 to-transparent",
    },
    {
      number: "03",
      title: "Earn Buff Points",
      description: "Points are awarded automatically based on your gameplay achievements and time spent playing.",
      color: "from-games-fortnite/20 to-transparent",
    },
    {
      number: "04",
      title: "Redeem Rewards",
      description: "Use your accumulated points to get gift cards, gaming peripherals, in-game items, and more.",
      color: "from-games-minecraft/20 to-transparent",
    },
  ];
  
  return (
    <section id="how-it-works" ref={sectionRef} className="section relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto">
        <div className="reveal">
          <h2 className="section-title">
            <span className="buff-gradient-text">Simple Steps</span> to Start Earning
          </h2>
        </div>
        
        <div className="reveal">
          <p className="section-subtitle">
            Buff integrates seamlessly with your gaming routine. Start earning rewards in four easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="reveal">
              <BlurredCard 
                className="h-full relative overflow-hidden"
                hoverEffect
              >
                {/* Gradient Background */}
                <div 
                  className={cn(
                    "absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-r opacity-50",
                    step.color
                  )}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl font-bold buff-gradient-text mb-4">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                  
                  {/* Progress line connecting steps */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-px bg-gradient-to-r from-buff/50 to-transparent translate-x-full" />
                  )}
                </div>
              </BlurredCard>
            </div>
          ))}
        </div>
        
        {/* Progress Animation */}
        <div className="reveal mt-16 relative">
          <BlurredCard className="p-8 overflow-hidden">
            <div className="w-full bg-secondary/30 h-3 rounded-full overflow-hidden">
              <div className="h-full bg-buff-gradient w-0 rounded-full shimmer" style={{width: '75%'}} />
            </div>
            
            <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold">Ready to start earning?</h3>
                <p className="text-foreground/70">Download now and get 100 bonus points instantly!</p>
              </div>
              
              <a href="#download" className="primary-btn whitespace-nowrap">Start Earning Today</a>
            </div>
          </BlurredCard>
        </div>
      </div>
    </section>
  );
};
