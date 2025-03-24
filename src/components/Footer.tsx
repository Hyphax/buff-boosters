
import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background relative overflow-hidden py-16 px-6 md:px-12">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold buff-gradient-text tracking-tight">BUFF</div>
          </div>
          
          <div className="max-w-lg mx-auto mb-8">
            <p className="text-foreground/70">
              Buff is revolutionizing the way gamers are rewarded. Play, earn, repeat.
            </p>
          </div>
          
          <div className="flex gap-3 items-center justify-center mb-10">
            <div className="flex items-center gap-1 text-sm text-foreground/60">
              <Lock size={14} />
              <span>256-bit encryption</span>
            </div>
            <div className="h-4 w-px bg-foreground/20"></div>
            <div className="flex items-center gap-1 text-sm text-foreground/60">
              <Shield size={14} />
              <span>100% Secure</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Features</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">How It Works</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Rewards</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Supported Games</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">About Us</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Careers</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Press</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">FAQ</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Help Center</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Terms</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Privacy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Cookies</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-buff transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-foreground/50 text-sm w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                © {new Date().getFullYear()} Buff Technologies Inc. All rights reserved.
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="hover:text-buff transition-colors">Facebook</a>
                <a href="#" className="hover:text-buff transition-colors">Twitter</a>
                <a href="#" className="hover:text-buff transition-colors">Instagram</a>
                <a href="#" className="hover:text-buff transition-colors">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
