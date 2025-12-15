import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { company, navigation, services } from '../../data';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white tracking-tight mb-6 block">
                            SNOW<span className="text-primary-500">COOL</span>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            {company.tagline}. Leading the way in air conditioning solutions for residential and commercial spaces.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition text-white">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navigation.map(item => (
                                <li key={item.title}>
                                    <Link to={item.path} className="hover:text-primary-400 transition flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 5).map(service => (
                                <li key={service.id}>
                                    <Link to={`/services/${service.id}`} className="hover:text-primary-400 transition block">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="text-primary-500 shrink-0" size={20} />
                                <span className="text-sm">{company.contact.address}</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-primary-500 shrink-0" size={20} />
                                <a href={`tel:${company.contact.phone}`} className="hover:text-white transition">{company.contact.phone}</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-primary-500 shrink-0" size={20} />
                                <a href={`mailto:${company.contact.email}`} className="hover:text-white transition">{company.contact.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
