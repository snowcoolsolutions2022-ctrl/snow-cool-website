import React from 'react';

const PromoBanner = () => {
    return (
        <div className="w-[800px] mx-auto bg-blue-700 font-sans text-center border-4 border-white overflow-hidden relative shadow-2xl">
            {/* Top Header */}
            <div className="bg-blue-800 py-4 border-b-2 border-white/20">
                <h1 className="text-6xl font-black text-yellow-400 tracking-tighter drop-shadow-lg uppercase leading-none">
                    R.B.N HOME APPLIANCES
                </h1>
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest mt-1">
                    AUTHORISED SALES AND SERVICE
                </h2>
            </div>

            {/* Main Content Area */}
            <div className="p-8 bg-gradient-to-b from-blue-700 to-blue-600 relative">

                {/* Festival Text */}
                <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white leading-tight drop-shadow-md">
                        கிறிஸ்துமஸ் – புத்தாண்டு- பொங்கல்
                    </h3>
                    <div className="relative inline-block mt-2">
                        <h3 className="text-5xl font-black text-white leading-tight drop-shadow-md pb-2 border-b-4 border-dashed border-white/50 inline-block">
                            சிறப்பு தள்ளுபடி விற்பனை
                        </h3>
                    </div>
                </div>

                {/* Product Offer Box */}
                <div className="bg-white rounded-3xl p-6 mx-4 my-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transform rotate-1 border-4 border-yellow-400">
                    <h4 className="text-5xl font-black text-blue-900 mb-2 uppercase">1.5 ton AC</h4>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-6xl font-black text-red-600">₹27,999</span>
                        <span className="text-3xl font-bold text-slate-500 mt-4">முதல்</span>
                    </div>
                </div>

                {/* Additional Offers */}
                <div className="space-y-2 mb-8">
                    <h4 className="text-3xl font-bold text-yellow-300 uppercase drop-shadow-sm tracking-wide">
                        Exchange Offers Also Available
                    </h4>
                    <div className="bg-yellow-400 text-blue-900 px-6 py-2 text-4xl font-black inline-block rounded-lg transform -rotate-1 shadow-lg">
                        EMI AVAILABLE
                    </div>
                </div>
            </div>

            {/* Footer Strip */}
            <div className="bg-blue-900 py-6 border-t-4 border-yellow-400">
                <p className="text-3xl font-bold text-white italic tracking-wide">
                    உடனடி டெலிவரி, உடனடி இன்ஸ்டாலேஷன்
                </p>
            </div>

            {/* Address/Contact Placeholder (Optional per design but not in text request, keeping clean) */}
        </div>
    );
};

export default PromoBanner;
