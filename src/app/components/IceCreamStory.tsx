"use client";

export default function IceCreamStory() {
  return (
    <section 
      className="py-16 px-6 bg-gradient-to-br from-pink-200 to-pink-300 flex justify-center"
    >
      <div className="max-w-5xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-md">
          The Story of Ice Cream 🍦
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          Ice cream has been around for centuries, with roots dating back to ancient China. 
          Here's a little journey through time!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Early Beginnings Card */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-pink-800">Early Beginnings</h3>
            <div className="relative mb-4">
              <img
                src="/pic10.webp"
                alt="Early Ice Cream"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mt-2">
              The first known ice cream was made in ancient China with snow, milk, and rice. 
              It wasn't until the 17th century that it became popular in Europe.
            </p>
          </div>

          {/* Modern Ice Cream Card */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-semibold text-pink-800">Modern Day Ice Cream</h3>
            <div className="relative mb-4">
              <img
                src="/pic11.jpeg"
                alt="Modern Ice Cream"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-700 mt-2">
              Today, ice cream comes in countless flavors and styles, from traditional vanilla 
              to crazy concoctions like cotton candy and bubblegum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
