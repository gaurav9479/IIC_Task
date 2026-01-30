import React from 'react';

export default function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;
  return (
    <div className="timeline-item">
      <div className={`flex items-center flex-col md:items-stretch gap-4 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="hidden md:block w-full md:w-1/2"></div>
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative md:absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 border-4 border-black md:mb-0"></div>
        <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right text-center' : 'md:pl-12 text-center'}`}>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
            <div className="font-bold text-blue-400 text-lg">{item.time}</div>
            <div className="text-xl font-semibold mt-2">{item.event}</div>
            <div className="text-gray-400 text-sm mt-1">📍 {item.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}