import { Article } from '@/types/article';
import { Button } from '@/components/ui/button';
import { Clock, User } from 'lucide-react';

interface HeroProps {
  featuredArticle: Article;
  sideArticles: Article[];
}

const Hero = ({ featuredArticle, sideArticles }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-primary to-accent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-3">
                    {featuredArticle.category}
                  </span>
                  
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors">
                    {featuredArticle.title}
                  </h1>
                  
                  <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} min read</span>
                      </div>
                      <span>{new Date(featuredArticle.publishedAt).toLocaleDateString()}</span>
                    </div>
                    
                    <Button size="sm" className="bg-white text-primary hover:bg-gray-100">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Headlines</h2>
            
            {sideArticles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <div className="flex space-x-3">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accent text-accent-foreground mb-2">
                        {article.category}
                      </span>
                      
                      <h3 className="text-white font-semibold text-sm group-hover:text-accent transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-xs text-gray-300">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;