import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import FormData from 'form-data';

const RAPID_API_KEY = 'bfaf76f561msh6ac46964c8f5796p17c9a0jsnb0db8eea2479';
const WEBSHARE_PROXY_USER = 'ntmucmrg';
const WEBSHARE_PROXY_PASS = '98ezt3lhk24tc6v09psibagek91qzfrb0jgfnl0s';

// Webshare.io proxy list - they provide rotating proxies
const PROXY_LIST = [
  'p.webshare.io:80',
  'p.webshare.io:81',
  'p.webshare.io:82'
];

// Sample fashion image URLs for trend detection
const SAMPLE_FASHION_IMAGES = [
  'https://storage.googleapis.com/api4ai-static/samples/fashion-1.jpg',
  'https://storage.googleapis.com/api4ai-static/samples/fashion-2.jpg',
  'https://storage.googleapis.com/api4ai-static/samples/fashion-3.jpg'
];

// Trending search terms for women's fashion
const TRENDING_SEARCHES = [
  'women trending dresses',
  'women designer bags',
  'women luxury shoes',
  'women fashion accessories',
  'women trending outfits'
];

async function getRandomProxy() {
  return PROXY_LIST[Math.floor(Math.random() * PROXY_LIST.length)];
}

async function fetchWithProxy(url) {
  const proxy = await getRandomProxy();
  const proxyUrl = `http://${WEBSHARE_PROXY_USER}:${WEBSHARE_PROXY_PASS}@${proxy}`;
  const agent = new (await import('https-proxy-agent')).HttpsProxyAgent(proxyUrl);
  
  return fetch(url, {
    agent,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  });
}

async function getFashionTrendsFromImage(imageUrl) {
  try {
    const formData = new FormData();
    formData.append('url', imageUrl);

    const response = await fetch('https://fashion4.p.rapidapi.com/v1/results', {
      method: 'POST',
      headers: {
        'x-rapidapi-host': 'fashion4.p.rapidapi.com',
        'x-rapidapi-key': RAPID_API_KEY
      },
      body: formData
    });

    const result = await response.json();
    return result.results?.[0]?.items || [];
  } catch (error) {
    console.error('Error analyzing fashion image:', error);
    return [];
  }
}

async function searchProducts(query) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `https://real-time-product-search.p.rapidapi.com/search-v2?q=${encodedQuery}&country=us&language=en&page=1&limit=5&sort_by=BEST_MATCH&product_condition=ANY`,
      {
        headers: {
          'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY
        }
      }
    );

    const result = await response.json();
    return result.data || [];
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
}

async function getRapidAPITrendingProducts() {
  try {
    const products = [];
    
    // First, analyze trending fashion images to get style insights
    for (const imageUrl of SAMPLE_FASHION_IMAGES) {
      const fashionItems = await getFashionTrendsFromImage(imageUrl);
      
      // Use detected fashion items to enhance our search
      for (const item of fashionItems) {
        if (item.name) {
          const searchResults = await searchProducts(`women ${item.name}`);
          products.push(...searchResults.slice(0, 2));
        }
      }
    }

    // Then search for predefined trending terms
    for (const searchTerm of TRENDING_SEARCHES) {
      const searchResults = await searchProducts(searchTerm);
      products.push(...searchResults.slice(0, 2));
    }

    // Transform the products into our standard format
    return products.map(product => ({
      title: product.product_title,
      description: product.product_description || product.product_title,
      image: product.product_photos?.[0] || product.product_main_image_url,
      category: 'Women\'s Fashion',
      trend: {
        percentage: Math.floor(Math.random() * 50) + 20,
        direction: Math.random() > 0.5 ? 'up' : 'down',
      },
      price: product.offer.price,
      currency: product.offer.currency,
      url: product.product_url,
      store: product.offer.store_name
    }));
  } catch (error) {
    console.error('Error fetching from RapidAPI:', error);
    return getShopStyleTrendingProducts();
  }
}

async function getShopStyleTrendingProducts() {
  try {
    const response = await fetchWithProxy('https://www.shopstyle.com/browse/womens-clothes?sort=Trending');
    const html = await response.text();
    const $ = cheerio.load(html);
    const products = [];

    $('.product-card').each((i, el) => {
      if (i >= 10) return;

      const title = $(el).find('.product-name').text().trim();
      const image = $(el).find('.product-image img').attr('src');
      const price = $(el).find('.product-price').text().trim();
      const brand = $(el).find('.product-brand').text().trim();
      
      if (title && image) {
        products.push({
          title: `${brand} - ${title}`,
          description: title,
          image,
          category: 'Women\'s Fashion',
          trend: {
            percentage: Math.floor(Math.random() * 50) + 20,
            direction: Math.random() > 0.5 ? 'up' : 'down',
          },
          price,
          currency: 'USD'
        });
      }
    });

    return products;
  } catch (error) {
    console.error('Error fetching from ShopStyle:', error);
    return [];
  }
}

export async function getAllTrendingProducts() {
  try {
    // Try RapidAPI first
    const products = await getRapidAPITrendingProducts();
    
    if (products.length === 0) {
      console.log('No products found from RapidAPI, trying backup source...');
      return getShopStyleTrendingProducts();
    }

    return products;
  } catch (error) {
    console.error('Error fetching trending products:', error);
    return [];
  }
}
