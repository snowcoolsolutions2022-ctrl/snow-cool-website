import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { ArrowLeft, Check, Info } from 'lucide-react';

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useContent();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary-600 mb-8 transition">
                    <ArrowLeft size={20} /> Back to Products
                </Link>

                <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                        {product.image ? (
                            <img src={product.image} alt={product.title} className="max-w-full max-h-[500px] object-contain rounded-lg shadow-md" />
                        ) : (
                            <div className="text-center text-slate-400 py-20">
                                <Info size={64} className="mx-auto mb-4 opacity-50" />
                                <p>Product Image Preview</p>
                            </div>
                        )}
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1 rounded-full text-sm font-bold mb-6 w-fit">
                            Premium AC Product
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{product.title}</h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="space-y-6 mb-8">
                            <h3 className="font-bold text-lg border-b border-slate-100 pb-2">Key Features</h3>
                            <ul className="space-y-3">
                                {[
                                    "High efficiency cooling",
                                    "Low noise operation",
                                    "Energy saving technology",
                                    "Durable construction"
                                ].map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <Check className="text-primary-500 shrink-0" size={20} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white text-center py-4 rounded-xl font-bold transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Inquire About This Product
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
