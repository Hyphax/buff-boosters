
import React, { useEffect, useRef, useState } from 'react';
import { BlurredCard } from './ui/BlurredCard';
import { AnimatedNumber } from './ui/AnimatedNumber';
import { cn } from '@/lib/utils';

export const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  
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
            
            setAnimated(true);
            
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
  
  const testimonials = [
    {
      quote: "I earned a $20 gift card just by playing Valorant for a week! This app is a game-changer for someone who games daily like me.",
      author: "Alex K.",
      role: "Competitive Gamer",
      game: "Valorant",
      accent: "from-games-valorant/20 to-transparent",
    },
    {
      quote: "After a month of casual Fortnite play, I had enough points for a new headset. Buff just rewards what I'd be doing anyway!",
      author: "Sarah M.",
      role: "Streamer",
      game: "Fortnite",
      accent: "from-games-fortnite/20 to-transparent",
    },
    {
      quote: "As a parent, I love that my kids can earn rewards safely while playing Minecraft. The app is non-intrusive and totally secure.",
      author: "Michael T.",
      role: "Casual Gamer",
      game: "Minecraft",
      accent: "from-games-minecraft/20 to-transparent",
    },
  ];
  
  const stats = [
    { value: 1000000, suffix: "+", label: "Active Users" },
    { value: 5000000, prefix: "$", label: "Rewards Redeemed" },
    { value: 4.8, suffix: "/5", label: "App Store Rating", formatter: (val) => val.toFixed(1) },
  ];
  
  return (
    <section id="testimonials" ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto">
        <div className="reveal">
          <h2 className="section-title">
            What <span className="buff-gradient-text">Gamers</span> Are Saying
          </h2>
        </div>
        
        <div className="reveal">
          <p className="section-subtitle">
            Join the millions of satisfied gamers who are already earning rewards with Buff.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="reveal">
              <BlurredCard 
                className="h-full relative"
                hoverEffect
              >
                {/* Gradient Background */}
                <div 
                  className={cn(
                    "absolute top-0 left-0 bottom-0 w-1/3 bg-gradient-to-r opacity-50",
                    testimonial.accent
                  )}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl font-serif text-buff mb-4">❝</div>
                  <p className="text-foreground/90 mb-6 text-balance">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                    <div className="text-sm font-medium px-3 py-1 rounded-full bg-background/50 border border-white/5">
                      {testimonial.game}
                    </div>
                  </div>
                </div>
              </BlurredCard>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 reveal">
          <BlurredCard className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold buff-gradient-text mb-2">
                    {animated && (
                      <AnimatedNumber 
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        formatter={stat.formatter}
                        duration={2000}
                      />
                    )}
                  </div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurredCard>
        </div>
        
        {/* Partner Logos */}
        <div className="mt-16 reveal">
          <h3 className="text-center text-lg font-medium text-foreground/70 mb-6">Supported Games</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-center">
              <div className="font-bold text-xl mb-1 text-games-valorant">VALORANT</div>
              <div className="text-xs text-foreground/50">RIOT GAMES</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-1 text-games-fortnite">FORTNITE</div>
              <div className="text-xs text-foreground/50">EPIC GAMES</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-1 text-games-minecraft">MINECRAFT</div>
              <div className="text-xs text-foreground/50">MOJANG</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-1 text-games-csgo">CS:GO</div>
              <div className="text-xs text-foreground/50">VALVE</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-1 text-buff">+100 MORE</div>
              <div className="text-xs text-foreground/50">SUPPORTED GAMES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
