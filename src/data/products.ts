export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  fullDescription: string;
  features: string[];
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "smart-planner",
    title: "Smart Digital Planner & Journal",
    description: "AI-powered digital planner that adapts to your schedule and helps boost productivity",
    fullDescription: "Transform your daily planning with this intelligent digital planner that learns from your habits and helps you achieve more. Perfect for busy professionals who want to optimize their time and stay organized.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Productivity",
    features: [
      "AI-powered schedule optimization",
      "Habit tracking and insights",
      "Goal setting and progress monitoring",
      "Integration with popular calendar apps"
    ],
    specs: {
      "Compatibility": "iOS, Android, Web",
      "Cloud Sync": "Yes",
      "Offline Mode": "Available",
      "Updates": "Monthly"
    }
  },
  {
    id: "wellness-tracker",
    title: "Holistic Wellness Tracker",
    description: "Complete health monitoring system for sleep, stress, and activity",
    fullDescription: "Take control of your well-being with this comprehensive wellness tracker that monitors everything from sleep patterns to stress levels, helping you maintain a balanced lifestyle.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Health",
    features: [
      "24/7 heart rate monitoring",
      "Sleep quality analysis",
      "Stress level tracking",
      "Guided breathing exercises"
    ],
    specs: {
      "Battery Life": "7 days",
      "Water Resistance": "5ATM",
      "Display": "AMOLED",
      "Sensors": "Heart rate, SpO2, Temperature"
    }
  },
  {
    id: "eco-beauty-kit",
    title: "Sustainable Beauty Kit",
    description: "Complete skincare routine with zero-waste packaging and natural ingredients",
    fullDescription: "Experience luxury skincare while being kind to the planet. This comprehensive kit includes everything you need for a sustainable beauty routine, made with organic ingredients and zero-waste packaging.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Beauty",
    features: [
      "100% recyclable packaging",
      "Organic ingredients",
      "Cruelty-free",
      "Suitable for all skin types"
    ],
    specs: {
      "Product Count": "5 items",
      "Shelf Life": "12 months",
      "Certification": "Organic certified",
      "Origin": "Made in USA"
    }
  },
  {
    id: "smart-yoga-mat",
    title: "Smart Yoga Mat Pro",
    description: "Interactive yoga mat with pose correction and real-time feedback",
    fullDescription: "Elevate your yoga practice with this revolutionary smart mat featuring pressure-sensitive zones and LED guidance. Perfect for both beginners and advanced practitioners seeking to perfect their form.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Fitness",
    features: [
      "Real-time pose feedback",
      "Bluetooth connectivity",
      "Guided workouts",
      "Anti-slip surface"
    ],
    specs: {
      "Material": "Eco-friendly TPE",
      "Battery Life": "30 days",
      "Thickness": "5mm",
      "App Support": "iOS & Android"
    }
  },
  {
    id: "silk-sleep-set",
    title: "Luxury Silk Sleep Set",
    description: "Premium silk sleep mask, pillowcase, and scrunchies for the ultimate beauty sleep",
    fullDescription: "Transform your nighttime routine with this luxurious silk set designed to protect your skin and hair while you sleep. Made from the finest 22-momme mulberry silk for maximum comfort and beauty benefits.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdfZXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Lifestyle",
    features: [
      "100% Mulberry silk",
      "Anti-aging benefits",
      "Prevents hair breakage",
      "Temperature regulating"
    ],
    specs: {
      "Material": "22-momme silk",
      "Colors": "5 options",
      "Set Includes": "Mask, Pillowcase, 3 Scrunchies",
      "Care": "Hand wash or dry clean"
    }
  }
];