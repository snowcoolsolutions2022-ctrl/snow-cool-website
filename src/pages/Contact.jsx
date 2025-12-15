import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { company } from '../data/company';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Get in touch for expert AC repairs, installation, or AMC inquiries. We are here to help.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
                            <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                <p className="text-slate-600 mb-2">24/7 Support Available</p>
                                <a href={`tel:${company.contact.phone}`} className="text-primary-600 font-bold hover:underline">{company.contact.phone}</a>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
                            <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                <p className="text-slate-600 mb-2">For quotes and inquiries</p>
                                <a href={`mailto:${company.contact.email}`} className="text-primary-600 font-bold hover:underline break-all">{company.contact.email}</a>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg flex items-start gap-4">
                            <div className="bg-primary-50 p-3 rounded-lg text-primary-600">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                                <p className="text-slate-600 mb-2">Head Office</p>
                                <p className="text-slate-700 font-medium">{company.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition">
                                        <option>General Service</option>
                                        <option>Repair / Breakdown</option>
                                        <option>Installation</option>
                                        <option>AMC Inquiry</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition h-32" placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
                                    <Send size={18} /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
