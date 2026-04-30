import React from 'react';

const HeroBanner = () => {
  const backgroundImageUrl = "/banner.png";

  return (
    <section className="relative w-full min-h-screen md:h-screen flex items-center justify-center text-white overflow-hidden md:py-96">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        role="img"
        aria-label="Qurbani Livestock Banner"
      ></div>

      {/* Dark Gradient Overlay - Slightly darker on mobile for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center md:items-start text-center md:text-left justify-center h-full pt-20 md:pt-0">
        
        {/* Tagline */}
        <p className="inline-block px-4 py-2 mb-6 text-xs md:text-sm font-semibold uppercase tracking-widest bg-amber-500 text-slate-900 rounded-full">
          Trusted Livestock Marketplace
        </p>

        {/* Primary Headline */}
        <h1 className="max-w-3xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Find <span className="text-amber-400">Quality Livestock</span><br className="hidden md:block" />
          For Your Sacred Sacrifice
        </h1>

        {/* Secondary Description */}
        <p className="max-w-2xl text-base md:text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-normal px-2 md:px-0">
          Explore healthy, certified cows and goats from verified farmers. We connect you directly with the source, ensuring transparency and tradition.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 md:px-0">
          
          <button 
            type="button" 
            className="w-full sm:w-auto text-center px-10 py-4 text-base font-bold text-slate-900 bg-amber-400 rounded-lg shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300"
          >
            Browse Animals
          </button>
          
          <button 
            type="button" 
            className="w-full sm:w-auto text-center px-10 py-4 text-base font-semibold text-white bg-white/10 border border-white/20 rounded-lg shadow-lg backdrop-blur-sm hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            How it Works
          </button>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;