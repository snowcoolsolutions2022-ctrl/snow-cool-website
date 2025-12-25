import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { sendMessage, isApiKeyConfigured } from '../../lib/perplexityClient';
import { defaultGreeting, quickSuggestions } from '../../data/chatbotContext';
import './chatbot.css';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            content: defaultGreeting,
            isUser: false,
            timestamp: Date.now()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Focus input when chat opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSendMessage = async (messageText = inputValue) => {
        const trimmedMessage = messageText.trim();
        if (!trimmedMessage || isLoading) return;

        // Check if API key is configured
        if (!isApiKeyConfigured()) {
            setError('Please configure your Perplexity API key in .env.local');
            return;
        }

        // Clear input and error
        setInputValue('');
        setError(null);

        // Add user message
        const userMessage = {
            id: Date.now(),
            content: trimmedMessage,
            isUser: true,
            timestamp: Date.now()
        };
        setMessages(prev => [...prev, userMessage]);

        // Set loading state
        setIsLoading(true);

        try {
            // Prepare messages for API (only content and role)
            const apiMessages = messages
                .filter(msg => msg.content !== defaultGreeting) // Exclude greeting
                .map(msg => ({
                    role: msg.isUser ? 'user' : 'assistant',
                    content: msg.content
                }));

            // Add current message
            apiMessages.push({
                role: 'user',
                content: trimmedMessage
            });

            // Get AI response
            const aiResponse = await sendMessage(apiMessages);

            // Add AI message
            const aiMessage = {
                id: Date.now() + 1,
                content: aiResponse,
                isUser: false,
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {
            console.error('Chat error:', err);
            setError(err.message || 'Failed to get response. Please try again.');

            // Add error message to chat
            const errorMessage = {
                id: Date.now() + 1,
                content: `⚠️ ${err.message}`,
                isUser: false,
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickSuggestion = (suggestion) => {
        handleSendMessage(suggestion);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`chatbot-button ${isOpen ? 'chatbot-button-open' : ''}`}
                aria-label="Open chat"
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <MessageCircle size={24} />
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    {/* Header */}
                    <div className="chatbot-header">
                        <div className="chatbot-header-content">
                            <div className="chatbot-avatar">
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <h3 className="chatbot-title">Snow Cool Assistant</h3>
                                <p className="chatbot-status">
                                    <span className="status-indicator"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="chatbot-close-button"
                            aria-label="Close chat"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="chatbot-messages">
                        {messages.map(msg => (
                            <ChatMessage
                                key={msg.id}
                                message={msg.content}
                                isUser={msg.isUser}
                                timestamp={msg.timestamp}
                            />
                        ))}

                        {/* Quick Suggestions (only show initially) */}
                        {messages.length === 1 && !isLoading && (
                            <div className="quick-suggestions">
                                {quickSuggestions.map((suggestion, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleQuickSuggestion(suggestion)}
                                        className="quick-suggestion-button"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="chat-message ai-message">
                                <div className="message-avatar">
                                    <Loader2 className="avatar-icon animate-spin" size={20} />
                                </div>
                                <div className="message-content">
                                    <div className="message-bubble ai-bubble typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Error Display */}
                    {error && (
                        <div className="chatbot-error">
                            ⚠️ {error}
                        </div>
                    )}

                    {/* Input */}
                    <div className="chatbot-input-container">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="chatbot-input"
                            disabled={isLoading}
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={!inputValue.trim() || isLoading}
                            className="chatbot-send-button"
                            aria-label="Send message"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIChatbot;
