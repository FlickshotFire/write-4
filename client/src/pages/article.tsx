import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, Calendar, Clock, Eye, Share2 } from 'lucide-react';
import { type Article } from '@shared/schema';

function ArticlePage() {
  const [, params] = useRoute('/article/:id');
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!params?.id) return;
      
      try {
        setLoading(true);
        // Use API in development, static data in production
        if (import.meta.env.MODE === 'development') {
          const response = await fetch(`/api/articles/${params.id}`);
          if (!response.ok) {
            throw new Error('Article not found');
          }
          const data = await response.json();
          setArticle(data);
        } else {
          // Import static data for production
          const { default: staticArticles } = await import('@/data/articles.json');
          const foundArticle = staticArticles.find(a => a.id === params.id);
          if (!foundArticle) {
            throw new Error('Article not found');
          }
          setArticle(foundArticle);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The article you are looking for does not exist.'}</p>
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

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          {/* Article Meta */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(article.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              {article.likes || 0} views
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.imageUrl && (
          <div className="mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/\n/g, '<br />') 
            }} 
          />
        </div>

        {/* Share and Author Section */}
        <div className="border-t border-border pt-8">
          <div className="flex items-center justify-center mb-8">
            <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Author Section */}
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">About the Author</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                AB
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Aman Bhardwaj</h4>
                <p className="text-muted-foreground">Full-Stack Developer & AI Engineer</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Passionate about creating innovative solutions and sharing knowledge through writing and tutorials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticlePage;