
import React, { useState } from "react";
import { Upload, Target, Sparkle, CircuitBoard } from "lucide-react";

const FounderInput: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'record' | 'text'>('upload');
  
  return (
    <section id="input" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-4">
            <CircuitBoard className="h-4 w-4 text-space-teal" />
            <span className="text-sm font-medium text-white">Founder Input Module</span>
          </div>
          <h2 className="font-space font-bold text-3xl md:text-4xl text-white mb-4">Share Your Founder Story</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Upload your story and let our AI analyze your founder potential using proven frameworks and neural pattern recognition.
          </p>
        </div>
        
        <div className="glass-panel max-w-3xl mx-auto overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-white/10">
            <button 
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-4 px-4 font-space font-medium text-center transition-colors ${
                activeTab === 'upload' ? 'text-space-teal border-b-2 border-space-teal' : 'text-gray-400 hover:text-white'
              }`}
            >
              Upload File
            </button>
            <button 
              onClick={() => setActiveTab('record')}
              className={`flex-1 py-4 px-4 font-space font-medium text-center transition-colors ${
                activeTab === 'record' ? 'text-space-teal border-b-2 border-space-teal' : 'text-gray-400 hover:text-white'
              }`}
            >
              Record Story
            </button>
            <button 
              onClick={() => setActiveTab('text')}
              className={`flex-1 py-4 px-4 font-space font-medium text-center transition-colors ${
                activeTab === 'text' ? 'text-space-teal border-b-2 border-space-teal' : 'text-gray-400 hover:text-white'
              }`}
            >
              Write Text
            </button>
          </div>
          
          {/* Content Area */}
          <div className="p-6">
            {activeTab === 'upload' && (
              <div className="flex flex-col items-center">
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 w-full text-center hover:border-space-teal/50 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-white font-space font-medium mb-2">Drag and drop your file</p>
                  <p className="text-sm text-gray-400 mb-6">Supports video, audio, or text files (max 50MB)</p>
                  <button className="bg-space-purple text-white font-space font-medium rounded-full px-6 py-2 hover:bg-opacity-90 transition-all">
                    Browse Files
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'record' && (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center mb-6 border border-space-purple">
                  <div className="w-16 h-16 rounded-full bg-space-purple flex items-center justify-center pulse">
                    <Sparkle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-white font-space font-medium mb-2">Click to start recording your story</p>
                <p className="text-sm text-gray-400 mb-6 max-w-md text-center">
                  Tell us about your vision, unique insights, and why you're the founder to make it happen
                </p>
                <button className="bg-space-purple text-white font-space font-medium rounded-full px-8 py-3 hover:bg-opacity-90 transition-all flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Start Recording
                </button>
              </div>
            )}
            
            {activeTab === 'text' && (
              <div>
                <textarea
                  className="w-full bg-space-blue/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-space-purple"
                  rows={8}
                  placeholder="Share your founder story. What's your vision? What unique insight do you have? What have you built so far?"
                ></textarea>
                <div className="mt-6">
                  <button className="bg-space-purple text-white font-space font-medium rounded-full px-8 py-3 hover:bg-opacity-90 transition-all flex items-center gap-2 ml-auto">
                    <Sparkle className="h-5 w-5" />
                    Analyze Story
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Additional Fields */}
          <div className="p-6 border-t border-white/10">
            <h3 className="font-space font-medium text-white mb-4">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                <input 
                  type="text"
                  className="w-full bg-space-blue/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-space-purple"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Industry</label>
                <input 
                  type="text"
                  className="w-full bg-space-blue/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-space-purple"
                  placeholder="e.g. AI, Fintech, Healthcare"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Core Values & Principles</label>
              <input 
                type="text"
                className="w-full bg-space-blue/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-space-purple"
                placeholder="What are your guiding principles?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderInput;
