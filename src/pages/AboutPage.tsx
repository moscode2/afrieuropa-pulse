import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Diaspora Lens</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Amplifying African voices and stories across Europe. Your trusted source for diaspora news, culture, and community insights.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-primary" />
            Our Mission
          </h2>
          <p className="text-muted-foreground mb-6">
            Diaspora Lens / AfriEuropa News is dedicated to serving the vibrant African diaspora community across Europe. 
            We provide comprehensive coverage of news, policy updates, cultural celebrations, and community stories that matter 
            to Africans living in European countries.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Users className="w-6 h-6 mr-2 text-primary" />
            Our Community
          </h2>
          <p className="text-muted-foreground mb-6">
            From migration policy updates to cultural festivals, from business opportunities to travel tips, we cover the 
            stories and information that connect our community across borders. Our platform serves as a bridge between 
            African heritage and European opportunities.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-primary" />
            Our Values
          </h2>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li><strong>Authenticity:</strong> We tell genuine stories from the diaspora community</li>
            <li><strong>Accuracy:</strong> We provide reliable, fact-checked information</li>
            <li><strong>Community:</strong> We strengthen connections within the diaspora</li>
            <li><strong>Diversity:</strong> We celebrate the rich diversity of African cultures</li>
            <li><strong>Empowerment:</strong> We provide information that helps our community thrive</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-primary" />
            Support Our Work
          </h2>
          <p className="text-muted-foreground">
            Diaspora Lens is an independent media platform committed to serving our community. Your support helps us 
            continue providing quality journalism, community coverage, and essential information for the African diaspora 
            across Europe.
          </p>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;