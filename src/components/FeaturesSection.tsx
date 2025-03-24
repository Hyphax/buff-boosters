import React, { useEffect, useRef } from 'react';
import { Award, Gift, Gamepad, Star, Download } from 'lucide-react';
import { BlurredCard } from './ui/BlurredCard';
import { cn } from '@/lib/utils';

export const FeaturesSection = () => {
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
  
  const features = [
    {
      title: "Earn Rewards While Playing",
      description: "Earn Buff points automatically while playing your favorite games like Fortnite, Valorant, and Minecraft. No interruptions, no ads, just rewards.",
      icon: <Gamepad className="text-buff" size={24} />,
      accent: "before:bg-games-valorant/20",
    },
    {
      title: "Redeem Gaming Gift Cards",
      description: "Convert your Buff points into gift cards for Steam, PlayStation Store, Xbox, and more. You can also get gaming peripherals from top brands.",
      icon: <Gift className="text-buff" size={24} />,
      accent: "before:bg-games-fortnite/20",
    },
    {
      title: "Wide Game Selection",
      description: "Buff works with over 100 popular games including Fortnite, Valorant, Minecraft, CSGO, League of Legends, and more titles added regularly.",
      icon: <Star className="text-buff" size={24} />,
      accent: "before:bg-games-minecraft/20",
    },
    {
      title: "Achievement Bonuses",
      description: "Complete in-game achievements and Buff challenges to earn bonus points. The better you play, the more rewards you'll earn.",
      icon: <Award className="text-buff" size={24} />,
      accent: "before:bg-games-csgo/20",
    },
  ];
  
  return (
    <section id="features" ref={sectionRef} className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-dark-gradient" />
      
      <div className="container relative z-10 mx-auto">
        <div className="reveal">
          <h2 className="section-title">
            <span className="buff-gradient-text">Gaming Rewards</span> That Level Up Your Experience
          </h2>
        </div>
        
        <div className="reveal">
          <p className="section-subtitle">
            Buff is the ultimate gaming loyalty program designed to integrate seamlessly with your gaming experience, providing rewards without changing how you play.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="reveal">
              <BlurredCard 
                hoverEffect
                className={cn(
                  "h-full relative before:absolute before:inset-0 before:rounded-xl before:opacity-40 before:z-0 overflow-hidden",
                  feature.accent
                )}
              >
                <div className="relative z-10">
                  <div className="bg-background/40 p-3 rounded-full w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </BlurredCard>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="reveal mt-16 text-center">
          <a href="#download" className="primary-btn inline-flex items-center justify-center gap-2" aria-label="Download Buff App now to start earning rewards">
            <Download size={18} />
            Get Buff Gaming Rewards Now
          </a>
        </div>
      </div>
    </section>
  );
};
