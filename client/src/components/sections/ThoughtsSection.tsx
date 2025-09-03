import { Plus, Lightbulb, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

function ThoughtsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('thoughts');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  const thoughts = [
    {
      id: 1,
      content: "The future of AI isn't just about replacing human tasks—it's about augmenting human creativity. Every breakthrough in machine learning should enhance our ability to solve complex problems, not eliminate the human element.",
      authorName: "Aman Bhardwaj",
      authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
      likes: 42,
      comments: 8,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      content: "Just finished implementing a Three.js particle system that responds to user interaction. The intersection of WebGL and creative coding never fails to amaze me. #WebGL #ThreeJS #CreativeCoding",
      authorName: "Aman Bhardwaj",
      authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
      likes: 67,
      comments: 12,
      timeAgo: "1 day ago",
      codeSnippet: "const particles = new THREE.BufferGeometry();\n// Magic happens here ✨",
    },
    {
      id: 3,
      content: "Education technology is evolving rapidly, but we often forget the most important aspect: making learning enjoyable. My latest project focuses on gamifying complex technical concepts. Learning should feel like an adventure, not a chore.",
      authorName: "Aman Bhardwaj",
      authorImage: "https://i.ibb.co/rGqGDYNF/Whats-App-Image-2025-08-24-at-9-13-07-AM.jpg",
      likes: 91,
      comments: 18,
      timeAgo: "3 days ago",
    },
  ];

  return (
    <section id="thoughts" className="py-24 relative overflow-hidden" data-testid="thoughts-section">
      {/* Premium Section Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 glow-purple">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span className="text-accent">Brain Waves</span>
          </div>
          <h2 className="premium-heading text-5xl md:text-7xl mb-6">
            Creative <span className="gradient-text animate-gradient">Thoughts</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Quick insights, innovative ideas, and reflections on technology
            <br className="hidden md:block" />
            that <span className="text-accent font-medium">spark innovation</span> and drive the future forward.
          </p>
        </div>
        
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {thoughts.map((thought, index) => (
            <Link key={thought.id} href={`/thought/${thought.id}`}>
              <div 
                className="premium-card glass-card p-10 rounded-2xl mb-8 transition-all duration-500 cursor-pointer group hover:scale-[1.02] animate-fade-in"
                data-testid={`thought-card-${thought.id}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                <div className="relative">
                  <img 
                    src={thought.authorImage} 
                    alt={thought.authorName}
                    className="w-16 h-16 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-background" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-foreground text-lg">{thought.authorName}</span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                    <div className="glass-card px-3 py-1 rounded-full">
                      <span className="text-muted-foreground text-sm font-medium">{thought.timeAgo}</span>
                    </div>
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed text-lg group-hover:text-foreground/95 transition-colors">
                    {thought.content}
                  </p>
                  {thought.codeSnippet && (
                    <div className="glass-card p-6 rounded-xl mb-6 border border-accent/20">
                      <code className="text-accent text-sm font-mono whitespace-pre leading-relaxed">
                        {thought.codeSnippet}
                      </code>
                    </div>
                  )}
                  <div className="flex items-center justify-end">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-60 transition-opacity" />
                  </div>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            className="glass-card border-2 border-accent/30 text-accent hover:border-accent px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 group glow-purple"
            data-testid="button-view-all-thoughts"
          >
            <Plus className="inline-block w-5 h-5 mr-3 group-hover:rotate-90 transition-transform" />
            Explore More Thoughts
          </button>
        </div>
      </div>
    </section>
  );
}

export { ThoughtsSection };
export default ThoughtsSection;
