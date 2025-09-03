import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Clock, Eye, ArrowLeft, BookOpen, Filter } from 'lucide-react';
import { FloatingNav } from '@/components/layout/FloatingNav';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageUrl: string;
  likes: number;
  comments: number;
  createdAt: string;
}

function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // Use API in development, static data in production
        if (import.meta.env.MODE === 'development') {
          const response = await fetch('/api/articles');
          if (!response.ok) throw new Error('Failed to fetch articles');
          const data = await response.json();
          setArticles(data);
        } else {
          // Import static data for production
          const { default: staticArticles } = await import('@/data/articles.json');
          setArticles(staticArticles);
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  const categories = ['All', ...new Set(articles.map(article => article.category))];
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary">Loading articles...</div>
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
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 glow-blue">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-primary">Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep insights, tutorials, and thought leadership content covering the latest in technology, AI, and innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center gap-2 glass-card p-2 rounded-xl">
              <Filter className="w-4 h-4 text-muted-foreground ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <article 
                className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticlesPage;