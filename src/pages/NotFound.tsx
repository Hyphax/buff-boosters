
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glowing orb for visual effect */}
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-buff/10 filter blur-3xl animate-pulse-gentle" />
      
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        <h1 className="text-title-xl font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/80 mb-8">Oops! This page doesn't exist.</p>
        <a 
          href="/" 
          className="primary-btn inline-flex"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
