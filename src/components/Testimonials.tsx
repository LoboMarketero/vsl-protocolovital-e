import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImages = [
  "https://i.postimg.cc/KYDS40zq/whats-dep3.png",
  "https://i.postimg.cc/1zQ19k9V/whats-dep4.png",
  "https://i.postimg.cc/j5qVfyns/whats-dep5.png"
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      handlePrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-spacing bg-white/30" id="testimonials">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">O que dizem as pessoas que já fizeram</h2>
        
        <div className="text-center mb-8 animate-on-scroll">
          <p className="text-lg md:text-xl font-medium text-jade-600">
            Mais de 2.400 mulheres já fizeram o Protocolo 4F – e transformaram a forma como se sentem no próprio corpo
          </p>
        </div>
        
        <div className="relative animate-on-scroll">
          <div 
            className="testimonial-carousel overflow-hidden" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonial-slide flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={image} 
                      alt={`Depoimento ${index + 1}`} 
                      className="w-full h-auto rounded-xl shadow-[0_20px_50px_rgba(46,125,50,0.7)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-20"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-jade-600" />
          </button>
          
          <button 
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-20"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-jade-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonialImages.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-coral-400' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;