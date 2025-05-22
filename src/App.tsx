import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set timer for 5 minutes (300000 milliseconds)
    const timer = setTimeout(() => {
      setShowContent(true);
      // Add show class to all hidden-content elements
      document.querySelectorAll('.hidden-content').forEach(el => {
        el.classList.add('show');
      });
    }, 300000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <div 
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          showContent ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'
        }`}
      >
        <Benefits />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}