import React from 'react';
import { Check, Shield, Clock, Wrench } from 'lucide-react';
import { amcPlans, amcBenefits, company } from '../data';
import { Link } from 'react-router-dom';

const AMC = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Annual Maintenance Contracts</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Ensure zero downtime and peak efficiency for your cooling systems with our tailored maintenance plans.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10">
                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {amcPlans.map((plan) => (
                        <div key={plan.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${plan.isRecommended ? 'border-primary-500 transform md:-translate-y-4' : 'border-transparent'}`}>
                            {plan.isRecommended && (
                                <div className="bg-primary-500 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                                    Recommended
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                                <div className="text-primary-600 font-bold text-xl mb-6">{plan.price}</div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-600">
                                            <Check className="text-green-500 shrink-0 mt-1" size={18} />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={`block w-full text-center py-3 rounded-lg font-bold transition ${plan.isRecommended ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Our AMC?</h2>
                        <p className="text-slate-600">Comprehensive coverage for your peace of mind.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {amcBenefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="bg-primary-50 rounded-full w-8 h-8 flex items-center justify-center text-primary-600 shrink-0">
                                    <Check size={16} />
                                </div>
                                <p className="text-slate-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Ready to secure your comfort?</h2>
                    <p className="text-primary-100 mb-8 text-lg">Contact us today for a customized AMC proposal for your home or business.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href={`tel:${company.contact.phone}`} className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-primary-50 transition flex items-center justify-center gap-2">
                            <Clock size={20} /> Call Now
                        </a>
                        <Link to="/contact" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition flex items-center justify-center gap-2">
                            <Wrench size={20} /> Request Service
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AMC;
