
import React from "react";
import { Rocket } from "lucide-react";

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-space-teal" />
          <span className="font-space font-bold text-xl text-white">Flight Foundry Engine</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-space text-space-light hover:text-space-teal transition-colors">Home</a>
          <a href="#input" className="font-space text-space-light hover:text-space-teal transition-colors">Founder Input</a>
          <a href="#analytics" className="font-space text-space-light hover:text-space-teal transition-colors">AI Analytics</a>
          <a href="#flightdeck" className="font-space text-space-light hover:text-space-teal transition-colors">Flight Deck</a>
        </div>
        
        <button className="bg-space-purple text-white font-space font-medium rounded-full px-6 py-2 hover:bg-opacity-90 transition-all shadow-lg shadow-space-purple/20">
          Launch
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
