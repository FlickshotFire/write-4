import { ExternalLink, Mail } from 'lucide-react';

function AboutSection() {
  const achievements = [
    "2+ years of hands-on development experience",
    "Specialized in AI, ML, and cutting-edge web technologies",
    "A curious engineer and a continuous learner",
  ];
  
  const details = [
       { label: "Focus Areas", value: "Everything I Learn", color: "text-accent" },
    { label: "Teaching Style", value: "Practical, Interactive And Bounties", color: "text-primary" },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-background to-secondary/20"
      data-testid="about-section"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About the <span className="gradient-text">Creator</span>
            </h2>
            <p className="text-xl text-foreground mb-6 leading-relaxed">
              I'm Aman Bhardwaj, a passionate Full-Stack Developer and AI Engineer dedicated to sharing knowledge 
              and empowering others through technology education.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
             I'm thrilled to welcome you to the Charvaka School. 
             As a computer science student, I've experienced firsthand the lack of engaging and high-quality learning resources for coding in traditional educational settings. 
             Having benefited greatly from freely accessible content, such as books, documentation and websites. 
             I wanted to give back to the global developer community that has helped me grow. 
             The Charvaka School is my attempt to bridge this gap and provide a platform where individuals can explore innovative ideas and learn cutting-edge concepts. 
             I'm excited to share this journey with you, and I hope you enjoy the experience!
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`} />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://amanbhardwaj.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-center inline-flex items-center justify-center"
                data-testid="link-view-portfolio"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </a>
              <button 
                className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                data-testid="button-get-in-touch"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="glass-card p-8 rounded-2xl">
              <img 
                src="https://i.ibb.co/21gkZyFD/Whats-App-Image-2025-09-02-at-13-23-23-cc4f993c.jpg" 
                alt="Professional developer portrait"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              
              <div className="space-y-4">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{detail.label}</span>
                    <span className={`text-sm ${detail.color}`}>{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
export default AboutSection;
