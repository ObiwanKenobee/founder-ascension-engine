
import React from "react";
import { Rocket, Target, Sparkle } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-space-dark">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple via-transparent to-transparent"></div>
        
        {/* Constellation dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-pulse-subtle" 
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Orbit lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50%" cy="50%" rx="30%" ry="40%" 
            className="orbit-line" 
            fill="none" 
            stroke="rgba(108, 99, 255, 0.2)" 
            strokeWidth="1"
            transform="rotate(-30, 50%, 50%)"
          />
          <ellipse cx="50%" cy="50%" rx="45%" ry="30%" 
            className="orbit-line" 
            fill="none" 
            stroke="rgba(35, 240, 199, 0.15)" 
            strokeWidth="1"
            transform="rotate(15, 50%, 50%)"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6">
          <Sparkle className="h-4 w-4 text-space-teal" />
          <span className="text-sm font-medium text-white">AI-Powered Founder Analysis</span>
        </div>
        
        <h1 className="font-space font-bold text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl leading-tight">
          <span className="text-white">Discover & Fund </span>
          <span className="text-space-purple">Exceptional Founders</span>
          <span className="text-white"> with AI</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Flight Foundry Engine analyzes founder stories and identifies investment-worthy minds using advanced AI and the Zero to One framework.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-space-purple text-white font-space font-medium rounded-full px-8 py-3 hover:bg-opacity-90 transition-all shadow-lg shadow-space-purple/20 flex items-center justify-center gap-2">
            <Rocket className="h-5 w-5" />
            Start Analysis
          </button>
          <button className="bg-transparent border border-space-purple text-white font-space font-medium rounded-full px-8 py-3 hover:bg-space-purple/10 transition-all flex items-center justify-center gap-2">
            <Target className="h-5 w-5" />
            Explore Flight Deck
          </button>
        </div>
        
        {/* Stats */}
        <div className="glass-panel px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center">
            <p className="text-space-teal text-3xl md:text-4xl font-space font-bold">98%</p>
            <p className="text-sm text-gray-300 mt-2">Analysis Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-space-teal text-3xl md:text-4xl font-space font-bold">500+</p>
            <p className="text-sm text-gray-300 mt-2">Founders Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-space-teal text-3xl md:text-4xl font-space font-bold">$24M</p>
            <p className="text-sm text-gray-300 mt-2">Total Funding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
