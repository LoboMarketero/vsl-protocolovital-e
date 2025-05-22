import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  image: string;
  name: string;
  location: string;
  age: number;
  text: string;
  result: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    name: "Mariana Oliveira",
    location: "São Paulo",
    age: 42,
    text: "Depois de tentar tantas dietas, o Protocolo 4F foi o único método que realmente funcionou. Meu inchaço sumiu em uma semana!",
    result: "Perdeu 7kg em 21 dias"
  },
  {
    image: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg",
    name: "Carolina Mendes",
    location: "Rio de Janeiro",
    age: 38,
    text: "Minha energia voltou! Antes eu precisava de café o dia todo e mesmo assim me sentia cansada. Com o protocolo, tudo mudou.",
    result: "Perdeu 5kg e recuperou disposição"
  },
  {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    name: "Juliana Santos",
    location: "Belo Horizonte",
    age: 45,
    text: "A mudança na minha pele foi incrível. As pessoas começaram a perguntar qual produto eu estava usando, mas era só o protocolo!",
    result: "Reduziu inchaço e melhorou a pele"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swiped left
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      // Swiped right
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
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-br from-jade-400/30 to-coral-400/30 rounded-full blur-md"></div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-40 h-40 object-cover rounded-full mx-auto relative z-10"
                          />
                        </div>
                        <div className="text-center mt-4">
                          <p className="font-montserrat font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.location}, {testimonial.age} anos</p>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <div className="text-coral-400 mb-4">
                          <Quote className="h-8 w-8" />
                        </div>
                        <p className="text-lg mb-6 italic">{testimonial.text}</p>
                        <div className="bg-jade-100 text-jade-700 font-semibold px-4 py-2 rounded-lg inline-block">
                          {testimonial.result}
                        </div>
                      </div>
                    </div>
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
          {testimonials.map((_, index) => (
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