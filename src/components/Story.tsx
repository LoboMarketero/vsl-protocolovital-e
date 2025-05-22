import React from 'react';

const Story: React.FC = () => {
  return (
    <section className="section-spacing" id="story">
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">Por que a Dra. Mariana criou esse protocolo?</h2>
        
        <div className="glass-card p-6 md:p-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Há mais de 10 anos trabalhando com pacientes oncológicos, a Dra. Mariana notou um padrão comum em pessoas que tinham dificuldade para perder peso, mesmo com dietas rigorosas.
              </p>
              
              <p className="text-lg mb-4">
                Ao investigar mais a fundo, descobriu que muitos desses pacientes tinham parasitas intestinais não detectados, que prejudicavam seu metabolismo e causavam inflamação crônica.
              </p>
              
              <p className="text-lg mb-4">
                Após ver tantas pacientes frustradas com diagnósticos equivocados de "metabolismo lento" ou "problema hormonal", ela decidiu desenvolver um protocolo que tratasse a causa raiz do problema.
              </p>
              
              <p className="text-lg font-semibold text-jade-600">
                Assim nasceu o método 4F, resultado de 7 anos de pesquisa clínica e observação de milhares de casos bem-sucedidos.
              </p>
            </div>
            
            <div className="md:w-1/3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-jade-400/30 to-coral-400/30 rounded-2xl blur-md"></div>
                <img 
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                  alt="Dra. Mariana em laboratório" 
                  className="w-full h-auto rounded-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;