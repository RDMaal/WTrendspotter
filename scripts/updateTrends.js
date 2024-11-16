import { getAllTrendingProducts } from '../src/utils/trendScraper.js';
import { analyzeProductTrends } from '../src/utils/aiTrendAnalyzer.js';
import fs from 'fs/promises';
import path from 'path';

async function updateTrendingProducts() {
  try {
    console.log('Fetching trending products...');
    const products = await getAllTrendingProducts();
    
    if (products.length === 0) {
      console.log('No products found. Keeping existing trends.');
      return;
    }

    console.log('Analyzing products with AI...');
    const analyzedProducts = await analyzeProductTrends(products);

    // Transform scraped products to match our data structure
    const trendingProducts = analyzedProducts.map((product, index) => ({
      id: `trend-${index + 1}`,
      rank: index + 1,
      ...product
    }));

    // Create the updated trending.ts content
    const fileContent = `export interface TrendingProduct {
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

export const trendingProducts: TrendingProduct[] = ${JSON.stringify(trendingProducts, null, 2)};`;

    // Write the updated content to the file
    await fs.writeFile(
      path.join(process.cwd(), 'src', 'data', 'trending.ts'),
      fileContent,
      'utf-8'
    );

    console.log('Successfully updated trending products with AI analysis!');
  } catch (error) {
    console.error('Error updating trending products:', error);
  }
}

updateTrendingProducts();