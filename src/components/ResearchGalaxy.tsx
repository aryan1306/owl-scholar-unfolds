
import React, { useState, useEffect } from 'react';
import { Search, BookOpen, Users, Calendar } from 'lucide-react';

interface ResearchArea {
  id: number;
  title: string;
  category: 'philosophy' | 'sociology' | 'interdisciplinary';
  description: string;
  publications: number;
  citations: number;
  keywords: string[];
  position: { x: number; y: number };
}

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Social Ethics",
    category: "philosophy",
    description: "Exploring moral frameworks in contemporary society and their practical applications",
    publications: 15,
    citations: 234,
    keywords: ["Ethics", "Society", "Morality", "Applied Philosophy"],
    position: { x: 20, y: 30 }
  },
  {
    id: 2,
    title: "Cultural Sociology", 
    category: "sociology",
    description: "Analyzing cultural patterns and their influence on social structures",
    publications: 12,
    citations: 189,
    keywords: ["Culture", "Society", "Social Structures", "Identity"],
    position: { x: 70, y: 20 }
  },
  {
    id: 3,
    title: "Philosophy of Social Science",
    category: "interdisciplinary", 
    description: "Examining methodological foundations of sociological research through philosophical lens",
    publications: 18,
    citations: 312,
    keywords: ["Methodology", "Epistemology", "Social Research", "Philosophy"],
    position: { x: 40, y: 60 }
  },
  {
    id: 4,
    title: "Political Philosophy",
    category: "philosophy",
    description: "Contemporary political thought and its implications for democratic societies",
    publications: 20,
    citations: 287,
    keywords: ["Politics", "Democracy", "Justice", "Political Theory"],
    position: { x: 80, y: 70 }
  },
  {
    id: 5,
    title: "Urban Sociology",
    category: "sociology", 
    description: "Understanding social dynamics in urban environments and metropolitan areas",
    publications: 10,
    citations: 156,
    keywords: ["Urban Studies", "Cities", "Social Dynamics", "Urbanization"],
    position: { x: 15, y: 80 }
  },
  {
    id: 6,
    title: "Ethics of Technology",
    category: "interdisciplinary",
    description: "Philosophical examination of technology's impact on society and human values",
    publications: 8,
    citations: 145,
    keywords: ["Technology", "Ethics", "Digital Society", "Innovation"],
    position: { x: 60, y: 25 }
  }
];

const ResearchGalaxy = () => {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);
  const [filter, setFilter] = useState<'all' | 'philosophy' | 'sociology' | 'interdisciplinary'>('all');
  const [visibleStars, setVisibleStars] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleStars(prev => {
        if (prev.length < researchAreas.length) {
          return [...prev, prev.length + 1];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const filteredAreas = researchAreas.filter(area => 
    filter === 'all' || area.category === filter
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'philosophy': return 'bg-academia-gold';
      case 'sociology': return 'bg-academia-emerald';
      case 'interdisciplinary': return 'bg-gradient-to-r from-academia-gold to-academia-emerald';
      default: return 'bg-academia-cream';
    }
  };

  return (
    <section className="py-20 bg-academia-deep-blue relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-cormorant font-light text-gradient mb-6">
            Research Universe
          </h2>
          <p className="text-xl text-academia-cream/80 max-w-3xl mx-auto font-inter mb-8">
            Navigate through interconnected research domains where philosophical inquiry 
            meets sociological investigation, creating new constellations of knowledge.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'philosophy', 'sociology', 'interdisciplinary'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-academia-gold text-academia-deep-blue'
                    : 'bg-academia-forest-green/30 text-academia-cream hover:bg-academia-gold/20'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Galaxy Visualization */}
        <div className="relative h-screen max-h-[600px] bg-gradient-radial from-academia-forest-green/20 to-academia-deep-blue rounded-3xl overflow-hidden">
          {/* Background Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-academia-cream/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Research Area Stars */}
          {filteredAreas.map((area, index) => (
            <div
              key={area.id}
              className={`absolute cursor-pointer transition-all duration-500 ${
                visibleStars.includes(area.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              style={{
                left: `${area.position.x}%`,
                top: `${area.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setSelectedArea(selectedArea?.id === area.id ? null : area)}
            >
              {/* Star Glow Effect */}
              <div className="absolute inset-0 animate-pulse">
                <div className={`w-4 h-4 ${getCategoryColor(area.category)} rounded-full blur-sm opacity-60`}></div>
              </div>
              
              {/* Main Star */}
              <div className={`relative w-4 h-4 ${getCategoryColor(area.category)} rounded-full hover:scale-150 transition-transform duration-300`}>
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-academia-gold/30 animate-ping"></div>
              </div>
              
              {/* Research Area Label */}
              <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                selectedArea?.id === area.id || visibleStars.includes(area.id) ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-academia-forest-green/90 text-academia-cream px-3 py-1 rounded-full text-sm font-inter font-medium">
                  {area.title}
                </div>
              </div>
            </div>
          ))}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {filteredAreas.map((area, i) => 
              filteredAreas.slice(i + 1).map((otherArea, j) => {
                const hasCommonKeywords = area.keywords.some(keyword => 
                  otherArea.keywords.includes(keyword)
                );
                
                if (!hasCommonKeywords) return null;
                
                return (
                  <line
                    key={`${area.id}-${otherArea.id}`}
                    x1={`${area.position.x}%`}
                    y1={`${area.position.y}%`}
                    x2={`${otherArea.position.x}%`}
                    y2={`${otherArea.position.y}%`}
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                );
              })
            )}
          </svg>
        </div>

        {/* Selected Research Area Details */}
        {selectedArea && (
          <div className="mt-12 paper-texture rounded-2xl p-8 max-w-4xl mx-auto animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-6 h-6 ${getCategoryColor(selectedArea.category)} rounded-full`}></div>
                  <h3 className="text-3xl font-cormorant font-semibold text-academia-deep-blue">
                    {selectedArea.title}
                  </h3>
                </div>
                <p className="text-academia-forest-green/80 font-inter leading-relaxed mb-6">
                  {selectedArea.description}
                </p>
                
                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {selectedArea.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-academia-emerald/20 text-academia-emerald rounded-full text-sm font-inter"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Research Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <BookOpen className="w-5 h-5 text-academia-gold" />
                      <span className="text-2xl font-cormorant font-bold text-academia-deep-blue">
                        {selectedArea.publications}
                      </span>
                    </div>
                    <p className="text-academia-forest-green text-sm font-inter">Publications</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Search className="w-5 h-5 text-academia-emerald" />
                      <span className="text-2xl font-cormorant font-bold text-academia-deep-blue">
                        {selectedArea.citations}
                      </span>
                    </div>
                    <p className="text-academia-forest-green text-sm font-inter">Citations</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="text-center">
                  <span className={`inline-block px-4 py-2 ${getCategoryColor(selectedArea.category)} text-academia-deep-blue rounded-full font-inter font-semibold`}>
                    {selectedArea.category.charAt(0).toUpperCase() + selectedArea.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchGalaxy;
