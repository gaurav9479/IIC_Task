import React from 'react';

export const GridPattern = () => (
  <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  </div>
);

export const GradientBlob = ({ className = "" }) => (
  <div className={`absolute w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse ${className}`}></div>
);

export const BackgroundEffects = () => {
  return (
    <>
      <GridPattern />
      <GradientBlob className="bg-blue-600 top-0 left-0" />
      <GradientBlob className="bg-purple-600 bottom-0 right-0 delay-1000" />
    </>
  );
};

export default BackgroundEffects;
