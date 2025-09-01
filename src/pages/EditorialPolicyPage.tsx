import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, Eye, Users } from 'lucide-react';

const EditorialPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">Editorial Policy</h1>
          <p className="text-xl text-muted-foreground">
            Our commitment to accurate, fair, and ethical journalism for the African diaspora community.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-primary" />
              Editorial Independence
            </h2>
            <p className="text-muted-foreground">
              Diaspora Lens maintains editorial independence in all our reporting and content creation. Our editorial 
              decisions are made based on news value, community interest, and journalistic merit, free from external 
              political or commercial influence.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-primary" />
              Accuracy and Fact-Checking
            </h2>
            <p className="text-muted-foreground mb-4">
              We are committed to publishing accurate, truthful information. Our editorial process includes:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Verification of facts through multiple sources</li>
              <li>• Clear attribution of information and quotes</li>
              <li>• Prompt correction of errors when identified</li>
              <li>• Transparent sourcing and methodology</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-primary" />
              Transparency
            </h2>
            <p className="text-muted-foreground">
              We believe in transparency with our readers. We clearly identify opinion pieces, sponsored content, 
              and partnerships. Our writers disclose any potential conflicts of interest, and we maintain clear 
              boundaries between editorial and commercial content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <Users className="w-6 h-6 mr-2 text-primary" />
              Community Standards
            </h2>
            <p className="text-muted-foreground mb-4">
              Our coverage reflects our commitment to the diaspora community:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Respectful representation of diverse African cultures and perspectives</li>
              <li>• Sensitive handling of migration and integration stories</li>
              <li>• Amplification of underrepresented voices</li>
              <li>• Focus on constructive, solution-oriented reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Content Guidelines</h2>
            <p className="text-muted-foreground mb-4">We adhere to the following content standards:</p>
            <ul className="text-muted-foreground space-y-2">
              <li>• No discriminatory language or hate speech</li>
              <li>• Balanced coverage that considers multiple perspectives</li>
              <li>• Protection of sources and sensitive information</li>
              <li>• Respect for privacy and dignity of individuals</li>
              <li>• Clear distinction between news reporting and opinion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Corrections Policy</h2>
            <p className="text-muted-foreground">
              When we make errors, we correct them promptly and transparently. Significant corrections are published 
              with clear indication of what was changed and when. Readers can report inaccuracies to our editorial 
              team at corrections@diasporalens.eu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Our Editorial Team</h2>
            <p className="text-muted-foreground">
              For editorial inquiries, story suggestions, or concerns about our coverage, please contact us at 
              editor@diasporalens.eu. We value feedback from our community and strive to continuously improve 
              our journalism.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EditorialPolicyPage;