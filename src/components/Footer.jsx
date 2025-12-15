import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <Link to="/" className="footer-logo">
                        <Snowflake className="footer-logo-icon" size={24} />
                        <span>Snow Cool</span>
                    </Link>
                    <p className="footer-desc">
                        Trusted Care for Your Cooling Comfort.
                        Reliable maintenance, quick repairs, and cost-effective solutions.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Facebook size={18} /></a>
                        <a href="#" className="social-link"><Twitter size={18} /></a>
                        <a href="#" className="social-link"><Instagram size={18} /></a>
                        <a href="#" className="social-link"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        {/* Display top 5 services */}
                        {content.services.slice(0, 5).map((service, index) => (
                            <li key={index}><Link to={`/services/${service.id}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact">
                        <li>{content.siteInfo.address}</li>
                        <li><a href={`tel:${content.siteInfo.phone.replace(/\s+/g, '')}`}>{content.siteInfo.phone}</a></li>
                        <li><a href={`mailto:${content.siteInfo.email}`}>{content.siteInfo.email}</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; {new Date().getFullYear()} Snow Cool. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
