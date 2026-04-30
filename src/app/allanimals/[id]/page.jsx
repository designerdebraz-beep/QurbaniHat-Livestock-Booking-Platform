
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import BookingButton from '@/component/shared/BookingButton';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
  
    
    // Fetching data
    const res = await fetch('https://qurbani-hat-livestock-booking-platf.vercel.app/animals.json', {
        cache: 'no-store'
    });
    const data = await res.json();
    
    // Finding the specific animal
    const animal = data.find(a => a.id == id);

    if (!animal) {
        return <div className="h-screen flex items-center justify-center font-bold text-2xl">Animal not found!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold mb-6 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to All Animals
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        
                        {/* Left Side: Image Section */}
                        <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                            <Image
                                src={animal.image || 'https://via.placeholder.com/800x600'}
                                alt={animal.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute top-5 left-5 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                {animal.category || 'Live Stock'}
                            </div>
                        </div>

                        {/* Right Side: Content Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                                    {animal.name}
                                </h1>
                                <span className="text-2xl font-black text-orange-600">
                                    ৳{animal.price?.toLocaleString()}
                                </span>
                            </div>

                            <p className="text-gray-500 mb-8 flex items-center">
                                <span className="mr-2">📍</span> {animal.location || 'Dhaka, Bangladesh'}
                            </p>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                    <p className="text-xs text-emerald-600 uppercase font-bold tracking-wider mb-1">Weight</p>
                                    <p className="text-xl font-bold text-gray-800">{animal.weight} KG</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                                    <p className="text-xs text-orange-600 uppercase font-bold tracking-wider mb-1">ID Number</p>
                                    <p className="text-xl font-bold text-gray-800">#{animal.id}</p>
                                </div>
                            </div>

                            {/* Description Placeholder */}
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    This {animal.name} is well-maintained and perfect for Qurbani. It is raised in a healthy environment with organic food. All health certificates are clear.
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">

                                <BookingButton animalName={animal.name} />
                                
                                {/* <button  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95">
                                    Book Now
                                </button> */}

                                <button className="flex-1 bg-white border-2 border-gray-200 hover:border-emerald-600 text-gray-700 font-bold py-4 rounded-2xl transition-all active:scale-95">
                                    Contact Owner
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl mb-2">🚚</div>
                        <h4 className="font-bold">Fast Delivery</h4>
                        <p className="text-xs text-gray-500">Safe delivery to your home</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl mb-2">✅</div>
                        <h4 className="font-bold">Quality Assured</h4>
                        <p className="text-xs text-gray-500">Verified and healthy livestock</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl mb-2">💳</div>
                        <h4 className="font-bold">Secure Payment</h4>
                        <p className="text-xs text-gray-500">Multiple payment options</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;