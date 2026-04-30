import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        {/* Large Styled 404 Text */}
        <h1 className="text-9xl font-black text-gray-200 tracking-tighter">
          404
        </h1>
        
        {/* Content Section */}
        <div className="-mt-12 md:-mt-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name 
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-sm"
            >
              Return Home
            </Link>
            <Link 
              href="/animals" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-md transition-all duration-200"
            >
              View Animals
            </Link>
          </div>
        </div>

        {/* Optional: Small helper links */}
        <div className="mt-12 text-sm text-gray-400">
          <p>Need help? <Link href="/contact" className="text-green-600 hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;