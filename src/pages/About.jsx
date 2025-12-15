import React from 'react';
import { Award, Users, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../data/content'; // Importing old content for text reuse if needed, or better use hardcoded refined text

// Hardcoding refined content based on original
const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Snow Cool</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        25+ Years of Experience in Air Conditioning Services. Established in 2013, we are Chennai's trusted authorized dealers for Voltas and Blue Star.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 mb-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    ICY Private Limited established Snow Cool in 2013 at Chennai. We proudly convey that we are the Authorized Dealers in VOLTAS & BLUE STAR (air conditioners & PEPSI coolers).
                                </p>
                                <p>
                                    We run our business with dedicated, enthusiastic & qualified engineers focusing on work strategy in Air Conditioning and Refrigeration with pleasant feedback of experience and achievements.
                                </p>
                                <p>
                                    Under gifted guidance, the Company has evolved to step forward as the leading Sales and Service Dealers of all major national & multinational brands of air-conditioning systems in Chennai.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="Team meeting"
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Why We Lead the Industry</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Authorized Dealers</h3>
                        <p className="text-slate-600">Official partners for Voltas and Blue Star, ensuring genuine products and service.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                        <p className="text-slate-600">Highly qualified professionals with no less than 6 years of industry experience.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ThumbsUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                        <p className="text-slate-600">We solve complex technical tasks to provide the best service experience.</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to work with the best?</h2>
                    <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold transition inline-block">
                        Contact Us Today
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
