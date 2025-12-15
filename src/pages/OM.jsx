import React from 'react';
import { Briefcase, Settings, Users, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const OM = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Operation & Maintenance</h1>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Specialized O&M solutions for commercial malls, IT parks, and industrial units.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Settings className="text-primary-500" /> Hard Services
                        </h2>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-500 rounded-full"></div> Mechanical & Electrical Maintenance</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-500 rounded-full"></div> BMS Operation</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-500 rounded-full"></div> Plant Maintenance</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-500 rounded-full"></div> HVAC Operation & Maintenance</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-primary-500 rounded-full"></div> Plumbing & Water Management</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Droplet className="text-primary-500" /> Soft Services
                        </h2>
                        <ul className="space-y-4 text-slate-600">
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Housekeeping</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Janitorial Services</li>
                            <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Garden & Lawn Maintenance</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-primary-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">We Deploy Trained Personnel</h2>
                        <div className="grid grid-cols-2 gap-4 text-slate-700">
                            <div className="flex items-center gap-2"><Users size={16} /> AC Technicians</div>
                            <div className="flex items-center gap-2"><Users size={16} /> B-License Electricians</div>
                            <div className="flex items-center gap-2"><Users size={16} /> DG & WTP Technicians</div>
                            <div className="flex items-center gap-2"><Users size={16} /> Engineers & Staff</div>
                        </div>
                    </div>
                    <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold transition whitespace-nowrap">
                        Request Proposal
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OM;
