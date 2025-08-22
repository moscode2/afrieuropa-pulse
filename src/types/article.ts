export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: number;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Latest News', slug: 'news', description: 'Fast-moving updates from the diaspora' },
  { id: '2', name: 'Policy & Migration', slug: 'policy-migration', description: 'Guides and explainer articles' },
  { id: '3', name: 'Culture & Lifestyle', slug: 'culture-lifestyle', description: 'Diaspora food, music, family, fashion' },
  { id: '4', name: 'Profiles & Voices', slug: 'profiles-voices', description: 'Human stories and opinions' },
  { id: '5', name: 'Travel & Mobility', slug: 'travel-mobility', description: 'Affordable travel and migration tips' },
  { id: '6', name: 'Business & Jobs', slug: 'business-jobs', description: 'Diaspora entrepreneurs and job opportunities' },
  { id: '7', name: 'Events & Community', slug: 'events-community', description: 'Upcoming diaspora events and festivals' }
];