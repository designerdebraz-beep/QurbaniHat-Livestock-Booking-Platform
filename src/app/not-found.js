import Link from 'next/link';
// Import only if you installed via NPM
import 'animate.css';

const NotFound = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        {/* Animated 404 Text - Zoom In effect */}
        <h1 className="text-9xl font-black text-gray-200 tracking-tighter animate__animated animate__zoomIn">
          404
        </h1>
        
        {/* Content Section - Fade In Up effect */}
        <div className="-mt-12 md:-mt-16 animate__animated animate__fadeInUp">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name 
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons - Delayed animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-1s">
            <Link 
              href="/" 
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition-all duration-200 shadow-sm"
            >
              Return Home
            </Link>
            <Link 
              href="/allanimals"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-md transition-all duration-200"
            >
              View Animals
            </Link>
          </div>
        </div>

        {/* Small helper links - Slow fade in */}
        <div className="mt-12 text-sm text-gray-400 animate__animated animate__fadeIn animate__slow">
          <p>Need help? <Link href="/contact" className="text-green-600 hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;