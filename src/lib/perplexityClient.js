import { createChatbotContext } from '../data/chatbotContext';

// Backend API URL (auto-detect production vs development)
const API_URL = import.meta.env.VITE_API_URL ||
    (import.meta.env.PROD ? '' : 'http://localhost:3001');

/**
 * Send a message to the backend API which proxies to Perplexity
 * @param {Array} messages - Array of message objects with role and content
 * @returns {Promise<string>} - AI response text
 */
export const sendMessage = async (messages) => {
    try {
        // Create system message with Snow Cool context
        const systemMessage = {
            role: 'system',
            content: createChatbotContext()
        };

        // Combine system message with conversation history
        const fullMessages = [systemMessage, ...messages];

        // Call backend API
        const response = await fetch(`${API_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: fullMessages })
        });

        // Check if request was successful
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to get response');
        }

        const data = await response.json();
        return data.message;

    } catch (error) {
        console.error('Chat API Error:', error);

        // Provide user-friendly error messages
        if (error.message.includes('Failed to fetch') || error.message.includes('Network')) {
            throw new Error('Cannot connect to server. Please make sure the backend is running.');
        } else {
            throw new Error(error.message || 'Failed to get response. Please try again.');
        }
    }
};

/**
 * Validate that backend API is accessible
 * @returns {Promise<boolean>} - True if backend is reachable
 */
export const checkBackendHealth = async () => {
    try {
        const response = await fetch(`${API_URL}/api/health`);
        if (response.ok) {
            const data = await response.json();
            return data.status === 'ok';
        }
        return false;
    } catch (error) {
        console.error('Backend health check failed:', error);
        return false;
    }
};

/**
 * Check if API is configured (for backwards compatibility)
 * @returns {boolean} - Always true now that we use backend
 */
export const isApiKeyConfigured = () => {
    return true; // Backend handles API key
};
