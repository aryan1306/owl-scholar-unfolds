
import React, { useState } from 'react';
import { Calendar, User, Pen, Link } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuill, setShowQuill] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '', type: 'general' });
  };

  return (
    <section className="py-20 bg-gradient-to-t from-academia-deep-blue via-academia-forest-green to-academia-deep-blue relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-cormorant font-light text-gradient mb-6">
            Academic Collaboration
          </h2>
          <p className="text-xl text-academia-cream/90 max-w-3xl mx-auto font-inter">
            Connect for scholarly discourse, lecture invitations, or research collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Institution */}
            <div className="paper-texture rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-academia-gold rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-academia-deep-blue" />
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant font-semibold text-academia-deep-blue">
                    Academic Affiliation
                  </h3>
                  <p className="text-academia-forest-green font-inter">Professor of Sociology & Philosophy</p>
                </div>
              </div>
              <div className="space-y-4 text-academia-forest-green/80 font-inter">
                <p><strong>O.P. Jindal Global University</strong></p>
                <p>School of Liberal Arts & Humanities</p>
                <p>Sonipat, Haryana, India</p>
                <p>Email: k.gupta@jgu.edu.in</p>
              </div>
            </div>

            {/* Research Interests */}
            <div className="paper-texture rounded-2xl p-8">
              <h3 className="text-xl font-cormorant font-semibold text-academia-deep-blue mb-6">
                Collaboration Areas
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Social Ethics & Moral Philosophy',
                  'Philosophy of Social Science',
                  'Cultural Sociology',
                  'Political Philosophy',
                  'Ethics of Technology',
                  'Urban Studies'
                ].map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-academia-emerald rounded-full"></div>
                    <span className="text-academia-forest-green/80 font-inter">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <button className="w-full btn-academic text-left">
                <Calendar className="w-5 h-5 mr-3" />
                Schedule a Lecture
              </button>
              <button className="w-full btn-academic text-left">
                <Link className="w-5 h-5 mr-3" />
                Research Collaboration
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Animated Quill */}
            <div 
              className={`absolute -top-8 -right-8 transition-all duration-1000 ${
                showQuill ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-0 rotate-0'
              }`}
              onAnimationEnd={() => setShowQuill(false)}
            >
              <Pen className="w-16 h-16 text-academia-gold" />
            </div>

            <div className="paper-texture rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-cormorant font-semibold text-academia-deep-blue mb-8 text-center">
                Begin a Dialogue
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-academia-forest-green font-inter font-medium mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-academia-forest-green/30 rounded-lg bg-academia-cream/50 text-academia-deep-blue font-inter focus:outline-none focus:ring-2 focus:ring-academia-gold transition-all duration-300"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="lecture">Lecture Invitation</option>
                    <option value="research">Research Collaboration</option>
                    <option value="student">Student Guidance</option>
                    <option value="media">Media Interview</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-academia-forest-green font-inter font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-academia-forest-green/30 rounded-lg bg-academia-cream/50 text-academia-deep-blue font-inter focus:outline-none focus:ring-2 focus:ring-academia-gold transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-academia-forest-green font-inter font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-academia-forest-green/30 rounded-lg bg-academia-cream/50 text-academia-deep-blue font-inter focus:outline-none focus:ring-2 focus:ring-academia-gold transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-academia-forest-green font-inter font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-academia-forest-green/30 rounded-lg bg-academia-cream/50 text-academia-deep-blue font-inter focus:outline-none focus:ring-2 focus:ring-academia-gold transition-all duration-300"
                    placeholder="Brief subject line"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-academia-forest-green font-inter font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-academia-forest-green/30 rounded-lg bg-academia-cream/50 text-academia-deep-blue font-inter focus:outline-none focus:ring-2 focus:ring-academia-gold transition-all duration-300 resize-none"
                    placeholder="Share your thoughts, questions, or collaboration ideas..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => setShowQuill(true)}
                  className={`w-full btn-academic ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-academia-deep-blue border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center scroll-reveal">
          <blockquote className="text-2xl md:text-3xl font-cormorant italic text-academia-cream/90 max-w-4xl mx-auto">
            "In dialogue, we find not just answers, but better questions."
          </blockquote>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-16 w-12 h-12 bg-academia-gold/10 rounded-full floating-element"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-academia-emerald/10 rounded-lg floating-element"></div>
    </section>
  );
};

export default Contact;
