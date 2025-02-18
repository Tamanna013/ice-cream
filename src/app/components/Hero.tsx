"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-pink-300">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/heroImage.jpg"
          alt="Ice Cream"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md z-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 text-white font-sans"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-wide">
          Creative Ice Cream Studio
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light">
          Explore amazing flavors and more!
        </p>
      </motion.div>
    </section>
  );
}
