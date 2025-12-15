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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactForm = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        service: 'General Service',
        message: ''
    });
    const [status, setStatus] = React.useState('idle'); // idle, loading, success, error
    const [errorMsg, setErrorMsg] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            // Import dynamically to avoid top-level issues if env vars are missing during build/dev
            const { supabase } = await import('../lib/supabaseClient');

            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        service_type: formData.service,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', phone: '', email: '', service: 'General Service', message: '' });
        } catch (err) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMsg('Failed to send message. Please try again or call us directly.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'success' && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                    Message sent successfully! We will get back to you shortly.
                </div>
            )}
            {status === 'error' && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg">
                    {errorMsg}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                        placeholder="+91 98765 43210"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="john@example.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                >
                    <option value="General Service">General Service</option>
                    <option value="Repair / Breakdown">Repair / Breakdown</option>
                    <option value="Installation">Installation</option>
                    <option value="AMC Inquiry">AMC Inquiry</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition h-32"
                    placeholder="Tell us about your requirements..."
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === 'loading' ? 'Sending...' : (<><Send size={18} /> Send Message</>)}
            </button>
        </form>
    );
};


export default Contact;
