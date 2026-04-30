// import { Image } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Allanimels = async() => {
const res = await fetch('https://qurbani-hat-livestock-booking-platf.vercel.app/animals.json')
const data = await res.json()
const Featuredanimal = data.slice(0, 4)

    return (
        <div className="bg-gray-50 min-h-screen p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-10 border-b pb-5">
                    <h2 className="text-3xl font-extrabold text-gray-800 uppercase tracking-wider">
                        All Featured <span className="text-green-600">Animals</span>
                    </h2>
                    <p className="text-gray-500 font-medium">{Featuredanimal.length} Results Found</p>
                </div>

                {/* Grid Layout for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Featuredanimal.map((animal) => (
                        <div 
                            key={animal.id} 
                            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
                        >
                            {/* Card Image Section */}
                            <div className="relative h-56 overflow-hidden">
                                <Image 
                                    src={animal.image} 
                                    alt={animal.name}
                                    width={100}
                                    height={100}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    {animal.category || 'Livestock'}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-green-600 transition-colors">
                                    {animal.name}
                                </h3>
                                
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <span className="mr-2">⚖️</span>
                                        <span>Weight: <span className="font-semibold text-gray-900">{animal.weight} kg</span></span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <span className="mr-2">📍</span>
                                        <span>Location: <span className="font-semibold text-gray-900">{animal.location || 'N/A'}</span></span>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase font-bold">Price</p>
                                        <p className="text-lg font-black text-orange-600">৳ {animal.price.toLocaleString()}</p>
                                    </div>
                                    <Link href={`/allanimals/${animal.id}`}><button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors duration-300 active:scale-95">
                                        View Details
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Allanimels;