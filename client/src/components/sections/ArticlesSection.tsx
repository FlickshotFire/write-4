import { useState, useEffect } from 'react';
import { Heart, MessageCircle, ArrowRight, Plus, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'wouter';
import articlesData from '@/data/articles.json';

function ArticlesSection() {
  const [activeFilter, setActiveFilter] = useState('All Articles');
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
    
    const element = document.getElementById('articles');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  // Generate filters dynamically from articles data
  const allCategories = [...new Set(articlesData.map(article => article.category))];
  const filters = ['All Articles', ...allCategories];
  
  // Filter articles based on active filter
  const filteredArticles = activeFilter === 'All Articles' 
    ? articlesData 
    : articlesData.filter(article => article.category === activeFilter);

  return (
    <section id="articles" className="py-24 relative overflow-hidden" data-testid="articles-section">
      {/* Premium Section Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6 glow-blue">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary">Featured Content</span>
          </div>
          <h2 className="premium-heading text-5xl md:text-7xl mb-6">
            Premium <span className="gradient-text animate-gradient">Articles</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Deep dives into cutting-edge technology, development practices, and innovative solutions 
            <br className="hidden md:block" />
            that <span className="text-primary font-medium">shape the future</span> of software development.
          </p>
        </div>
        
        {/* Premium Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`premium-card glass-card px-8 py-4 rounded-2xl transition-all duration-300 ${
                activeFilter === filter
                  ? 'btn-premium text-foreground'
                  : 'hover:border-primary/30 hover:glow-blue'
              }`}
              data-testid={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className={`content-grid transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredArticles.map((article, index) => (
            <Link key={article.id} href={`/article/${article.id}`}>
              <article 
                className="premium-card glass-card rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group hover:scale-105 animate-fade-in"
                data-testid={`article-card-${article.id}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="glass-card px-3 py-1 text-primary text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:gradient-text transition-all duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="flex items-center text-primary group-hover:text-accent transition-colors" data-testid={`read-more-${article.id}`}>
                      <span className="font-medium mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            className="btn-premium px-10 py-5 rounded-2xl text-lg font-semibold group"
            data-testid="button-load-more-articles"
          >
            <Plus className="inline-block w-5 h-5 mr-3 group-hover:rotate-90 transition-transform" />
            Load More Premium Articles
          </button>
        </div>
      </div>
    </section>
  );
}

export { ArticlesSection };
export default ArticlesSection;
