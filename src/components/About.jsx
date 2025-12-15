import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-content">
                <div className="about-text">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>
                        Trusted Care for <br /><span>Cooling Comfort</span>
                    </h2>
                    <p className="about-desc">
                        Snow Cool has been a pioneer in air conditioning services, offering top-tier maintenance and repair solutions.
                        We are dedicated to ensuring your systems run efficiently and your environment stays comfortable.
                    </p>

                    <div className="about-features">
                        <div className="feature">
                            <Target className="feature-icon" />
                            <div>
                                <h5>Precision</h5>
                                <p>Accurate diagnosis and repair</p>
                            </div>
                        </div>
                        <div className="feature">
                            <Users className="feature-icon" />
                            <div>
                                <h5>Expert Team</h5>
                                <p>Certified & trained technicians</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-image">
                    {/* In a real project, use a real image. Using a placeholder div for now */}
                    <div className="img-placeholder">
                        <Award size={64} className="placeholder-icon" />
                        <span>Professional Service</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
