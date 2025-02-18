"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-gray-200/50 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            ICE CREAM
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#story"
              className={`transition-colors ${
                isScrolled ? "text-gray-900 hover:text-pink-600" : "text-white hover:text-pink-300"
              }`}
            >
              Story
            </a>
            <a
              href="#find"
              className={`transition-colors ${
                isScrolled ? "text-gray-900 hover:text-pink-600" : "text-white hover:text-pink-300"
              }`}
            >
              Find some
            </a>
            <a
              href="#flavors"
              className={`transition-colors ${
                isScrolled ? "text-gray-900 hover:text-pink-600" : "text-white hover:text-pink-300"
              }`}
            >
              Flavors
            </a>
            <a
              href="#connect"
              className={`transition-colors ${
                isScrolled ? "text-gray-900 hover:text-pink-600" : "text-white hover:text-pink-300"
              }`}
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
