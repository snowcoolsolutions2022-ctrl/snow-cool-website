import OpenAI from 'openai';

/**
 * Vercel Serverless Function for Perplexity AI Chat
 * Handles chat requests and proxies to Perplexity API
 */
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        // Validate request
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({
                error: 'Invalid request. Messages array is required.'
            });
        }

        // Initialize Perplexity API client
        const perplexity = new OpenAI({
            apiKey: process.env.PERPLEXITY_API_KEY,
            baseURL: 'https://api.perplexity.ai'
        });

        // Call Perplexity API
        const response = await perplexity.chat.completions.create({
            model: 'llama-3.1-sonar-small-128k-online',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
            stream: false
        });

        // Return the response
        return res.status(200).json({
            success: true,
            message: response.choices[0].message.content
        });

    } catch (error) {
        console.error('Perplexity API Error:', error);

        // Handle different error types
        if (error.status === 401) {
            return res.status(401).json({
                error: 'Invalid API key. Please check your Perplexity API key.'
            });
        } else if (error.status === 429) {
            return res.status(429).json({
                error: 'Rate limit exceeded. Please try again in a moment.'
            });
        } else {
            return res.status(500).json({
                error: 'Failed to get response from AI. Please try again.',
                details: error.message
            });
        }
    }
}
