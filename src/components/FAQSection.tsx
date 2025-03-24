
import React, { useEffect, useRef, useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurredCard } from './ui/BlurredCard';

export const FAQSection = () => {
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
  
  const faqs = [
    {
      question: "How does Buff work?",
      answer: "Buff is a loyalty program for gamers. It runs in the background while you play your favorite games, tracking your achievements and play time. You earn Buff Points based on your performance, which can be redeemed for various rewards in our marketplace."
    },
    {
      question: "Is Buff free to use?",
      answer: "Yes, Buff is completely free to download and use. There are no hidden fees or subscriptions. We make money through partnerships with game developers and brands, not from our users."
    },
    {
      question: "Which games are supported?",
      answer: "Buff supports over 100 popular games including Valorant, Fortnite, Minecraft, CS:GO, League of Legends, Dota 2, Apex Legends, and many more. We're constantly adding new games to our supported list."
    },
    {
      question: "How do I redeem my Buff Points?",
      answer: "Simply go to the Marketplace section in the Buff app, browse available rewards, and click 'Redeem' on the item you want. Depending on the reward, you'll either receive a digital code or instructions for physical item delivery."
    },
    {
      question: "Is Buff safe to use?",
      answer: "Absolutely. Buff is designed with security as a priority. We don't access any sensitive information, and our app is regularly audited for security. We also never interfere with your gameplay or game files."
    },
    {
      question: "How many points can I earn?",
      answer: "The amount of points you earn depends on how much you play and how well you perform. On average, active gamers can earn enough for small rewards within a week and larger rewards within a month of regular gameplay."
    },
  ];
  
  return (
    <section id="faq" ref={sectionRef} className="section relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto">
        <div className="reveal">
          <h2 className="section-title">
            Frequently Asked <span className="buff-gradient-text">Questions</span>
          </h2>
        </div>
        
        <div className="reveal">
          <p className="section-subtitle">
            Everything you need to know about Buff and how it rewards your gameplay.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <BlurredCard className="reveal">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurredCard>
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-foreground/70 mb-6">
            Still have questions? We're here to help.
          </p>
          <a href="#download" className="primary-btn">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};
