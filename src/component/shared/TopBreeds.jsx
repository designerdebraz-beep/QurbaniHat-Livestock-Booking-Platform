import React from 'react';

const TopBreeds = () => {
  const breeds = [
    {
      name: "Sahiwal Bull",
      origin: "Pakistani/Indian",
      tag: "Premium Weight",
      // Live image of a classic Sahiwal bull
      img: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Black Bengal",
      origin: "Bangladesh",
      tag: "Best Meat Quality",
      // Live image representing a healthy goat
      img: "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=2070&auto=format&fit=crop" 
    },
    {
      name: "Brahman Cross",
      origin: "American/Hybrid",
      tag: "Huge Size",
      // Live image of a large healthy bull
      img: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Top Featured Breeds</h2>
            <p className="text-gray-600 mt-2">The most sought-after livestock for this season in Bangladesh.</p>
          </div>
          {/* <button className="text-green-700 font-bold border-b-2 border-green-700 pb-1 hover:text-green-800 transition-colors w-fit">
            Explore All Breeds
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg border border-gray-100">
              <div className="aspect-[4/5] w-full">
                <img 
                  src={breed.img} 
                  alt={breed.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="bg-amber-500 text-slate-900 text-[10px] uppercase font-bold px-3 py-1 rounded-full w-fit mb-3">
                  {breed.tag}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">{breed.name}</h3>
                <p className="text-gray-300 text-sm font-light">Origin: {breed.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;