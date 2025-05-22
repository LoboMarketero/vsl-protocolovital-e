import React, { useEffect } from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
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
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <Benefits />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;