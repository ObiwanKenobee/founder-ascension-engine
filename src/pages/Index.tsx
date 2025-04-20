
import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FounderInput from "../components/FounderInput";
import AIAnalytics from "../components/AIAnalytics";
import FlightDeck from "../components/FlightDeck";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark overflow-hidden">
      <NavBar />
      <HeroSection />
      <FounderInput />
      <AIAnalytics />
      <FlightDeck />
      
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Flight Foundry Engine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
