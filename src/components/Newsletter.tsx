import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our weekly newsletter with the latest diaspora news.",
    });
  };

  if (isSubscribed) {
    return (
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">You're all set!</h2>
              <p className="text-muted-foreground">
                Thank you for subscribing to Diaspora Lens. You'll receive our weekly newsletter with the latest news and insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Stay Connected</h2>
              <p className="text-muted-foreground text-lg">
                Get weekly insights on diaspora news, migration policies, and community stories delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap">
                Subscribe Free
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;