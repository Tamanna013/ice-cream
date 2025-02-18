"use client";
import { useEffect, useState } from "react";

const flavors = [
  { name: "Vanilla Bliss", img: "/pic1.png" },
  { name: "Strawberry Dream", img: "/pic2.jpeg" },
  { name: "Chocolate Indulgence", img: "/pic3.avif" },
  { name: "Minty Fresh", img: "/pic4.jpeg" },
  { name: "Mango Delight", img: "/pic5.jpg" },
  { name: "Blueberry Burst", img: "/pic6.avif" },
  { name: "Caramel Swirl", img: "/pic7.jpg" },
  { name: "Pistachio Paradise", img: "/pic8.jpeg" },
  { name: "Cookies & Cream", img: "/pic9.jpeg" },
];

export default function Flavors() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 px-4 relative min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(${gradientPosition}deg, #ffafbd, #ffc3a0)`,
        transition: "background 0.5s ease",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {flavors.map((flavor, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${flavor.img})`, // Ensure the path is correct
              backgroundSize: "cover", // Ensure the image covers the container
              backgroundPosition: "center", // Ensure the image is centered
              height: "300px", // Adjust the height if needed
              width: "100%", // Ensure it spans the full width
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {flavor.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
