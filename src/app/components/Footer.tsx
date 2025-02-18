"use client";
export default function Footer() {
  return (
    <footer id="connect" className="py-12 px-4 bg-gradient-to-r from-pink-300 to-pink-500 via-pink-400 bg-[45deg]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">STUDIO</h3>
            <p className="text-white">Creating sweet digital experiences since 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-white">tamannashawmg@gmail.com</p>
            <p className="text-white">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Instagram</a>
              <a href="#" className="text-white hover:text-gray-300">Twitter</a>
              <a href="#" className="text-white hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white text-center text-white">
          <p>&copy; 2025 Ice Cream Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}