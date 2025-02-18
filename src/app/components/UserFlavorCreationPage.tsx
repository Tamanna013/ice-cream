"use client";
import { motion } from "framer-motion";

export default function Flavors() {
  const flavors = [
    { name: "Vanilla Bean", image: "/pic1.png" },
    { name: "Chocolate Fudge", image: "/pic3.avif" },
    { name: "Strawberry Swirl", image: "/pic2.jpeg" },
    { name: "Mint Chip", image: "/pic4.jpeg" },
    { name: "Cookies & Cream", image: "/pic5.jpg" },
    { name: "Peach Sorbet", image: "/pic7.jpg" },
    { name: "Pistachio", image: "/pic6.avif" },
    { name: "Butter Scotch", image: "/pic8.jpeg" },
    { name: "Mango-Tango", image: "/pic9.jpeg" },
  ];

  return (
    <section id="flavors" className="py-12 px-4 bg-pink-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-pink-500 mb-10"
        >
          Our Delicious Ice Cream Flavors
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden h-72 bg-cover bg-center flex items-center justify-center text-white text-center group"
              style={{ backgroundImage: `url(${flavor.image})` }}
            >
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
              {/* Flavor name */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-2xl font-bold opacity-80 group-hover:opacity-100 transition-opacity"
              >
                {flavor.name}
              </motion.h3>
              {/* Subtle scale animation on hover */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
