import React, { useState } from 'react';
import CTAButton from './CTAButton';

const ResultsSimulator: React.FC = () => {
  const [days, setDays] = useState(14);
  
  const results = {
    7: {
      reduction: 2,
      bloating: 'redução moderada',
      energy: 'notável melhoria'
    },
    14: {
      reduction: 5,
      bloating: 'redução significativa',
      energy: 'grande aumento'
    },
    21: {
      reduction: 9,
      bloating: 'eliminação quase completa',
      energy: 'transformação completa'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(Number(e.target.value));
  };

  return (
    <section className="section-spacing bg-white/30" id="simulator">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Simule seus resultados</h2>
        
        <div className="glass-card p-6 md:p-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">7 dias</span>
                  <span className="font-medium">14 dias</span>
                  <span className="font-medium">21 dias</span>
                </div>
                <input
                  type="range"
                  min="7"
                  max="21"
                  step="7"
                  value={days}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-jade-600"
                />
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold">Redução de circunferência: <span className="text-coral-500">{results[days as keyof typeof results].reduction}cm</span></p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold">Inchaço abdominal: <span className="text-coral-500">{results[days as keyof typeof results].bloating}</span></p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold">Níveis de energia: <span className="text-coral-500">{results[days as keyof typeof results].energy}</span></p>
                </div>
              </div>
              
              <div className="text-center">
                <CTAButton text="EU QUERO ESSES RESULTADOS" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-mint-400/20 to-coral-400/20 rounded-2xl blur-md"></div>
                <div className="relative h-[350px] overflow-hidden rounded-xl">
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ 
                      opacity: days === 7 ? 1 : 0,
                      backgroundImage: "url('https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ 
                      opacity: days === 14 ? 1 : 0,
                      backgroundImage: "url('https://images.pexels.com/photos/7991712/pexels-photo-7991712.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ 
                      opacity: days === 21 ? 1 : 0,
                      backgroundImage: "url('https://images.pexels.com/photos/7991624/pexels-photo-7991624.jpeg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <p className="font-bold">Resultados em {days} dias</p>
                    <p className="text-sm">Resultados podem variar conforme o organismo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSimulator;