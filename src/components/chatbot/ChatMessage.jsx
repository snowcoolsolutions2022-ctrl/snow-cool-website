import React from 'react';
import { User, Bot } from 'lucide-react';

const ChatMessage = ({ message, isUser, timestamp }) => {
    return (
        <div className={`chat-message ${isUser ? 'user-message' : 'ai-message'}`}>
            <div className="message-avatar">
                {isUser ? (
                    <User className="avatar-icon" size={20} />
                ) : (
                    <Bot className="avatar-icon" size={20} />
                )}
            </div>
            <div className="message-content">
                <div className={`message-bubble ${isUser ? 'user-bubble' : 'ai-bubble'}`}>
                    {message}
                </div>
                {timestamp && (
                    <div className="message-timestamp">
                        {new Date(timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatMessage;
