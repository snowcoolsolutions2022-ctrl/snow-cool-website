import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { services } = useContent();
    const service = services.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-slate-900 text-white p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-xl text-slate-300">{service.shortDesc}</p>
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-slate-800">Overview</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {service.fullDesc}
                                </p>
                            </div>

                            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                                <h3 className="font-bold text-primary-800 mb-2">Why this service matters</h3>
                                <p className="text-primary-700">
                                    Regular professional attention ensures efficiency, longevity, and cleaner air for your space.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-lg mb-4">Service Includes</h3>
                                <ul className="space-y-3">
                                    {['Professional Inspection', 'Quality Parts', 'Expert Labor', 'Satisfaction Guarantee'].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-slate-600">
                                            <CheckCircle className="text-green-500 shrink-0" size={20} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-xl text-center">
                                <h3 className="font-bold text-lg mb-2">Need this service?</h3>
                                <p className="text-slate-400 mb-6 text-sm">Contact our experts today.</p>
                                <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white block w-full py-3 rounded-lg font-bold transition">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
