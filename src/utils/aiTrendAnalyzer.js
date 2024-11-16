import fetch from 'node-fetch';

export async function analyzeProductTrends(products) {
  // Note: You'll need to add your OpenAI API key to your environment variables
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  
  if (!OPENAI_API_KEY) {
    console.warn('OpenAI API key not found. Skipping AI analysis.');
    return products;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "system",
          content: "You are a fashion trend analyst. Analyze these products and enhance their descriptions with trend insights."
        }, {
          role: "user",
          content: JSON.stringify(products)
        }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const enhancedProducts = JSON.parse(data.choices[0].message.content);
    
    return enhancedProducts;
  } catch (error) {
    console.error('Error during AI analysis:', error);
    return products;
  }
}
