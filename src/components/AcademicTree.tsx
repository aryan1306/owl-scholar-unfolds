
import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Users, Calendar } from 'lucide-react';

interface Degree {
  id: number;
  title: string;
  institution: string;
  year: string;
  field: string;
  description: string;
}

const degrees: Degree[] = [
  {
    id: 1,
    title: "Bachelor of Philosophy",
    institution: "Delhi University",
    year: "2008",
    field: "Ethics & Logic",
    description: "Foundation in classical philosophical traditions and logical reasoning"
  },
  {
    id: 2,
    title: "Master of Philosophy", 
    institution: "Jawaharlal Nehru University",
    year: "2010",
    field: "Political Philosophy",
    description: "Specialized in contemporary political thought and social justice"
  },
  {
    id: 3,
    title: "Master of Philosophy",
    institution: "Oxford University", 
    year: "2012",
    field: "Philosophy of Mind",
    description: "Advanced study in consciousness and cognitive philosophy"
  },
  {
    id: 4,
    title: "Master of Philosophy",
    institution: "Cambridge University",
    year: "2014", 
    field: "Moral Philosophy",
    description: "Deep exploration of ethical frameworks and moral reasoning"
  },
  {
    id: 5,
    title: "Master of Philosophy",
    institution: "Harvard University",
    year: "2016",
    field: "Philosophy of Science", 
    description: "Intersection of scientific methodology and philosophical inquiry"
  },
  {
    id: 6,
    title: "PhD in Sociology",
    institution: "O.P. Jindal University",
    year: "2019",
    field: "Social Philosophy",
    description: "Synthesis of philosophical foundations with sociological analysis"
  }
];

const AcademicTree = () => {
  const [selectedDegree, setSelectedDegree] = useState<Degree | null>(null);
  const [visibleNodes, setVisibleNodes] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleNodes(prev => {
        if (prev.length < degrees.length) {
          return [...prev, prev.length + 1];
        }
        return prev;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-academia-deep-blue to-academia-forest-green relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-cormorant font-light text-gradient mb-6">
            Tree of Knowledge
          </h2>
          <p className="text-xl text-academia-cream/80 max-w-3xl mx-auto font-inter">
            A philosophical journey through five distinguished degrees, culminating in doctoral research 
            that bridges the wisdom of philosophy with the empirical insights of sociology.
          </p>
        </div>

        {/* Interactive Tree Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Tree Trunk */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-full bg-gradient-to-t from-academia-gold via-academia-emerald to-academia-gold opacity-60 rounded-full"></div>
          
          {/* Degree Nodes */}
          <div className="space-y-24">
            {degrees.map((degree, index) => (
              <div
                key={degree.id}
                className={`relative transition-all duration-1000 ${
                  visibleNodes.includes(degree.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 0 ? 'ml-0' : 'ml-auto'}`}
                style={{ maxWidth: '45%' }}
              >
                {/* Connection Line */}
                <div 
                  className={`absolute top-1/2 w-16 h-0.5 bg-academia-gold/60 ${
                    index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                  }`}
                ></div>
                
                {/* Degree Card */}
                <div 
                  className={`paper-texture rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 group ${
                    selectedDegree?.id === degree.id ? 'ring-2 ring-academia-gold shadow-xl' : ''
                  }`}
                  onClick={() => setSelectedDegree(selectedDegree?.id === degree.id ? null : degree)}
                >
                  {/* Card Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-academia-gold rounded-full flex items-center justify-center group-hover:bg-academia-emerald transition-colors duration-300">
                      {index < 5 ? (
                        <BookOpen className="w-6 h-6 text-academia-deep-blue" />
                      ) : (
                        <Award className="w-6 h-6 text-academia-deep-blue" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-cormorant font-semibold text-academia-deep-blue mb-1">
                        {degree.title}
                      </h3>
                      <p className="text-academia-forest-green font-inter font-medium">
                        {degree.institution}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-academia-forest-green/70">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{degree.year}</span>
                        </div>
                        <span className="font-medium">{degree.field}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    selectedDegree?.id === degree.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-academia-gold/20">
                      <p className="text-academia-forest-green/80 font-inter leading-relaxed">
                        {degree.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Integration Quote */}
        <div className="mt-20 text-center scroll-reveal">
          <blockquote className="text-2xl md:text-3xl font-cormorant italic text-academia-cream/90 max-w-4xl mx-auto">
            "Philosophy is the root system that nourishes the tree of sociological understanding, 
            drawing from deep wells of wisdom to inform our comprehension of human society."
          </blockquote>
          <cite className="block mt-6 text-academia-gold font-inter">— Dr. Kartikeya Raj Gupta</cite>
        </div>
      </div>

      {/* Floating Academic Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-academia-gold/10 rounded-full floating-element"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-academia-emerald/10 rounded-lg floating-element"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-academia-cream/10 rounded-full floating-element"></div>
    </section>
  );
};

export default AcademicTree;
