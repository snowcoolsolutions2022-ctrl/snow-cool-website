import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import technicianImage from '../assets/ac_technician.png';

const Home = () => {
    const { company, services, home } = useContent();
    const { hero, whoWeAre, pricing, whyChooseUs } = home || {};

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            {hero?.title || "Expert Cooling Solutions for Your Home & Business"}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            {hero?.subtitle || "From installation to annual maintenance, Snow Cool provides trusted air conditioning services with over 25 years of expertise."}
                        </p>
                        <div className="flex gap-4">
                            <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2">
                                Book a Service <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition backdrop-blur-sm">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="container mx-auto px-4 -mt-24 relative z-20">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary-500">
                        <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Certified Experts</h3>
                        <p className="text-slate-600">Our team consists of 50+ certified professionals with deep industry knowledge.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary-500">
                        <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">25+ Years Experience</h3>
                        <p className="text-slate-600">Decades of trust and thousands of successful projects across Chennai.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-primary-500">
                        <div className="bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                            <Shield size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
                        <p className="text-slate-600">We guarantee quality workmanship and stand behind every service we perform.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">{whyChooseUs?.title || "Why Choose Snow Cool?"}</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {whyChooseUs?.desc || "At Snow Cool, we specialize in comprehensive AC Annual Maintenance Contracts designed to ensure your cooling systems run smoothly all year long. Our expert technicians deliver regular servicing, timely inspections, and quick repairs."}
                            </p>
                            <div className="space-y-6">
                                {whyChooseUs?.features?.map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 h-12 w-12 flex items-center justify-center text-primary-600">
                                            {idx % 2 === 0 ? <CheckCircle size={24} /> : <Shield size={24} />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{feature.title}</h4>
                                            <p className="text-slate-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                )) || (
                                        <>
                                            {/* Fallback Static if array missing */}
                                            <div className="flex gap-4">
                                                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 h-12 w-12 flex items-center justify-center text-primary-600">
                                                    <CheckCircle size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg">Expert Technicians</h4>
                                                    <p className="text-slate-600">Certified professionals for skilled maintenance.</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-600 rounded-2xl transform rotate-3 opacity-10"></div>
                            <img
                                src={technicianImage}
                                alt="Technician working"
                                className="relative rounded-2xl shadow-xl z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
                    <p className="text-slate-600">Comprehensive air conditioning solutions tailored to your needs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.slice(0, 3).map(service => (
                        <div key={service.id} className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6">{service.shortDesc}</p>
                            <Link to={`/services/${service.id}`} className="text-primary-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                                Learn more <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
