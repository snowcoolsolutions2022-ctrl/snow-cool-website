import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AIChatbot from '../chatbot/AIChatbot';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <AIChatbot />
        </div>
    );
};

export default MainLayout;
