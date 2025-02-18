"use client";
import { motion } from "framer-motion";

export default function Flavors() {
  const flavors = [
    { name: "Vanilla Bean", image: "/pic1.png" },
    { name: "Chocolate Fudge", image: "/pic2.jpeg" },
    { name: "Strawberry Swirl", image: "/pic3.avif" },
    { name: "Mint Chip", image: "/pic4.jpeg" },
    { name: "Cookies & Cream", image: "/pic5.jpg" },
    { name: "Peach Sorbet", image: "/pic6.avif" },
    { name: "Pistachio", image: "/pic7.jpg" },
    { name: "Salted Caramel", image: "/flavor8.jpg" },
    { name: "Coffee Crunch", image: "/pic9.jpeg" },
    { name: "Raspberry Ripple", image: "/pic10.jpeg" },
  ];

  return (
    <section id="flavors" className="py-12 px-4 bg-pink-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-pink-500 mb-6"
        >
          Our Delicious Ice Cream Flavors
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flavors.map((flavor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden h-64 bg-cover bg-center flex items-center justify-center text-white text-center"
              style={{ backgroundImage: `url(${flavor.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <h3 className="relative z-10 text-2xl font-bold">{flavor.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
