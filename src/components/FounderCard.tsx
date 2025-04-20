
import React from "react";
import { Founder } from "../utils/mockData";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface FounderCardProps {
  founder: Founder;
}

const FounderCard: React.FC<FounderCardProps> = ({ founder }) => {
  const radarData = [
    { subject: 'Vision', A: founder.scores.vision },
    { subject: 'First-Principle', A: founder.scores.firstPrinciple },
    { subject: 'Market', A: founder.scores.marketPotential },
    { subject: 'Resilience', A: founder.scores.resilience },
    { subject: 'Secret Insight', A: founder.scores.secretInsight },
  ];

  const getStageColor = (stage: string) => {
    switch(stage) {
      case 'Ignition': return 'bg-amber-500';
      case 'Ascent': return 'bg-space-purple';
      case 'Cruise': return 'bg-space-teal';
      default: return 'bg-gray-400';
    }
  };

  const totalScore = Object.values(founder.scores).reduce((acc, score) => acc + score, 0) / 5;

  return (
    <div className="glass-panel hover:border-space-purple/30 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-space font-medium text-white">{founder.name}</h3>
            <p className="text-gray-400">{founder.company}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-xl font-space font-bold text-space-teal">{Math.round(totalScore)}</span>
              <span className="text-sm text-gray-400">/ 100</span>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full ${getStageColor(founder.stage)} text-white mt-1`}>
              {founder.stage}
            </div>
          </div>
        </div>
        
        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,0.15)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }} />
              <Radar name={founder.name} dataKey="A" stroke="#23F0C7" fill="#23F0C7" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-sm text-gray-300 line-clamp-3 mb-4">{founder.story}</p>
        
        <div className="flex flex-wrap gap-2">
          {founder.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-space-blue/40 text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
