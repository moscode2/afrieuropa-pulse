import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Coffee, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    about: [
      { name: 'About Us', href: '/about' },
      { name: 'Editorial Policy', href: '/editorial-policy' },
      { name: 'Our Team', href: '/about' },
      { name: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/privacy' },
      { name: 'Advertise', href: '/contact' }
    ],
    categories: [
      { name: 'Latest News', href: '/news' },
      { name: 'Policy & Migration', href: '/policy-migration' },
      { name: 'Culture & Lifestyle', href: '/culture-lifestyle' },
      { name: 'Business & Jobs', href: '/business-jobs' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/diaspora-lens', color: 'hover:text-blue-600' },
    { name: 'Twitter/X', icon: Twitter, href: 'https://twitter.com/diasporalens', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/diasporalens', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@diasporalens', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">DL</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Diaspora Lens</h3>
                <p className="text-xs text-muted-foreground">AfriEuropa News</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Amplifying African voices and stories across Europe. Your trusted source for diaspora news, culture, and community insights.
            </p>
            
            {/* Support Button */}
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Coffee className="w-4 h-4" />
              <span>Support Our Work</span>
            </Button>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-medium text-foreground mb-3 text-sm">Follow Us</h5>
                <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground ${social.color} transition-colors`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Diaspora Lens. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span className="text-muted-foreground text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-muted-foreground text-sm">for the diaspora community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;