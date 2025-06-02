
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';

const PhilanthropicWork = () => {
  const philanthropicProjects = [
    {
      title: "Rural Education Initiative",
      description: "Establishing philosophy discussion circles in rural communities, bringing critical thinking education to underserved areas.",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop",
      impact: "500+ students reached",
      icon: BookOpen
    },
    {
      title: "Community Dialogue Programs", 
      description: "Facilitating inter-community conversations on social justice and ethical living in marginalized neighborhoods.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop",
      impact: "25+ communities engaged",
      icon: Users
    },
    {
      title: "Ethics in Action Workshop Series",
      description: "Free workshops connecting philosophical principles to practical social problems for local NGOs and activists.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=400&fit=crop", 
      impact: "50+ organizations trained",
      icon: Heart
    },
    {
      title: "Global Philosophy Exchange",
      description: "Cross-cultural philosophy forums connecting Indian thought traditions with international scholarly communities.",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=600&h=400&fit=crop",
      impact: "International network of 200+ scholars",
      icon: Globe
    },
    {
      title: "Environmental Ethics Campaign",
      description: "Promoting ecological consciousness through philosophical frameworks in forest conservation efforts.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop",
      impact: "15+ conservation projects supported",
      icon: Globe
    },
    {
      title: "Youth Mentorship Program", 
      description: "Guiding young minds in applying philosophical thinking to contemporary social challenges and career development.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=600&h=400&fit=crop",
      impact: "300+ youth mentored",
      icon: Users
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-academia-deep-blue to-academia-forest-green relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-academia-gold rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-16 md:w-24 h-16 md:h-24 bg-academia-emerald rounded-full blur-2xl floating-element"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Heart className="w-6 md:w-8 h-6 md:h-8 text-academia-gold mr-2 md:mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cormorant font-bold text-academia-cream">
              Philanthropic Endeavors
            </h2>
          </div>
          <p className="text-lg md:text-xl text-academia-cream/80 max-w-3xl mx-auto leading-relaxed px-4">
            Bridging the gap between philosophical inquiry and social action, 
            Dr. Gupta's community work demonstrates the practical application of ethical principles 
            in addressing contemporary social challenges.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="scroll-reveal px-4 md:px-0">
          <Carousel 
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {philanthropicProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="bg-academia-cream/95 backdrop-blur-sm border-academia-gold/20 hover:shadow-2xl transition-all duration-500 group h-full">
                    <CardContent className="p-0">
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-academia-deep-blue/50 to-transparent"></div>
                        <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-academia-gold/90 p-1.5 md:p-2 rounded-full">
                          <project.icon className="w-4 md:w-5 h-4 md:h-5 text-academia-deep-blue" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-cormorant font-bold text-academia-deep-blue mb-2 md:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-academia-forest-green mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-academia-emerald font-semibold text-xs md:text-sm">
                            Impact: {project.impact}
                          </span>
                          <div className="w-6 md:w-8 h-0.5 md:h-1 bg-academia-gold rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-academia-cream border-academia-gold text-academia-deep-blue hover:bg-academia-gold hover:text-academia-cream -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex bg-academia-cream border-academia-gold text-academia-deep-blue hover:bg-academia-gold hover:text-academia-cream -right-4 lg:-right-12" />
          </Carousel>
        </div>

        {/* Quote Section */}
        <div className="mt-12 md:mt-16 text-center scroll-reveal px-4">
          <div className="bg-academia-cream/10 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-academia-gold/20 max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-cormorant italic text-academia-cream mb-3 md:mb-4">
              "Philosophy without action is mere speculation; action without philosophy is blind."
            </blockquote>
            <cite className="text-academia-gold font-inter text-sm md:text-base">
              — Dr. Kartikeya Raj Gupta on Applied Ethics
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilanthropicWork;
