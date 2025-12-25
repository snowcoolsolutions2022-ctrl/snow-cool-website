import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Products = () => {
    const { products } = useContent();
    return (
        <div className="py-20 container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition">
                        <div className="h-48 bg-slate-100 overflow-hidden">
                            {product.image ? (
                                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <span>No Image Available</span>
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.description}</p>
                            <Link to={`/products/${product.id}`} className="text-sm font-semibold text-primary-600 hover:text-primary-700">
                                View Specifications
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
