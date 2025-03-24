
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Buff: Earn Rewards While Gaming | Download Now</title>
        <meta name="description" content="Download Buff to earn rewards playing your favorite games like Valorant, Fortnite, and Minecraft. Join 1M+ gamers and start earning today!" />
        <meta name="keywords" content="gaming rewards, buff app download, earn while gaming, gaming loyalty program, fortnite rewards, valorant points" />
        <link rel="canonical" href="https://buff.game/" />
      </Helmet>
      
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
