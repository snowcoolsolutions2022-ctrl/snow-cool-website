import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Perplexity API client
const perplexity = new OpenAI({
    apiKey: process.env.PERPLEXITY_API_KEY,
    baseURL: 'https://api.perplexity.ai'
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend server is running' });
});

// Chat endpoint - proxy to Perplexity API
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        // Validate request
        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({
                error: 'Invalid request. Messages array is required.'
            });
        }

        // Call Perplexity API
        const response = await perplexity.chat.completions.create({
            model: 'llama-3.1-sonar-small-128k-online',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500,
            stream: false
        });

        // Return the response
        res.json({
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
                error: 'Failed to get response from AI. Please try again.'
            });
        }
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/chat`);
});
