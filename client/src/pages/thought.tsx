import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { type Thought } from '@shared/schema';

function ThoughtPage() {
  const [, params] = useRoute('/thought/:id');
  const [thought, setThought] = useState<Thought | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThought = async () => {
      if (!params?.id) return;
      
      try {
        setLoading(true);
        // Use API in development, static data in production
        if (import.meta.env.MODE === 'development') {
          const response = await fetch(`/api/thoughts/${params.id}`);
          if (!response.ok) {
            throw new Error('Thought not found');
          }
          const data = await response.json();
          setThought(data);
        } else {
          // Import static data for production
          const { default: staticThoughts } = await import('@/data/thoughts.json');
          const foundThought = staticThoughts.find(t => t.id === params.id);
          if (!foundThought) {
            throw new Error('Thought not found');
          }
          setThought(foundThought);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load thought');
      } finally {
        setLoading(false);
      }
    };

    fetchThought();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading thought...</p>
        </div>
      </div>
    );
  }

  if (error || !thought) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Thought Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The thought you are looking for does not exist.'}</p>
          <Link href="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <button className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Thought Content */}
      <article className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Author Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <img 
                src={thought.authorImage} 
                alt={thought.authorName}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{thought.authorName}</h2>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(thought.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Thought Content */}
        <div className="glass-card rounded-xl p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
              {thought.content}
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-border pt-8">
          <div className="flex items-center justify-center">
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Related Thoughts */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">More Thoughts</h3>
            <div className="text-center">
              <Link 
                href="/#thoughts" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                View all thoughts →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ThoughtPage;