import React from 'react';
import Navigation from './component/Navigation';
import AdvancedHero from './component/Hero';
import MultiDirectional from './component/Multidirectional';
import HorizontalScroll from './component/Horizontaldirectional';
import StaggeredReveal from './component/Staggered';
import WhyIIC from './component/WhyIIC';
import FocusAreas from './component/FocusAreas';
import GlitchSection from './component/Glitch';
import FlipCardSection from './component/FlipCard';
import Functions from './component/Functions';
import StatsShowcase from './component/StatsShowcase';
import KPIOverlapSection from './component/KPIOverlapSection';
import Opportunities from './component/Opportunities';
import About from './component/About';
import InnovationShowcase from './component/InnovationShowcase';
import Schedule from './component/Schedule';
import TextRevealSection from './component/TextReveal';
import ParallexSection from './component/Parallax';
import TestimonialSection from './component/TestimonialSection';
import TeamSection from './component/TeamSection';
import FAQSection from './component/FAQSection';
import CTA from './component/CTA';
import Footer from './component/Footer';

export default function App() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="w-full mx-auto">
        <Navigation />
        <AdvancedHero />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyIIC />
          <FocusAreas />
          <MultiDirectional />
          <HorizontalScroll />
          <StaggeredReveal />
          <GlitchSection />
          <FlipCardSection />
          <Functions />
          <StatsShowcase />
          <KPIOverlapSection />
          <Opportunities />
          <About />
          <InnovationShowcase />
          <TextRevealSection />
          <ParallexSection />
          <Schedule />
          <TestimonialSection />
          <TeamSection />
          <FAQSection />
        </div>
        <CTA />
        <Footer/>
      </div>
    </div>
  );
}