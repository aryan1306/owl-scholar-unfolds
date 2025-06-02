
import React, { useState, useEffect } from 'react';
import { MessageSquare, BookOpen, Users, GraduationCap } from 'lucide-react';

interface DialogueBubble {
  id: number;
  speaker: 'student' | 'professor';
  text: string;
  position: { x: number; y: number };
  delay: number;
}

const socraticDialogue: DialogueBubble[] = [
  {
    id: 1,
    speaker: 'student',
    text: "Professor, how can philosophy help us understand modern society?",
    position: { x: 20, y: 30 },
    delay: 0
  },
  {
    id: 2,
    speaker: 'professor', 
    text: "What do you think philosophy fundamentally asks us to do?",
    position: { x: 70, y: 25 },
    delay: 2000
  },
  {
    id: 3,
    speaker: 'student',
    text: "To question our assumptions?",
    position: { x: 25, y: 60 },
    delay: 4000
  },
  {
    id: 4,
    speaker: 'professor',
    text: "Precisely! And when we question social assumptions, we begin to see the hidden structures that shape our world.",
    position: { x: 65, y: 70 },
    delay: 6000
  }
];

const TeachingPhilosophy = () => {
  const [visibleBubbles, setVisibleBubbles] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<'dialogue' | 'approach' | 'methods'>('dialogue');

  useEffect(() => {
    socraticDialogue.forEach((bubble) => {
      setTimeout(() => {
        setVisibleBubbles(prev => [...prev, bubble.id]);
      }, bubble.delay);
    });
  }, []);

  const teachingPrinciples = [
    {
      icon: MessageSquare,
      title: "Socratic Inquiry",
      description: "Questions that lead students to discover truths rather than passive reception of knowledge"
    },
    {
      icon: BookOpen,
      title: "Interdisciplinary Integration", 
      description: "Weaving philosophical concepts with sociological insights for holistic understanding"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Creating communities of inquiry where students learn from each other"
    },
    {
      icon: GraduationCap,
      title: "Critical Thinking",
      description: "Developing analytical skills that transcend academic boundaries"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-academia-forest-green to-academia-emerald relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-cormorant font-light text-academia-cream mb-6">
            Teaching Philosophy
          </h2>
          <p className="text-xl text-academia-cream/90 max-w-3xl mx-auto font-inter">
            Education as dialogue, inquiry as discovery, and wisdom as the goal of all learning
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-academia-deep-blue/30 rounded-full p-2 flex space-x-2">
            {[
              { key: 'dialogue', label: 'Socratic Method' },
              { key: 'approach', label: 'Teaching Approach' },
              { key: 'methods', label: 'Pedagogical Methods' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as any)}
                className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-academia-gold text-academia-deep-blue'
                    : 'text-academia-cream hover:bg-academia-gold/20'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {/* Socratic Dialogue Visualization */}
          {activeSection === 'dialogue' && (
            <div className="relative h-96 bg-academia-deep-blue/20 rounded-3xl overflow-hidden animate-fade-in">
              <div className="absolute inset-0 p-8">
                {socraticDialogue.map((bubble) => (
                  <div
                    key={bubble.id}
                    className={`absolute transition-all duration-1000 ${
                      visibleBubbles.includes(bubble.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{
                      left: `${bubble.position.x}%`,
                      top: `${bubble.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className={`max-w-xs p-4 rounded-2xl shadow-lg ${
                      bubble.speaker === 'professor'
                        ? 'bg-academia-gold text-academia-deep-blue'
                        : 'bg-academia-cream text-academia-forest-green'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${
                          bubble.speaker === 'professor' ? 'bg-academia-deep-blue' : 'bg-academia-emerald'
                        }`}></div>
                        <span className="text-xs font-inter font-semibold uppercase tracking-wide">
                          {bubble.speaker}
                        </span>
                      </div>
                      <p className="font-inter text-sm leading-relaxed">{bubble.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Teaching Approach */}
          {activeSection === 'approach' && (
            <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
              <div className="space-y-8">
                {teachingPrinciples.map((principle, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-academia-gold rounded-full flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-academia-deep-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cormorant font-semibold text-academia-cream mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-academia-cream/80 font-inter leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="paper-texture rounded-2xl p-8">
                <h3 className="text-2xl font-cormorant font-semibold text-academia-deep-blue mb-6">
                  Core Philosophy
                </h3>
                <blockquote className="text-lg font-cormorant italic text-academia-forest-green mb-6 leading-relaxed">
                  "True education is not the filling of a vessel, but the lighting of a fire. 
                  In every classroom, I seek to kindle that flame of inquiry that burns away 
                  ignorance and illuminates understanding."
                </blockquote>
                <p className="text-academia-forest-green/80 font-inter leading-relaxed">
                  My pedagogical approach integrates the rigorous questioning of philosophical tradition 
                  with the empirical insights of sociological research, creating a dynamic learning 
                  environment where theory meets practice.
                </p>
              </div>
            </div>
          )}

          {/* Pedagogical Methods */}
          {activeSection === 'methods' && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              {[
                {
                  title: "Case Study Analysis",
                  description: "Real-world scenarios examined through both philosophical and sociological lenses",
                  examples: ["Urban ethics dilemmas", "Technology and society", "Cultural conflicts"]
                },
                {
                  title: "Dialectical Seminars", 
                  description: "Student-led discussions that explore opposing viewpoints and synthesis",
                  examples: ["Justice vs. Liberty", "Individual vs. Society", "Tradition vs. Progress"]
                },
                {
                  title: "Research Integration",
                  description: "Bridging theoretical understanding with empirical investigation",
                  examples: ["Philosophical field work", "Ethics in research", "Theory-practice nexus"]
                }
              ].map((method, index) => (
                <div key={index} className="paper-texture rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-cormorant font-semibold text-academia-deep-blue mb-4">
                    {method.title}
                  </h3>
                  <p className="text-academia-forest-green/80 font-inter mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-inter font-semibold text-academia-emerald uppercase tracking-wide">
                      Examples:
                    </h4>
                    <ul className="space-y-1">
                      {method.examples.map((example, i) => (
                        <li key={i} className="text-sm text-academia-forest-green/70 font-inter flex items-center space-x-2">
                          <div className="w-1 h-1 bg-academia-gold rounded-full"></div>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Teaching Quote */}
        <div className="mt-16 text-center scroll-reveal">
          <blockquote className="text-2xl md:text-3xl font-cormorant italic text-academia-cream/90 max-w-4xl mx-auto">
            "The best teachers are those who show you where to look, but don't tell you what to see."
          </blockquote>
          <cite className="block mt-6 text-academia-gold font-inter">— Teaching Philosophy</cite>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-academia-gold/10 rounded-full floating-element"></div>
      <div className="absolute bottom-20 left-8 w-20 h-20 bg-academia-cream/10 rounded-lg floating-element"></div>
    </section>
  );
};

export default TeachingPhilosophy;
