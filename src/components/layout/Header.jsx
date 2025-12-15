import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { navigation, company } from '../../data';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-slate-900 text-white py-2 text-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="hidden md:block opacity-90">{company.tagline}</p>
                    <div className="flex gap-6">
                        <a href={`tel:${company.contact.phone}`} className="flex items-center gap-2 hover:text-primary-400 transition">
                            <Phone size={14} /> {company.contact.phone}
                        </a>
                        <a href={`mailto:${company.contact.email}`} className="flex items-center gap-2 hover:text-primary-400 transition">
                            <Mail size={14} /> {company.contact.email}
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                        SNOW<span className="text-primary-500">COOL</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div key={item.title} className="group relative">
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-1 font-medium hover:text-primary-600 transition ${location.pathname === item.path ? 'text-primary-600' : 'text-slate-600'}`}
                                >
                                    {item.title}
                                    {item.dropdown && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown */}
                                {item.dropdown && (
                                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="p-2">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    to={subItem.path}
                                                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 rounded-md transition"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 border-t border-slate-100 pt-4 pb-6 space-y-4">
                        {navigation.map((item) => (
                            <div key={item.title}>
                                <Link
                                    to={item.path}
                                    className="block font-medium text-slate-800 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 border-l-2 border-slate-100 mt-2 space-y-2">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                to={subItem.path}
                                                className="block text-sm text-slate-500 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
