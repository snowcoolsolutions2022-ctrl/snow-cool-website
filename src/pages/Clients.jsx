import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, Star } from 'lucide-react';

const Clients = () => {
    // Placeholder list since we don't have logos yet
    const clientCategories = [
        { title: "Residential", desc: "Serving 1000+ homes across Chennai", icon: Users },
        { title: "Commercial", desc: "Malls, Office Buildings, and Cineplexes", icon: Building },
        { title: "Industrial", desc: "Factories and Processing Units", icon: SettingsIcon },
    ];
    // Simple mock icon for compilation
    function SettingsIcon(props) { return <Building {...props} /> } // reuse

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Clients</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        We are proud to serve a diverse range of clients across residential, commercial, and industrial sectors.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {clientCategories.map((cat, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition duration-300">
                            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <cat.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                            <p className="text-slate-600">{cat.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                    <Star className="text-yellow-400 w-12 h-12 mx-auto mb-6" fill="currentColor" />
                    <h2 className="text-3xl font-bold mb-6">Join Our Client List</h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Experience the same high-quality service that hundreds of businesses in Chennai trust. Contact us for our detailed reference list.
                    </p>
                    <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold transition inline-block">
                        Become a Partner
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Clients;
