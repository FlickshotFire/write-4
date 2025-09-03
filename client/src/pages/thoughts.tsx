import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Lightbulb, Sparkles } from 'lucide-react';
import { FloatingNav } from '@/components/layout/FloatingNav';

interface Thought {
  id: string;
  content: string;
  authorName: string;
  authorImage: string;
  createdAt: string;
}

function ThoughtsPage() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        setLoading(true);
        // Use API in development, static data in production
        if (import.meta.env.MODE === 'development') {
          const response = await fetch('/api/thoughts');
          if (!response.ok) throw new Error('Failed to fetch thoughts');
          const data = await response.json();
          setThoughts(data);
        } else {
          // Import static data for production
          const { default: staticThoughts } = await import('@/data/thoughts.json');
          setThoughts(staticThoughts);
        }
      } catch (err) {
        console.error('Error fetching thoughts:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchThoughts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary">Loading thoughts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingNav />
      
      {/* Header */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 glow-purple">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-accent">Brain Waves</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Creative <span className="gradient-text">Thoughts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick insights, innovative ideas, and reflections on technology that spark innovation and drive the future forward.
            </p>
          </div>
        </div>
      </div>

      {/* Thoughts Feed */}
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-8">
          {thoughts.map((thought, index) => (
            <Link key={thought.id} href={`/thought/${thought.id}`}>
              <div 
                className="premium-card glass-card p-8 rounded-2xl transition-all duration-500 cursor-pointer group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <img 
                      src={thought.authorImage} 
                      alt={thought.authorName}
                      className="w-14 h-14 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Sparkles className="w-2 h-2 text-background" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-foreground">{thought.authorName}</span>
                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                      </div>
                      <div className="glass-card px-3 py-1 rounded-full">
                        <span className="text-muted-foreground text-sm font-medium">
                          {new Date(thought.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-foreground leading-relaxed group-hover:text-foreground/95 transition-colors">
                      {thought.content}
                    </p>
                    <div className="flex items-center justify-end mt-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-60 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {thoughts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No thoughts available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThoughtsPage;