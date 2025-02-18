// components/Navigation.tsx
"use client";
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change to your desired scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-pink backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">STUDIO</div>
          <div className="hidden md:flex space-x-8">
            <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#flavors" className="hover:text-gray-300 transition-colors">Flavors</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
