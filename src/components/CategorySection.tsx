import { Article } from '@/types/article';
import ArticleCard from './ArticleCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  description: string;
  articles: Article[];
  viewAllLink?: string;
}

const CategorySection = ({ title, description, articles, viewAllLink }: CategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>
          
          {viewAllLink && (
            <Button variant="outline" className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to={viewAllLink}>
                <span>View All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Show More Button for Mobile */}
        {viewAllLink && (
          <div className="mt-8 text-center md:hidden">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to={viewAllLink}>Load More Articles</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;