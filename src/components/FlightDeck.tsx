
import React from "react";
import { sampleFounders, fundingMilestones } from "../utils/mockData";
import FounderCard from "./FounderCard";
import { Target, Search, SlidersHorizontal } from "lucide-react";

const FlightDeck: React.FC = () => {
  return (
    <section id="flightdeck" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-4">
            <Target className="h-4 w-4 text-space-teal" />
            <span className="text-sm font-medium text-white">Flight Deck</span>
          </div>
          <h2 className="font-space font-bold text-3xl md:text-4xl text-white mb-4">Discover Exceptional Founders</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse our curated collection of high-potential founders and filter by traits, scores, and funding stage.
          </p>
        </div>
        
        <div className="mb-8 glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search founders or companies..."
              className="bg-space-blue/30 border border-white/10 rounded-full pl-10 pr-4 py-2 text-white w-full focus:outline-none focus:border-space-purple"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="bg-space-blue/30 border border-white/10 hover:border-space-purple/30 rounded-full px-4 py-2 text-white text-sm font-medium flex items-center gap-2 transition-all">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            
            <select className="bg-space-blue/30 border border-white/10 rounded-full px-4 py-2 text-white text-sm font-medium appearance-none pr-10 focus:outline-none focus:border-space-purple transition-all">
              <option>All Stages</option>
              <option>Ignition</option>
              <option>Ascent</option>
              <option>Cruise</option>
            </select>
            
            <select className="bg-space-blue/30 border border-white/10 rounded-full px-4 py-2 text-white text-sm font-medium appearance-none pr-10 focus:outline-none focus:border-space-purple transition-all">
              <option>All Industries</option>
              <option>AI & Machine Learning</option>
              <option>Climate Tech</option>
              <option>HealthTech</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sampleFounders.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
        
        <div className="glass-panel p-6">
          <h3 className="font-space font-medium text-white text-xl mb-6">Smart Funding Protocol</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingMilestones.map((milestone) => (
              <div key={milestone.id} className="bg-space-blue/30 border border-white/5 rounded-lg p-5">
                <div className={`inline-flex items-center justify-center h-10 w-10 rounded-full mb-4 ${
                  milestone.stage === 'Ignition' ? 'bg-amber-500/20 text-amber-300' : 
                  milestone.stage === 'Ascent' ? 'bg-space-purple/20 text-space-purple' : 
                  'bg-space-teal/20 text-space-teal'
                }`}>
                  <span className="font-space font-bold">{milestone.stage.charAt(0)}</span>
                </div>
                
                <h4 className="font-space font-medium text-white mb-2">{milestone.stage} Stage</h4>
                <p className="text-sm text-space-teal font-medium mb-3">{milestone.funding}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Requirements:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {milestone.requirements.map((req, index) => (
                      <li key={index} className="flex items-baseline">
                        <div className="h-1 w-1 bg-space-purple rounded-full mr-2 mt-1.5"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-xs text-gray-400 mb-2">Support:</p>
                  <div className="flex flex-wrap gap-2">
                    {milestone.support.map((item, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-space-blue/40 text-gray-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDeck;
