import Link from 'next/link';
import Image from 'next/image';
// Importing specific icons from react-icons
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container md:px-20 bg-gray-50 border-t'>
      <footer className=" border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Section 1: About & Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logobgromove.png"
                  alt="QurbaniHat Logo"
                  width={80}
                  height={100}
                />
                <span className="text-xl font-bold text-green-700 uppercase tracking-tight">
                  QurbaniHat
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The most trusted digital marketplace for Qurbani livestock. We connect farmers directly with buyers to ensure healthy animals.
              </p>
              {/* Social Icons using react-icons */}
              <div className="flex gap-4 pt-2">
                <Link href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors text-xl">
                  <FaFacebook />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors text-xl">
                  <FaInstagram />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors text-xl">
                  <FaTwitter />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#CD201F] transition-colors text-xl">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4 uppercase text-xs tracking-widest">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-green-600 transition-colors">Home</Link></li>
                <li><Link href="/animals" className="hover:text-green-600 transition-colors">Browse Animals</Link></li>
                <li><Link href="/pricing" className="hover:text-green-600 transition-colors">Pricing Plan</Link></li>
                <li><Link href="/tips" className="hover:text-green-600 transition-colors">Qurbani Tips</Link></li>
              </ul>
            </div>

            {/* Section 3: Support */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4 uppercase text-xs tracking-widest">
                Support
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Refund Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Section 4: Contact Info */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4 uppercase text-xs tracking-widest">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-green-600 shrink-0 mt-1" />
                  <span>Sector 7, Uttara, Dhaka 1230, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-600 shrink-0" />
                  <span>+880 1234-567890</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-green-600 shrink-0" />
                  <span>support@qurbanihat.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} QurbaniHat. All rights reserved.
            </p>
            <div className="flex gap-4">
              <p className="text-gray-400 text-[10px]">Secure Payments via SSLCommerz</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;