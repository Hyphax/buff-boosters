
import React, { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorks } from '@/components/HowItWorks';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    // Function to handle scroll animations
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
