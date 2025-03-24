
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold buff-gradient-text tracking-tight">BUFF</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <a href="#features" className="text-foreground/80 hover:text-buff transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-buff transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-buff transition-colors">Testimonials</a>
            <a href="#faq" className="text-foreground/80 hover:text-buff transition-colors">FAQ</a>
          </div>
          
          <a href="#download" className="primary-btn">
            Download Now
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 px-6 pt-4 pb-6 bg-background/95 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300 ease-in-out",
        isMenuOpen ? "top-full opacity-100" : "-top-full opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-foreground/80 hover:text-buff transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-foreground/80 hover:text-buff transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-foreground/80 hover:text-buff transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-foreground/80 hover:text-buff transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          
          <a 
            href="#download" 
            className="primary-btn text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Now
          </a>
        </div>
      </div>
    </nav>
  );
};
