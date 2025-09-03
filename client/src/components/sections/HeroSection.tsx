import { Rocket, Play, ChevronDown, Zap, Sparkles, Crown, Gem, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { FloatingElements } from '@/components/ui/FloatingElements';
import { TypewriterText } from '@/components/ui/TypewriterText';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Enhanced Animated Background */}
      <ParticleBackground particleCount={150} color="#3b82f6" speed={0.002} size={3} />
      <FloatingElements />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          {/* Premium Main Heading with Typewriter Effect */}
          <h1 className="premium-heading text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight animate-slide-up mt-20">
            <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
              <TypewriterText 
                words={['Create.', 'Teach.', 'Inspire.']}
                className="gradient-text animate-gradient"
                speed={150}
                deleteSpeed={100}
                delayBetweenWords={2000}
                loop={true}
              />
            </div>
          </h1>
          
          {/* Premium Subtitle */}
          <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed mb-6">
              Where cutting-edge <span className="text-primary font-medium glow-blue">technology</span> meets 
              <br className="hidden md:block" />
              transformative <span className="text-accent font-medium glow-purple">education</span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80">
              Discover premium content through interactive 
              <span className="text-primary"> articles</span>, 
              <span className="text-accent"> innovative thoughts</span>, and 
              <span className="text-primary"> immersive learning experiences</span>.
            </p>
          </div>
          
          {/* Premium Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('#articles')}
              className="btn-premium px-10 py-5 rounded-2xl text-lg font-semibold group"
              data-testid="button-explore-content"
            >
              <Rocket className="inline-block w-5 h-5 mr-3 group-hover:animate-pulse" />
              Explore Premium Content
            </button>
            <button 
              onClick={() => scrollToSection('#videos')}
              className="glass-card px-10 py-5 rounded-2xl text-lg font-semibold border-2 border-accent/30 hover:border-accent transition-all duration-300 group glow-purple"
              data-testid="button-watch-videos"
            >
              <Play className="inline-block w-5 h-5 mr-3 group-hover:text-accent transition-colors" />
              Watch Video Courses
            </button>
          </div>
          
          {/* Code Snippet - Moved Down */}
          <div className={`mb-12 animate-fade-in transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full text-sm font-medium glow-blue">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <code className="text-accent font-mono">
                const innovation = () =&gt; &#123; return 'AI + Education + Creativity'; &#125;
              </code>
              <Zap className="w-4 h-4 text-accent animate-pulse" />
            </div>
          </div>

          {/* Premium Scroll Indicator */}
          <div className={`text-sm text-muted-foreground/60 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-wider font-medium">Scroll to Discover</span>
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
