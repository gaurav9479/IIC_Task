import React from 'react';
import { ArrowRight } from 'lucide-react';


export default function CTA() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent animate-pulse">
          Your Innovation Awaits
        </h2>
        <p className="text-gray-300 text-base sm:text-xl mb-8 leading-relaxed">
          Be part of a revolution. Join thousands of brilliant minds building the future. Your next breakthrough is just one registration away.
        </p>
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70">
          Join the Movement
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}