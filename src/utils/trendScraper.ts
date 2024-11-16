import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

interface ScrapedProduct {
  title: string;
  description: string;
  image: string;
  category: string;
  trend: {
    percentage: number;
    direction: 'up' | 'down';
  };
}

const SOURCES = {
  AMAZON_MOVERS: 'https://www.amazon.com/gp/movers-and-shakers/fashion/ref=zg_bs_tab_t_bsms',
  PINTEREST_TRENDS: 'https://trends.pinterest.com/category/women-fashion/',
  ETSY_TRENDING: 'https://www.etsy.com/trending'
};

export async function scrapeAmazonTrends(): Promise<ScrapedProduct[]> {
  try {
    const response = await fetch(SOURCES.AMAZON_MOVERS, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const products: ScrapedProduct[] = [];

    $('.zg-item-immersion').each((i, elem) => {
      if (i < 5) { // Get top 5 products
        const title = $(elem).find('.p13n-sc-truncate').text().trim();
        const image = $(elem).find('img').attr('src') || '';
        const rankChange = parseInt($(elem).find('.zg-percent-change').text());

        products.push({
          title,
          description: `Trending on Amazon: ${title}`,
          image,
          category: 'Fashion',
          trend: {
            percentage: Math.abs(rankChange),
            direction: rankChange > 0 ? 'up' : 'down'
          }
        });
      }
    });

    return products;
  } catch (error) {
    console.error('Error scraping Amazon:', error);
    return [];
  }
}

export async function scrapePinterestTrends(): Promise<ScrapedProduct[]> {
  // Similar implementation for Pinterest
  return [];
}

export async function scrapeEtsyTrends(): Promise<ScrapedProduct[]> {
  // Similar implementation for Etsy
  return [];
}

export async function getAllTrendingProducts(): Promise<ScrapedProduct[]> {
  try {
    const [amazonProducts, pinterestProducts, etsyProducts] = await Promise.all([
      scrapeAmazonTrends(),
      scrapePinterestTrends(),
      scrapeEtsyTrends()
    ]);

    return [...amazonProducts, ...pinterestProducts, ...etsyProducts]
      .sort((a, b) => b.trend.percentage - a.trend.percentage)
      .slice(0, 10); // Get top 10 overall
  } catch (error) {
    console.error('Error getting trending products:', error);
    return [];
  }
}