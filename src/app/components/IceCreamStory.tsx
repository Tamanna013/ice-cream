"use client";
import Image from "next/image";

export default function IceCreamStory() {
  return (
    <section
      id="story"
      className="py-16 px-6 bg-pink-300 flex justify-center"
    >
      <div className="max-w-5xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
          The Story of Ice Cream 🍦
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          Ice cream has been around for centuries, with roots dating back to ancient China. 
          Here is a little journey through time!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-pink-800 mb-2">Early Beginnings</h3>
            <div className="relative mb-6">
              <Image
                src="/pic10.webp"
                width={400}
                height={300}
                alt="Early Ice Cream"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mt-2 text-lg">
              The first known ice cream was made in ancient China with snow, milk, and rice. 
              It was not until the 17th century that it became popular in Europe.
            </p>
          </div>

          <div className="bg-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-pink-800 mb-2">Modern Day Ice Cream</h3>
            <div className="relative mb-6">
              <Image
                src="/pic11.jpeg"
                height={300}
                width={400}
                alt="Modern Ice Cream"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mt-2 text-lg">
              Today, ice cream comes in countless flavors and styles, from traditional vanilla 
              to crazy concoctions like cotton candy and bubblegum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
