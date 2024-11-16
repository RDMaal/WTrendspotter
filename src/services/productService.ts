import type { Product } from '../types/Product';

const API_URL = 'https://fakestoreapi.com';

const WOMEN_CATEGORIES = [
  "women's clothing",
  "jewelery",
  "accessories",
  "bags",
  "beauty"
];

const EXCLUDED_TERMS = [
  "men's",
  "mens",
  "male",
  "boy",
  "boys",
  "grandpa",
  "grandfather",
  "dad",
  "father"
];

function isWomenOrUnisexProduct(product: Product): boolean {
  const lowerTitle = product.title.toLowerCase();
  const lowerDesc = product.description.toLowerCase();
  const lowerCategory = product.category.toLowerCase();

  // Check if it's explicitly in women's categories
  if (WOMEN_CATEGORIES.some(cat => lowerCategory.includes(cat))) {
    return true;
  }

  // Exclude if it contains men's terms
  if (EXCLUDED_TERMS.some(term => lowerTitle.includes(term) || lowerDesc.includes(term))) {
    return false;
  }

  // Include jewelry and accessories by default (considered unisex unless explicitly for men)
  if (lowerCategory.includes('jewelery') || lowerCategory.includes('accessories')) {
    return true;
  }

  return false;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    
    // Filter for women's and unisex products
    return products.filter(isWomenOrUnisexProduct)
      // Sort by rating to show most popular items first
      .sort((a, b) => b.rating.rate - a.rating.rate);
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
