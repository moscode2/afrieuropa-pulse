import { Article } from '@/types/article';
import heroMigration from '@/assets/hero-migration.jpg';
import culturalImage from '@/assets/culture-lifestyle.jpg';
import businessImage from '@/assets/business-jobs.jpg';
import travelImage from '@/assets/travel-mobility.jpg';

export const sampleArticles: Article[] = [
  // Featured Hero Article
  {
    id: '1',
    title: 'Germany Expands Chancenkarte Program: What It Means for African Migrants in 2025',
    excerpt: 'The German government announces significant changes to the Opportunity Card system, opening new pathways for skilled African professionals seeking to work in Europe.',
    content: 'Full article content would go here...',
    image: heroMigration,
    author: 'Amina Hassan',
    publishedAt: '2025-08-22',
    category: 'Policy & Migration',
    readTime: 8,
    featured: true
  },

  // Latest News
  {
    id: '2',
    title: 'EU Parliament Votes on New Migration Framework',
    excerpt: 'European lawmakers debate comprehensive immigration reform that could impact African diaspora communities across the continent.',
    image: heroMigration,
    author: 'David Okonkwo',
    publishedAt: '2025-08-22',
    category: 'Latest News',
    readTime: 5
  },
  {
    id: '3',
    title: 'Berlin African Film Festival Celebrates Diaspora Stories',
    excerpt: 'The annual festival showcases emerging filmmakers telling authentic stories of the African experience in Europe.',
    image: culturalImage,
    author: 'Fatima Kone',
    publishedAt: '2025-08-21',
    category: 'Latest News',
    readTime: 4
  },

  // Policy & Migration
  {
    id: '4',
    title: 'Complete Guide to EU Blue Card Application Process 2025',
    excerpt: 'Step-by-step instructions for African professionals applying for the EU Blue Card, including recent changes and requirements.',
    image: heroMigration,
    author: 'Samuel Adjei',
    publishedAt: '2025-08-20',
    category: 'Policy & Migration',
    readTime: 12
  },
  {
    id: '5',
    title: 'Student Visa to Work Permit: Success Stories from Nigeria',
    excerpt: 'Three graduates share their journey from student visas to permanent residency in European countries.',
    image: businessImage,
    author: 'Grace Nnaji',
    publishedAt: '2025-08-19',
    category: 'Policy & Migration',
    readTime: 7
  },

  // Culture & Lifestyle
  {
    id: '6',
    title: 'African Cuisine Takes Center Stage in Paris Restaurants',
    excerpt: 'How diaspora chefs are revolutionizing French dining with authentic African flavors and modern techniques.',
    image: culturalImage,
    author: 'Marie Diallo',
    publishedAt: '2025-08-21',
    category: 'Culture & Lifestyle',
    readTime: 6
  },
  {
    id: '7',
    title: 'Ankara Fashion Week Returns to London',
    excerpt: 'African fashion designers showcase traditional and contemporary designs at this year\'s highly anticipated event.',
    image: culturalImage,
    author: 'Kemi Adebayo',
    publishedAt: '2025-08-20',
    category: 'Culture & Lifestyle',
    readTime: 5
  },

  // Business & Jobs
  {
    id: '8',
    title: 'Tech Startup Founded by Ethiopian Entrepreneur Raises €2M',
    excerpt: 'Addis Ababa native creates fintech solution connecting African diaspora with home continent investments.',
    image: businessImage,
    author: 'Michael Tekle',
    publishedAt: '2025-08-21',
    category: 'Business & Jobs',
    readTime: 6
  },
  {
    id: '9',
    title: 'Remote Work Opportunities for African Professionals',
    excerpt: 'European companies increasingly hiring remote talent from Africa, creating new economic opportunities.',
    image: businessImage,
    author: 'Jennifer Achieng',
    publishedAt: '2025-08-19',
    category: 'Business & Jobs',
    readTime: 8
  },

  // Travel & Mobility
  {
    id: '10',
    title: 'Budget Travel: Exploring Europe on €500 a Month',
    excerpt: 'Practical tips for African travelers to explore European cities without breaking the bank.',
    image: travelImage,
    author: 'Omar El-Mansouri',
    publishedAt: '2025-08-20',
    category: 'Travel & Mobility',
    readTime: 9
  }
];