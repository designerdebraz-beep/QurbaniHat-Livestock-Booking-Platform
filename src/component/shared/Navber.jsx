"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// Added User icon for fallback
import { Menu, X, LogOut, User as UserIcon } from 'lucide-react'; 
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const usedata = authClient.useSession();
  const user = usedata.data?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/allanimals" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <div className='container md:px-20'>
      <div className="px-4 md:px-2 bg-white sticky top-0 z-50">
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

          {/* Auth Buttons & User Data (Desktop) */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {!user ? (
              <div className="flex items-center gap-4">
                <Link href="/login" className="hover:text-green-600">Login</Link>
                <Link
                  href="/register"
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* User Info Section */}
                <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 rounded-full border border-gray-100">
                  {user.image ? (
                    <Image
                      src={user?.image}
                      referrerPolicy='no-referrer'
                      alt={user?.name || "User"}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 p-1 rounded-full">
                      <UserIcon size={16} className="text-gray-600" />
                    </div>
                  )}
                  <span className="font-medium text-gray-700 max-w-[100px] truncate">
                    {user?.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-all"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
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
              {!user ? (
                <>
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
                </>
              ) : (
                <div className="flex flex-col gap-3">
                  {/* Mobile User Data Display */}
                  <div className="flex items-center gap-3 px-2 py-2">
                    {user?.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="bg-gray-100 p-2 rounded-full">
                        <UserIcon size={24} className="text-gray-600" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">{user.name}</span>
                      <span className="text-xs text-gray-500">{user.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-md"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;