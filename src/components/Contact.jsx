import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get in <span>Touch</span></h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3 className="contact-heading">Contact Information</h3>
                        <p className="contact-sub">Fill up the form and our team will get back to you within 24 hours.</p>

                        <div className="contact-methods">
                            <div className="method">
                                <Phone className="method-icon" size={20} />
                                <span>+91 98408 61611</span>
                            </div>
                            <div className="method">
                                <Mail className="method-icon" size={20} />
                                <span>contact@snowcool.com</span>
                            </div>
                            <div className="method">
                                <MapPin className="method-icon" size={20} />
                                <span>Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Service Type</label>
                            <select>
                                <option>General Service</option>
                                <option>Repair</option>
                                <option>Installation</option>
                                <option>AMC</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
