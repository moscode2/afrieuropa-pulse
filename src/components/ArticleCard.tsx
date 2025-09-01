import { Article } from '@/types/article';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'small';
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  const cardClasses = {
    default: "group hover:shadow-lg transition-all duration-300",
    featured: "group hover:shadow-xl transition-all duration-300 border-primary/20",
    small: "group hover:shadow-md transition-all duration-300"
  };

  const imageClasses = {
    default: "h-48 w-full object-cover rounded-t-lg",
    featured: "h-64 w-full object-cover rounded-t-lg",
    small: "h-32 w-full object-cover rounded-t-lg"
  };

  const titleClasses = {
    default: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2",
    featured: "text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3",
    small: "text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2"
  };

  return (
    <Card className={`${cardClasses[variant]} card-shadow hover:card-shadow-hover overflow-hidden`}>
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className={imageClasses[variant]}
        />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {article.category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className={titleClasses[variant]}>
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mt-2 text-sm line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
          <Link to={`/article/${article.id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;