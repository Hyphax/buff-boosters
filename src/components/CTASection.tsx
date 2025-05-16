
import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { BlurredCard } from './ui/BlurredCard';

export const CTASection = () => {
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
  
  return (
    <section id="download" ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glowing orbs for visual effect */}
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-buff/10 filter blur-3xl animate-pulse-gentle" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-games-valorant/10 filter blur-3xl animate-pulse-gentle" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto">
        <div className="max-w-5xl mx-auto">
          <BlurredCard className="p-8 md:p-12 reveal">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="md:w-2/3">
                <h2 className="text-title-lg font-bold mb-4">
                  Ready to <span className="buff-gradient-text">Earn Gaming Rewards</span> With Buff?
                </h2>
                
                <p className="text-foreground/80 mb-6">
                  Download the Buff gaming rewards app now and join over 1 million gamers who are earning while playing Fortnite, Valorant, Minecraft and other favorite games. Get started with 100 bonus points – limited time offer!
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-buff flex items-center justify-center text-buff-foreground text-xs">✓</div>
                    <span>100% Free Gaming Loyalty Program – No hidden fees or subscriptions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-buff flex items-center justify-center text-buff-foreground text-xs">✓</div>
                    <span>100+ Supported Games – Earn with Fortnite, Valorant, Minecraft and more</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-buff flex items-center justify-center text-buff-foreground text-xs">✓</div>
                    <span>Safe & Secure – No performance impact on your gaming experience</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://cudoai.com/buffly" 
                    className="primary-btn flex items-center justify-center gap-2 text-lg"
                    aria-label="Download Buff gaming rewards app for Windows"
                  >
                    <Download size={20} />
                    Download Buff for Windows
                  </a>
                  <a 
                    href="https://cudoai.com/buffly" 
                    className="secondary-btn flex items-center justify-center gap-2"
                    aria-label="Download Buff gaming rewards app for Mac"
                  >
                    Download Buff for Mac
                  </a>
                </div>
                
                <p className="text-xs text-foreground/50 mt-4">
                  By downloading, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-buff/20 rounded-full filter blur-xl animate-pulse-gentle" />
                  <div className="relative w-48 h-48 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-white/10">
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground/70 mb-1">New Buff users get</div>
                      <div className="text-4xl font-bold buff-gradient-text mb-1">100</div>
                      <div className="text-sm font-medium text-foreground/70">Bonus Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurredCard>
        </div>
      </div>
    </section>
  );
};
