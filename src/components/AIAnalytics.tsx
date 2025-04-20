
import React from "react";
import { ChartArea, ArrowRight, Zap } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Cell, ResponsiveContainer } from "recharts";

const AIAnalytics: React.FC = () => {
  const analyticData = [
    { name: "Vision", score: 92 },
    { name: "First-Principle", score: 88 },
    { name: "Market Potential", score: 75 },
    { name: "Resilience", score: 84 },
    { name: "Secret Insight", score: 90 },
  ];

  const traits = [
    { name: "Contrarian Thinking", value: "High", description: "Questions established norms and identifies inefficiencies" },
    { name: "Founder-Market Fit", value: "Very High", description: "Deep subject matter expertise and personal connection" },
    { name: "Execution Intelligence", value: "Medium", description: "Ability to translate ideas into scalable operations" },
    { name: "Communication Clarity", value: "High", description: "Articulates complex ideas with precision and persuasion" },
  ];

  const insightCards = [
    {
      title: "Future Vision",
      description: "Your ability to articulate a clear and compelling vision for the future stands out in the top 12% of founders.",
      action: "Refine story"
    },
    {
      title: "Unique Insight",
      description: "You've identified a non-obvious truth that gives you a competitive advantage in your market approach.",
      action: "Validate further"
    },
    {
      title: "Resilience Pattern",
      description: "Your narrative demonstrates above-average resilience through prior failures, suggesting strong adaptability.",
      action: "Leverage experience" 
    }
  ];

  return (
    <section id="analytics" className="relative py-24 bg-gradient-to-b from-space-dark to-space-blue/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-4">
            <ChartArea className="h-4 w-4 text-space-teal" />
            <span className="text-sm font-medium text-white">AI Character Engine</span>
          </div>
          <h2 className="font-space font-bold text-3xl md:text-4xl text-white mb-4">Zero-to-One Score Analysis</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our AI analyzes your story against proven patterns of successful founders to generate your unique score.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-panel p-6 lg:col-span-1">
            <h3 className="font-space font-medium text-white text-xl mb-6">Z1 Score Breakdown</h3>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={analyticData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} tick={{fill: '#ffffff80'}} />
                  <YAxis dataKey="name" type="category" tick={{fill: '#ffffff'}} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                    {analyticData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.score > 85 ? '#23F0C7' : (entry.score > 70 ? '#6C63FF' : '#a890ff')} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Overall Score</p>
                <div className="flex items-end">
                  <span className="text-3xl font-space font-bold text-space-teal">85.8</span>
                  <span className="text-sm text-gray-400 ml-1 mb-1">/ 100</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Percentile</p>
                <p className="text-xl font-space font-bold text-white">Top 7%</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 lg:col-span-2">
            <h3 className="font-space font-medium text-white text-xl mb-6">Key Founder Traits</h3>
            
            <div className="space-y-6">
              {traits.map((trait, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-3 w-3 mt-1.5 rounded-full bg-space-purple"></div>
                  <div className="ml-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-space font-medium text-white">{trait.name}</h4>
                      <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        trait.value === 'Very High' ? 'bg-space-teal text-black' : 
                        trait.value === 'High' ? 'bg-space-purple text-white' : 
                        'bg-blue-700/40 text-white'
                      }`}>
                        {trait.value}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{trait.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="font-space font-medium text-white text-xl mb-4">AI-Generated Insights</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {insightCards.map((card, index) => (
                  <div key={index} className="bg-space-blue/30 border border-white/5 rounded-lg p-4 hover:border-space-purple/30 transition-all">
                    <div className="flex items-center mb-3">
                      <Zap className="h-4 w-4 text-space-teal" />
                      <h4 className="ml-2 font-space font-medium text-white text-sm">{card.title}</h4>
                    </div>
                    <p className="text-xs text-gray-300 mb-3">{card.description}</p>
                    <button className="flex items-center text-xs font-medium text-space-purple hover:text-space-teal transition-colors">
                      {card.action}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAnalytics;
