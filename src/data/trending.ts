export interface TrendingProduct {
  id: string;
  rank: number;
  title: string;
  description: string;
  image: string;
  trend: {
    percentage: number;
    direction: 'up' | 'down';
  };
  category: string;
}

export const trendingProducts: TrendingProduct[] = [
  {
    id: "smart-planner",
    rank: 1,
    title: "Smart Digital Planner & Journal",
    description: "The must-have productivity tool that's taking the professional world by storm",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3",
    trend: {
      percentage: 85,
      direction: 'up'
    },
    category: "Productivity"
  },
  {
    id: "silk-sleep-set",
    rank: 2,
    title: "Luxury Silk Sleep Set",
    description: "The beauty sleep essential that's dominating social media",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3",
    trend: {
      percentage: 72,
      direction: 'up'
    },
    category: "Lifestyle"
  },
  {
    id: "eco-beauty-kit",
    rank: 3,
    title: "Sustainable Beauty Kit",
    description: "The eco-friendly beauty revolution everyone's talking about",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3",
    trend: {
      percentage: 65,
      direction: 'up'
    },
    category: "Beauty"
  },
  {
    id: "smart-yoga-mat",
    rank: 4,
    title: "Smart Yoga Mat Pro",
    description: "Revolutionary yoga mat with AI-powered pose correction",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3",
    trend: {
      percentage: 58,
      direction: 'up'
    },
    category: "Fitness"
  },
  {
    id: "wellness-tracker",
    rank: 5,
    title: "Holistic Wellness Tracker",
    description: "The all-in-one health monitoring system that's changing lives",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3",
    trend: {
      percentage: 52,
      direction: 'up'
    },
    category: "Health"
  },
  {
    id: "mindfulness-app",
    rank: 6,
    title: "Mindfulness & Meditation App",
    description: "Your personal zen companion for stress-free living",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3",
    trend: {
      percentage: 45,
      direction: 'up'
    },
    category: "Wellness"
  },
  {
    id: "smart-water-bottle",
    rank: 7,
    title: "Smart Hydration Tracker Bottle",
    description: "Stay perfectly hydrated with AI-powered hydration tracking",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3",
    trend: {
      percentage: 40,
      direction: 'up'
    },
    category: "Health"
  }
];