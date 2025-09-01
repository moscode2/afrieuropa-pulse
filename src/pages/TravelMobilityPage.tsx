import { sampleArticles } from '@/data/sampleArticles';
import Navbar from '@/components/Navbar';
import ArticleCard from '@/components/ArticleCard';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const TravelMobilityPage = () => {
  const travelArticles = sampleArticles.filter(article => 
    article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === 'travel-mobility'
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Travel & Mobility</h1>
          <p className="text-muted-foreground text-lg">
            Affordable travel tips, migration guidance, and mobility insights for the diaspora community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default TravelMobilityPage;