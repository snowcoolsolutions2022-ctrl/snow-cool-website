import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

const Services = () => {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-16">
                    We offer a complete range of air conditioning services from installation to complex industrial maintenance.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-8 border border-slate-100">
                            {/* Icon placeholder logic could go here */}
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-600 mb-6 line-clamp-3">{service.fullDesc}</p>
                            <Link to={`/services/${service.id}`} className="text-primary-600 font-medium hover:text-primary-700 flex items-center gap-2">
                                View Details <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
