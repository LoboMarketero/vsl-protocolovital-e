import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';
import Pricing from './components/Pricing';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      document.querySelectorAll('.hidden-content').forEach(el => {
        el.classList.add('show');
      });
    }, 0);

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
      <div className="bg-white/30">
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-2xl mb-4">
              <div style={{position: 'relative', paddingTop: '51.25%'}}>
                <iframe 
                  id="panda-83ef18b0-1d4b-4b84-a0e6-31b56b5f95fb" 
                  src="https://player-vz-ff1d2603-87c.tv.pandavideo.com.br/embed/?v=83ef18b0-1d4b-4b84-a0e6-31b56b5f95fb" 
                  style={{border: 'none', position: 'absolute', top: 0, left: 0}} 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
                  allowFullScreen={true}
                  width="100%" 
                  height="100%" 
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          showContent ? 'opacity-100 max-h-[5000px]' : 'opacity-0 max-h-0'
        }`}
      >
        <div className="container-custom">
          <div className="w-full max-w-xl mx-auto px-4 mb-8">
            <CTAButton 
              text="ACESSAR MEU PROTOCOLO 4F AGORA" 
              className="w-full md:w-auto text-center uppercase hidden-content"
            />
          </div>
        </div>
        <Benefits />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default App