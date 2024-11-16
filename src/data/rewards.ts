export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  image: string;
}

export const achievements: Achievement[] = [
  {
    id: "first-visit",
    title: "Welcome Queen! 👑",
    description: "Visit TrendSpotter for the first time",
    points: 100,
    icon: "✨"
  },
  {
    id: "product-explorer",
    title: "Style Scout 🔍",
    description: "View 3 different products in detail",
    points: 150,
    icon: "🔍"
  },
  {
    id: "category-master",
    title: "Trend Maven 💫",
    description: "Browse products from all categories",
    points: 200,
    icon: "💫"
  },
  {
    id: "daily-visitor",
    title: "Daily Diva ⭐",
    description: "Visit TrendSpotter 3 days in a row",
    points: 300,
    icon: "⭐"
  }
];

export const rewards: Reward[] = [
  {
    id: "exclusive-early-access",
    title: "Early Access Pass",
    description: "Get 24h early access to new product launches",
    pointsCost: 500,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  },
  {
    id: "vip-discount",
    title: "VIP Discount",
    description: "15% off your next purchase",
    pointsCost: 750,
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
  }
];