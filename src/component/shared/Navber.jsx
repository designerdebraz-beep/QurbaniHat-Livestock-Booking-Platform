"use client"; // Required for useState in Next.js App Router

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/allanimals" },
    
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className='container md:px-20'>
      <div className="border-b px-4 md:px-2 bg-white sticky top-0 z-50  ">
        <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

          {/* Logo Section */}
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Image
                src={"/logobgromove.png"}
                alt="logo"
                loading="eager"
                width={100}
                height={100}
                className="object-contain h-auto w-auto"
              />
            </Link>
            <span className="font-bold text-lg hidden sm:block">QurbaniHat</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-green-600 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/login" className="hover:text-green-600">Login</Link>
            <Link
              href="/register"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Sidebar/Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4 transition-all`}>
          <ul className="flex flex-col gap-4 text-base font-medium border-t pt-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-green-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <hr />
            <div className="flex flex-col gap-3">
              <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2">
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-green-600 text-white py-2 rounded-md"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;