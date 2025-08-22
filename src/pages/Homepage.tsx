import { sampleArticles } from '@/data/sampleArticles';
import { categories } from '@/types/article';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Homepage = () => {
  // Get featured article and side articles for hero section
  const featuredArticle = sampleArticles.find(article => article.featured) || sampleArticles[0];
  const sideArticles = sampleArticles.filter(article => !article.featured).slice(0, 3);

  // Group articles by category for sections
  const getArticlesByCategory = (categorySlug: string, limit: number = 3) => {
    return sampleArticles
      .filter(article => 
        article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categorySlug
      )
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero featuredArticle={featuredArticle} sideArticles={sideArticles} />

      {/* Latest News Section */}
      <CategorySection
        title="Latest News"
        description="Fast-moving updates from the diaspora community"
        articles={getArticlesByCategory('latest-news')}
        viewAllLink="/news"
      />

      {/* Policy & Migration Section */}
      <div className="bg-muted/30">
        <CategorySection
          title="Policy & Migration"
          description="Essential guides and explainer articles for diaspora navigation"
          articles={getArticlesByCategory('policy-migration')}
          viewAllLink="/policy-migration"
        />
      </div>

      {/* Culture & Lifestyle Section */}
      <CategorySection
        title="Culture & Lifestyle"
        description="Celebrating diaspora food, music, family traditions, and fashion"
        articles={getArticlesByCategory('culture-lifestyle')}
        viewAllLink="/culture-lifestyle"
      />

      {/* Business & Jobs Section */}
      <div className="bg-muted/30">
        <CategorySection
          title="Business & Jobs"
          description="Diaspora entrepreneurs and career opportunities across Europe"
          articles={getArticlesByCategory('business-jobs')}
          viewAllLink="/business-jobs"
        />
      </div>

      {/* Travel & Mobility Section */}
      <CategorySection
        title="Travel & Mobility"
        description="Affordable travel tips and migration guidance for the community"
        articles={getArticlesByCategory('travel-mobility')}
        viewAllLink="/travel-mobility"
      />

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;