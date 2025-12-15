import React from 'react';
import { ArrowRight, Snowflake } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <Snowflake size={16} />
                    <span>Authorized Service Center</span>
                </div>

                <h1 className="hero-title">
                    Expert <span className="text-gradient">Cooling Solutions</span> <br />
                    For Your Comfort
                </h1>

                <p className="hero-subtitle">
                    Professional air conditioner maintenance, repair, and installation services.
                    We ensure your environment stays perfectly cool, efficient, and comfortable year-round.
                </p>

                <div className="hero-actions">
                    <button className="btn btn-primary hero-btn">
                        Get a Quote <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-secondary">
                        View Services
                    </button>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Years Exp</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">5k+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
