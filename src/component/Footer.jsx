import React from 'react'
import { Github, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">IC</div>
              <span className="font-bold text-sm sm:text-base">Innovation Council</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed\">Igniting minds. Empowering dreamers. Building the future together.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#schedule" className="hover:text-blue-400 transition">Schedule</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-900 border border-blue-500/20 rounded-lg flex items-center justify-center hover:border-blue-500/50 transition-colors"><Github size={18} /></a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-blue-500/20 rounded-lg flex items-center justify-center hover:border-blue-500/50 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Innovation Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer