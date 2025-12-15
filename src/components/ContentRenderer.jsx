import React from 'react';
import { CheckCircle } from 'lucide-react';

const ContentRenderer = ({ content }) => {
    if (!content) return null;

    const lines = content.split('\n');
    const elements = [];
    let currentList = [];

    const flushList = (key) => {
        if (currentList.length > 0) {
            elements.push(
                <ul key={`list-${key}`} className="list-unstyled mb-4">
                    {currentList.map((item, i) => (
                        <li key={i} className="d-flex align-items-start mb-2">
                            <CheckCircle className="text-primary me-2 mt-1 flex-shrink-0" size={18} />
                            <span>{renderBold(item)}</span>
                        </li>
                    ))}
                </ul>
            );
            currentList = [];
        }
    };

    const renderBold = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    lines.forEach((line, index) => {
        const trimmed = line.trim();

        if (!trimmed) return;

        if (trimmed.startsWith('### ')) {
            flushList(index);
            elements.push(<h3 key={index} className="h4 fw-bold mt-4 mb-3 text-primary">{trimmed.slice(4)}</h3>);
        } else if (trimmed.startsWith('## ')) {
            flushList(index);
            elements.push(<h2 key={index} className="h3 fw-bold mt-5 mb-4">{trimmed.slice(3)}</h2>);
        } else if (trimmed.startsWith('- ')) {
            currentList.push(trimmed.slice(2));
        } else {
            flushList(index);
            elements.push(<p key={index} className="text-muted mb-3 leading-relaxed">{renderBold(trimmed)}</p>);
        }
    });

    flushList('final');

    return <div className="content-renderer">{elements}</div>;
};

export default ContentRenderer;
