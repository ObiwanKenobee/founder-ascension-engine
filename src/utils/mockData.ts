
export interface Founder {
  id: string;
  name: string;
  company: string;
  imageUrl: string;
  scores: {
    vision: number;
    firstPrinciple: number;
    marketPotential: number;
    resilience: number;
    secretInsight: number;
  };
  stage: "Ignition" | "Ascent" | "Cruise";
  story: string;
  tags: string[];
}

export const sampleFounders: Founder[] = [
  {
    id: "f1",
    name: "Alex Chen",
    company: "Quantum Leap AI",
    imageUrl: "/assets/founders/founder1.jpg",
    scores: {
      vision: 92,
      firstPrinciple: 88,
      marketPotential: 75,
      resilience: 84,
      secretInsight: 90
    },
    stage: "Ascent",
    story: "After failing with two previous startups, I realized that AI wasn't being applied to quantum computing in a way that would scale. My unique background in both fields led me to discover a new approach that reduces computational complexity by 67% while increasing accuracy.",
    tags: ["High Resilience", "Deep Tech", "Series A Ready"]
  },
  {
    id: "f2",
    name: "Maya Washington",
    company: "GreenPath Logistics",
    imageUrl: "/assets/founders/founder2.jpg", 
    scores: {
      vision: 86,
      firstPrinciple: 79,
      marketPotential: 94,
      resilience: 88,
      secretInsight: 76
    },
    stage: "Ignition",
    story: "Growing up in a small town affected by climate change, I witnessed firsthand the impact of carbon-heavy industries. I built GreenPath to revolutionize logistics with electric fleets and AI-optimized routes that reduce emissions by 82% while maintaining competitive pricing.",
    tags: ["Moonshot Potential", "Climate Tech", "Pre-Seed"]
  },
  {
    id: "f3",
    name: "Jordan Taylor",
    company: "MicroFarm Network",
    imageUrl: "/assets/founders/founder3.jpg",
    scores: {
      vision: 95,
      firstPrinciple: 91,
      marketPotential: 82,
      resilience: 79,
      secretInsight: 93
    },
    stage: "Cruise",
    story: "The global food system is broken. After developing vertical farming technology for NASA, I realized we could deploy micro-farms in urban food deserts globally. Our decentralized approach reduces transportation costs by 90% while increasing nutrient density by 3x.",
    tags: ["High Vision", "AgTech", "Series B Ready"]
  }
];

export interface Milestone {
  id: string;
  stage: "Ignition" | "Ascent" | "Cruise";
  requirements: string[];
  funding: string;
  support: string[];
}

export const fundingMilestones: Milestone[] = [
  {
    id: "m1",
    stage: "Ignition",
    requirements: [
      "Founder narrative assessment",
      "Initial prototype or MVP",
      "Clear vision statement"
    ],
    funding: "$50,000 - $250,000",
    support: ["Mentoring", "Network Access", "MVP Refinement"]
  },
  {
    id: "m2",
    stage: "Ascent",
    requirements: [
      "Market validation", 
      "Initial customer traction",
      "Team expansion plan"
    ],
    funding: "$250,000 - $2,000,000",
    support: ["Strategic Partnerships", "Talent Acquisition", "Go-to-Market Strategy"]
  },
  {
    id: "m3",
    stage: "Cruise",
    requirements: [
      "Proven business model",
      "Scalable operations",
      "Exponential growth metrics"
    ],
    funding: "$2,000,000+",
    support: ["Global Expansion", "M&A Advisory", "Industry Leadership"]
  }
];

export const radarChartOptions = {
  categories: [
    "Vision",
    "First-Principle Thinking",
    "Market Potential",
    "Founder Resilience", 
    "Secret Insight"
  ],
  maxValue: 100,
};
